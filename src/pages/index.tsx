import React, { useMemo } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { Params, apiGet, getLinksStoryblok } from '@/utils/api'
import { Version } from '@/config/version'
import { Language } from '@/config/language'
import { LanguageType } from '@/types/language-types'
import { API_TOKEN_STORYBLOK, PREVIEW_TOKEN_STORYBLOK } from '@/config'
import { ISbStoryData } from '@storyblok/react'
import { SlugContext, SlugContextProps } from '@/config/slugContext'
import StoryblokProvider from '@/components/Storyblok/StoryblokProvider'
import { InfoSlug, InfoSlugListResponse } from '@/types/storyblok-types'
import { SlugProps } from '@/types/slug-types'

const linksParser = (data: InfoSlugListResponse): InfoSlug[] =>
  Object.values(data.links || []) // Object<Object> парсим в array
    .filter((story) => !story.is_folder) // убираем папки

export const getStaticProps: GetStaticProps = async ({ locale = 'en', preview = false }) => {
  const apiParams: Params = {
    version: preview ? Version.Draft : Version.Published,
    language: locale === 'en' ? Language.en : (locale as LanguageType),
    token: preview ? PREVIEW_TOKEN_STORYBLOK : API_TOKEN_STORYBLOK,
  }

  const response = await apiGet<{ story?: ISbStoryData }>({
    url: 'stories/home',
    params: apiParams,
  })

  const links = await getLinksStoryblok()

  return {
    props: {
      story: response.story || null,
      preview,
      links,
      slug: 'home',
    },
    revalidate: 3600,
  }
}

const Home: NextPage<SlugProps> = ({ links, slug, story }) => {
  const contextValue = useMemo<SlugContextProps>(() => ({ links: linksParser(links), slug }), [links])

  if (story === null) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <h3 className='text-center'>Ошибка</h3>
      </div>
    )
  }

  return (
    <SlugContext.Provider value={contextValue}>
      <StoryblokProvider story={story} />
    </SlugContext.Provider>
  )
}

export default Home

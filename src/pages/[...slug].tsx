import { Language } from '@/config/language'
import { Version } from '@/config/version'
import { InfoSlug, InfoSlugListResponse } from '@/types/storyblok-types'
import { API_TOKEN_STORYBLOK, PREVIEW_TOKEN_STORYBLOK } from '@/config'
import { Params, apiGet, getLinksStoryblok } from '@/utils/api'
import { ISbStoryData } from '@storyblok/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FC, useMemo } from 'react'
import StoryblokProvider from '@/components/Storyblok/StoryblokProvider'
import { LanguageType } from '@/types/language-types'
import { SlugContext, SlugContextProps } from '@/config/slugContext'

interface SlugProps {
  story: ISbStoryData | null
  links: InfoSlugListResponse
  slug: string
}

const linksParser = (data: InfoSlugListResponse): InfoSlug[] =>
  Object.values(data.links || []) // Object<Object> парсим в array
    .filter((story) => !story.is_folder) // убираем папки

export const getStaticPaths: GetStaticPaths = async ({ locales = [] }) => {
  const data = await getLinksStoryblok()

  const paths = linksParser(data)
    .map((story) => {
      // парсим для getStaticPaths
      const slug = story.slug.split('/')
      return locales.map((locale) => ({ params: { slug }, locale }))
    })
    .flat()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale = 'en', preview = false }) => {
  if (params === undefined) {
    // Обработка случая, когда params не определен
    return {
      props: {
        notFound: true,
      },
    }
  }

  const apiParams: Params = {
    version: preview ? Version.Draft : Version.Published,
    language: locale === 'en' ? Language.en : (locale as LanguageType),
    token: preview ? PREVIEW_TOKEN_STORYBLOK : API_TOKEN_STORYBLOK,
  }

  const slugs: string = Array.isArray(params.slug) ? params.slug.join('/') : ''
  const response = await apiGet<{ story?: ISbStoryData }>({
    url: `stories/${slugs}`,
    params: apiParams,
  })

  const links = await getLinksStoryblok()

  return {
    props: {
      story: response.story || null,
      preview,
      links,
      slug: Array.isArray(params.slug) ? params.slug[0] : params.slug,
    },
    revalidate: 3600,
  }
}

const Slug: FC<SlugProps> = ({ story, links, slug }) => {
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

export default Slug

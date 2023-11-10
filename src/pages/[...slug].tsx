import { Language } from '@/config/language'
import { Version } from '@/config/version'
import { InfoSlugListResponse } from '@/types/storyblok-types'
import { API_TOKEN_STORYBLOK, PREVIEW_TOKEN_STORYBLOK } from '@/config'
import { Params, apiGet } from '@/utils/api'
import { ISbStoryData, StoryblokComponent, useStoryblokState } from '@storyblok/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FC } from 'react'

interface SlugProps {
  story: ISbStoryData | null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await apiGet<InfoSlugListResponse>({
    url: 'links/',
    params: {
      token: process.env.PREVIEW_SECRET_TOKEN,
    },
  })

  const paths = Object.values(data.links || []) // Object<Object> парсим в array
    .filter((story) => {
      if (story.is_folder) {
        // убираем папки
        return false
      }
      return story.slug
    })
    .map((story) => ({ params: { slug: story.slug.split('/') } })) // парсим для getStaticPaths

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale, preview = false }) => {
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
    language: locale === Language.En ? Language.Default : Language.Ru,
    token: preview ? PREVIEW_TOKEN_STORYBLOK : API_TOKEN_STORYBLOK,
  }

  const slugs: string = Array.isArray(params.slug) ? params.slug.join('/') : ''
  const response = await apiGet<{ story?: ISbStoryData }>({
    url: `stories/${slugs}`,
    params: apiParams,
  })

  return {
    props: {
      story: response.story || null,
    },
    revalidate: 3600,
  }
}

const Slug: FC<SlugProps> = ({ story }) => {
  const storyState = useStoryblokState(story)

  if (story === null) {
    return <h1 className='text-center'>Storyblok error</h1>
  }
  return <StoryblokComponent blok={storyState?.content} />
}

export default Slug

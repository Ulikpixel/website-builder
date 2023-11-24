import { ISbStoryData } from '@storyblok/react'
import { InfoSlugListResponse } from './storyblok-types'

export interface SlugProps {
  story: ISbStoryData | null
  links: InfoSlugListResponse
  slug: string
}
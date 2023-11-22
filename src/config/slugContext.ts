import { InfoSlug } from '@/types/storyblok-types'
import { createContext } from 'react'

export interface SlugContextProps {
  links: InfoSlug[]
  slug: string
}

export const SlugContext = createContext<SlugContextProps | null>(null)
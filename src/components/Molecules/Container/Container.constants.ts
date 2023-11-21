import { ContainerStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'

export const variants: { [key in ContainerStoryblok['variants']]: string } = {
  small: 'gap-3.5',
  medium: 'gap-9',
  large: 'gap-12',
  xlarge: 'gap-16',
}

export const grids: { [key in NonNullable<ContainerStoryblok['grid']>]: string } = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}
import { ContainerStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'

type BackgroundsKey = {
  [key in NonNullable<ContainerStoryblok['background']>]: string
}

export const backgrounds: BackgroundsKey = {
  'blue-dark': 'bg-organick-blue-dark',
  green: 'bg-organick-green',
  dark: 'bg-organick-dark',
  grey: 'bg-organick-grey',
  'green-opacity': 'bg-green-opacity'
}

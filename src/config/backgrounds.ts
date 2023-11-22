import { ContainerStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'

export const backgrounds: { [key in NonNullable<ContainerStoryblok['background']>]: string } = {
  'blue-dark': 'bg-organick-blue-dark',
  green: 'bg-organick-green',
  dark: 'bg-organick-dark',
  grey: 'bg-organick-grey',
  'green-opacity': 'bg-green-opacity'
}

import { ContainerStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'

type VariantsKey = { [key in ContainerStoryblok['variants']]: string }
type GridsKey = { [key in NonNullable<ContainerStoryblok['grid']>]: string }

export const variants: VariantsKey = {
  small: 'gap-3.5',
  medium: 'gap-9',
  large: 'gap-12',
  xlarge: 'gap-16',
}

export const grids: GridsKey = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}
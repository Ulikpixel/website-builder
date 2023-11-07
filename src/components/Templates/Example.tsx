import { ExampleStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import { StoryblokComponent } from '@storyblok/react'
import React, { FC } from 'react'

interface ExampleProps {
  blok: ExampleStoryblok
}

const Example: FC<ExampleProps> = ({ blok }) => (
  <main>
    {blok.list?.map(
      // eslint-disable-next-line
      (nestedBlok) => <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />,
    )}
  </main>
)

export default Example

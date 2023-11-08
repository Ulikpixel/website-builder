import { ExampleStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import React, { FC } from 'react'

interface ExampleProps {
  blok: ExampleStoryblok
}

const Example: FC<ExampleProps> = ({ blok }) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <main className='text-center' {...storyblokEditable(blok)}>
    <h5>{blok.title}</h5>
    <p>{blok.description}</p>
    {blok.list?.map(
      // eslint-disable-next-line
      (nestedBlok) => <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />,
    )}
  </main>
)

export default Example

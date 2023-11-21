import { OrganickStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { NextSeo } from 'next-seo'
import React, { FC } from 'react'

interface OrganickProps {
  blok: OrganickStoryblok
}

const Organick: FC<OrganickProps> = ({ blok }) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <main {...storyblokEditable(blok)}>
    <NextSeo title={blok.title} description={blok.description} />
    {blok.content.map((nestedBlok) => (
      // eslint-disable-next-line
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
)

export default Organick
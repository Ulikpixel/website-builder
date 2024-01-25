import Footer from '@/components/Organisms/Organick/Footer/Footer'
import Header from '@/components/Organisms/Organick/Header/Header'
import { OrganickStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import { InfoSlugListResponse } from '@/types/storyblok-types'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { NextSeo } from 'next-seo'
import React, { FC } from 'react'

interface OrganickProps {
  blok: OrganickStoryblok
  links: InfoSlugListResponse
}

const Organick: FC<OrganickProps> = ({ blok }) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <>
    <NextSeo title={blok.title} description={blok.description} />
    <Header />
    <main {...storyblokEditable(blok)}>
      {blok.content.map((nestedBlok, idx) => (
        /* eslint-disable no-underscore-dangle */
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
    <Footer />
  </>
)

export default Organick

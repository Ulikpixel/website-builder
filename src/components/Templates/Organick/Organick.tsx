import Footer from '@/components/Organisms/Organick/Footer/Footer'
import Header from '@/components/Organisms/Organick/Header/Header'
import { OrganickStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import { InfoSlugListResponse } from '@/types/storyblok-types'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { NextSeo } from 'next-seo'
import React, { FC } from 'react'
import uniqid from 'uniqid'

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
        // eslint-disable-next-line react/no-array-index-key
        <StoryblokComponent blok={nestedBlok} key={`${idx}-${uniqid()}`} />
      ))}
    </main>
    <Footer />
  </>
)

export default Organick

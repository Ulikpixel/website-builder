import { ContainerStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import clsx from 'clsx'
import React, { FC } from 'react'
import { backgrounds, grids, variants } from './Container.constants'

interface ContainerProps {
  blok: ContainerStoryblok
}

const Container: FC<ContainerProps> = ({ blok }) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <section
    {...storyblokEditable(blok)}
    className={clsx('py-20 lg:py-40', blok.background ? backgrounds[blok.background] : 'bg-default-white')}
  >
    <div className={clsx('container grid', variants[blok.variants], blok.grid ? grids[blok.grid] : 'grid-cols-1')}>
      {blok.content.map((nestedBlok) => (
        // eslint-disable-next-line
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  </section>
)

export default Container

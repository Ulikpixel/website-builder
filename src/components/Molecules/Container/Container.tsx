import { ContainerStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import clsx from 'clsx'
import React, { FC } from 'react'
import uniqid from 'uniqid'
import { backgrounds } from '@/config/backgrounds'
import { grids, variants } from './Container.constants'

interface ContainerProps {
  blok: ContainerStoryblok
}

const isProduct = (data: ContainerStoryblok['content']): boolean =>
  Object.values(data).some((item) => item.component === 'product')

const Container: FC<ContainerProps> = ({ blok }) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <section
    {...storyblokEditable(blok)}
    className={clsx('py-20 lg:py-40', blok.background ? backgrounds[blok.background] : 'bg-default-white')}
  >
    <div
      className={clsx(
        'grid',
        variants[blok.variants],
        blok.grid ? grids[blok.grid] : 'grid-cols-1',
        isProduct(blok.content) ? '' : 'container',
      )}
    >
      {blok.content.map((nestedBlok, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <StoryblokComponent blok={nestedBlok} key={`${idx}-${uniqid()}`} idx={idx} />
      ))}
    </div>
  </section>
)

export default Container

import { ExampleBlockStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import React, { FC } from 'react'

interface ExampleBlokProps {
  blok: ExampleBlockStoryblok
}

const ExampleBlok: FC<ExampleBlokProps> = ({ blok }) => (
  <div>
    <p>{blok.name}</p>
  </div>
)

export default ExampleBlok

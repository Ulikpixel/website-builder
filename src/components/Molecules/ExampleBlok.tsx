import { ExampleBlockStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import { insertEmojis } from '@/utils/emoji-parser/emoji-parser'
import React, { FC } from 'react'

interface ExampleBlokProps {
  blok: ExampleBlockStoryblok
}

const ExampleBlok: FC<ExampleBlokProps> = ({ blok }) => (
  <div>
    <p>{(blok.name && insertEmojis(blok.name)) || 'no text'}</p>
  </div>
)

export default ExampleBlok

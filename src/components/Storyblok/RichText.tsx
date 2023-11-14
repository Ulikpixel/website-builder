import { RichtextStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import React, { FC } from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

interface RichTextProps {
  content: RichtextStoryblok
  className?: string
}

const RichText: FC<RichTextProps> = ({ content, className = '' }) => <div className={className}>{render(content)}</div>

export default RichText

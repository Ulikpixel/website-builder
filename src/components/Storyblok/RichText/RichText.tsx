import React, { FC } from 'react'
import { render } from 'storyblok-rich-text-react-renderer'
import { nodeResolvers, markResolvers } from './Tags'

export interface RichtextStoryblok {
  type: string
  content?: RichtextStoryblok[]
  marks?: RichtextStoryblok[]
  attrs?: any
  text?: string
  [k: string]: any
}

interface RichTextProps {
  content: RichtextStoryblok
  className?: string
}

const RichText: FC<RichTextProps> = ({ content, className = '' }) => (
  <div className={className}>{render(content, { markResolvers, nodeResolvers })}</div>
)

export default RichText

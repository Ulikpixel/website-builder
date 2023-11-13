import { ISbStoryData, StoryblokComponent, useStoryblokState } from '@storyblok/react'
import React, { FC } from 'react'

interface StoryblokProviderProps {
  story: ISbStoryData
}

const StoryblokProvider: FC<StoryblokProviderProps> = ({ story }) => {
  const storyState = useStoryblokState(story)

  return <StoryblokComponent blok={storyState?.content} />
}

export default StoryblokProvider

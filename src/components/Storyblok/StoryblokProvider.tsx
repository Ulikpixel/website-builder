import { ISbStoryData, StoryblokComponent, useStoryblokState } from '@storyblok/react'
import React, { FC } from 'react'
// @ts-ignore
import { StoryblokBridgeLoader } from '@storyblok/react/rsc'

interface StoryblokProviderProps {
  story: ISbStoryData
}

const StoryblokProvider: FC<StoryblokProviderProps> = ({ story }) => {
  const storyState = useStoryblokState(story)

  return (
    <>
      <StoryblokBridgeLoader />
      <StoryblokComponent blok={storyState?.content} />
    </>
  )
}

export default StoryblokProvider

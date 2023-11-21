import Button, { parseButtonProps } from '@/components/Atoms/Organick/button/button'
import { HeroStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import React, { FC } from 'react'

interface HeroProps {
  blok: HeroStoryblok
}

const Hero: FC<HeroProps> = ({ blok: { content, ...blok } }) => (
  <section
    className='bg-cover bg-center flex flex-col justify-center min-h-hero sm:min-h-hero-sm xl:min-h-hero-xl'
    style={{ backgroundImage: `url(${blok.background.filename})` }}
  >
    <div className='container'>
      <div className='text-center xl:text-left xl:max-w-[540px]'>
        <p className='font-yellowtail text-organick-special-green text-3xl lg:text-4xl mb-2'>{blok.up_title}</p>
        <h1 className='mb-6'>{blok.title}</h1>
        {/* eslint-disable react/jsx-props-no-spreading */}
        <Button {...parseButtonProps(content[0])}>{content[0].text}</Button>
      </div>
    </div>
  </section>
)

export default Hero

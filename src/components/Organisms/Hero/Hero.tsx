import Button from '@/components/Atoms/Organick/button/button'
import { HeroStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import React, { FC } from 'react'

interface HeroProps {
  blok: HeroStoryblok
}

const Hero: FC<HeroProps> = ({ blok }) => {
  const button = blok.content[0]
  return (
    <section
      className='bg-cover bg-center flex flex-col justify-center min-h-hero sm:min-h-hero-sm xl:min-h-hero-xl'
      style={{ backgroundImage: `url(${blok.background.filename})` }}
    >
      <div className='container'>
        <div className='text-center xl:text-left xl:max-w-[540px]'>
          <p className='font-yellowtail text-organick-special-green text-[30px] lg:text-[36px] mb-2'>{blok.up_title}</p>
          <h1 className='mb-6'>{blok.title}</h1>
          <Button variant={button.variant} icon={button.icon} href={button.link.url || '/'} target={button.link.target}>
            {button.text}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

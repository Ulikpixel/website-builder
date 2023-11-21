import Button, { parseButtonProps } from '@/components/Atoms/Organick/button/button'
import { backgrounds } from '@/config/backgrounds'
import { VegetableSliderStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import { storyblokEditable } from '@storyblok/react'
import clsx from 'clsx'
import React, { FC } from 'react'
import { insertEmojis } from '@/utils/emoji-parser/emoji-parser'
import 'swiper/css'
import 'swiper/css/pagination'
import Slider from './components/Slider'

interface VegetableSliderProps {
  blok: VegetableSliderStoryblok
}

const VegetableSlider: FC<VegetableSliderProps> = ({ blok: { buttons, ...blok } }) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <section
    {...storyblokEditable(blok)}
    className={clsx('py-20 xl:py-36', blok.backgrounds ? backgrounds[blok.backgrounds] : 'bg-default-white')}
  >
    <div className='container'>
      <div className='flex flex-col text-center mb-9 sm:text-left sm:justify-between sm:flex-row sm:items-end md:mb-12'>
        <div className='mb-4 sm:mb-0'>
          <p className='text-organick-special-green font-yellowtail text-4xl mb-2'>{insertEmojis(blok.up_text)}</p>
          <h2 className='text-default-white'>{insertEmojis(blok.title)}</h2>
        </div>
        <div>
          <Button {...parseButtonProps(buttons[0])}>{buttons[0].text}</Button>
        </div>
      </div>
      <Slider blok={{ ...blok, buttons }} />
      <div id='containerForBullets' className='flex gap-2 py-2 justify-center mt-5' />
    </div>
  </section>
)

export default VegetableSlider

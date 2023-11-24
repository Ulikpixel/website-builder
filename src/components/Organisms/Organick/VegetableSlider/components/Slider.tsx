import { VegetableSliderStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import React, { FC, useRef } from 'react'
import Vegetable from '@/components/Molecules/Organick/Vegetable/Vegetable'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import uniqid from 'uniqid'
import ArrowImage from './ArrowImage'

interface SliderWithArrowsProps {
  blok: VegetableSliderStoryblok
}

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 2,
  },
  1280: {
    slidesPerView: 3,
  },
  1536: {
    slidesPerView: 4,
  },
}

const Slider: FC<SliderWithArrowsProps> = ({ blok }) => {
  const swiperRef = useRef<any>()

  const slidePrev = () => swiperRef.current?.slidePrev()
  const slideNext = () => swiperRef.current?.slideNext()
  return (
    <div className='relative m-auto max-w-slider-vegetable sm:max-w-slider-vegetable-sm md:max-w-slider-vegetable-md xl:max-w-slider-vegetable-xl 2xl:w-full 2xl:max-w-none'>
      <ArrowImage className='left-[-45px]' onClick={slidePrev} />
      <Swiper
        spaceBetween={20}
        wrapperTag='ul'
        className='relative'
        modules={[Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        pagination={{
          el: '#containerForBullets',
          clickable: true,
        }}
        breakpoints={breakpoints}
      >
        {blok.content.map((nestedBlok, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={`${idx}-${uniqid()}`} tag='li'>
            <Vegetable blok={nestedBlok} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowImage className='right-[-45px] rotate-180' onClick={slideNext} />
    </div>
  )
}

export default Slider

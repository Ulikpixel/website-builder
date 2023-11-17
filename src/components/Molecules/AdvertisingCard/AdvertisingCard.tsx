import { AdvertisingCardStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import React, { FC } from 'react'

interface AdvertisingCardProps {
  blok: AdvertisingCardStoryblok
}

const AdvertisingCard: FC<AdvertisingCardProps> = ({ blok }) => (
  <div
    className={`
        bg-cover bg-center rounded-[30px] h-[250px] overflow-hidden flex 
        flex-col justify-center px-12 items-center text-center lg:items-start lg:text-left lg:h-[367px]
      `}
    style={{ backgroundImage: `url(${blok.background.filename})` }}
  >
    <div className='lg:max-w-[280px]'>
      <p className='font-yellowtail text-organick-special-green mb-4 text-[30px] lg:text-[36px] lg:mb-1'>
        {blok.up_title}
      </p>
      <h3>{blok.title}</h3>
    </div>
  </div>
)

export default AdvertisingCard

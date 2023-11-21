import { VegetableStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import React, { FC } from 'react'
import Image from 'next/image'
import starYellow from './icons/star-yellow.svg'
import starDark from './icons/star-dark.svg'

interface VegetableProps {
  blok: VegetableStoryblok
}

const Vegetable: FC<VegetableProps> = ({ blok }) => (
  <div className='h-vegetable-card-small sm:h-vegetable-card-big sm:w-vegetable-card-big bg-default-white rounded-2xl px-4 pt-4 md:px-7 md:pt-7'>
    <div className='bg-organick-blue-dark inline-block py-1.5 px-3 rounded-xl mb-5'>
      <p className='text-default-white text-sm'>{blok.type}</p>
    </div>
    <div className='w-full h-[260px] overflow-hidden mb-5'>
      <img src={blok.cover.filename} alt={`Product: ${blok.cover.name}`} />
    </div>
    <div>
      <p className='text-organick-blue-dark text-xl font-semibold mb-3'>{blok.name}</p>
      <div className='w-full h-px bg-organick-line-grey mb-1.5' />
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <p
            className={
              blok.discount
                ? 'text-organick-price-grey text-sm line-through'
                : 'text-organick-blue-dark text-lg font-bold'
            }
          >
            {blok.price}
          </p>
          {blok.discount && (
            <p className='text-organick-blue-dark text-lg font-bold'>${Number(blok.price) - Number(blok.discount)}</p>
          )}
        </div>
        <div className='flex gap-1'>
          {Array(5)
            .fill(Math.random())
            .map((key, idx) => (
              <Image src={idx + 1 <= Number(blok.grade) ? starYellow : starDark} alt={`star-${idx + 1}`} key={key} />
            ))}
        </div>
      </div>
    </div>
  </div>
)

export default Vegetable

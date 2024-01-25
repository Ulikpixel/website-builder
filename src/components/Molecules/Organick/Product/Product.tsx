import { ProductStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import clsx from 'clsx'
import React, { FC } from 'react'

interface ProductProps {
  blok: ProductStoryblok
  idx: number
}

const Product: FC<ProductProps> = ({ blok, idx }) => (
  <div
    className={clsx(
      ' flex items-center justify-center w-full mx-auto max-w-product h-product-small sm:h-product-big lg:m-auto lg:w-full',
      idx % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0',
    )}
    style={{ backgroundImage: `url(${blok.cover.filename})` }}
  >
    <div className='bg-default-white py-5 px-10 rounded-2xl'>
      <p className='text-2xl text-organick-blue-dark font-medium'>{blok.title}</p>
    </div>
  </div>
)

export default Product

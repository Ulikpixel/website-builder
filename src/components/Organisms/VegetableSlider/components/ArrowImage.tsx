import Image from 'next/image'
import React, { FC } from 'react'
import arrowIcon from '../icons/arrow.svg'

interface ArrowImageProps {
  className?: string
  onClick: () => void
}

const arrowClass = 'w-10 absolute top-1/2 transform -translate-y-1/2 z-[999] cursor-pointer hidden md:block'

const ArrowImage: FC<ArrowImageProps> = ({ className, onClick }) => (
  <div className={`${arrowClass} ${className}`}>
    <Image
      src={arrowIcon}
      alt='arrow'
      className='rotate-180'
      onClick={onClick}
      onKeyDown={onClick}
      role='presentation'
    />
  </div>
)

export default ArrowImage

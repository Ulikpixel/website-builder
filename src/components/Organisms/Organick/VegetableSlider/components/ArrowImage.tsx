import React, { FC } from 'react'
import ArrowIcon from '../icons/Arrow'

interface ArrowImageProps {
  className?: string
  onClick: () => void
}

const arrowClass: string = 'w-10 absolute top-1/2 transform -translate-y-1/2 z-[999] cursor-pointer hidden md:block'
const arrowColor: string = '#00BCD4'

const ArrowImage: FC<ArrowImageProps> = ({ className, onClick }) => (
  <div className={`${arrowClass} ${className}`}>
    <ArrowIcon className='rotate-180' onClick={onClick} onKeyDown={onClick} role='presentation' pathFill={arrowColor} />
  </div>
)

export default ArrowImage

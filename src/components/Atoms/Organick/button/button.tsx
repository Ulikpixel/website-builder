import React, { ReactNode, FC } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import arrowIcon from './icons/arrow.svg'

export type VariantsType = 'blue-dark' | 'white' | 'yellow'

export interface ButtonProps {
  children: ReactNode
  variant?: VariantsType
  icon?: boolean
}

export const variants = {
  'blue-dark': `
    bg-organick-blue-dark text-default-white border-organick-blue-dark border
    hover:bg-default-white hover:text-organick-blue-dark
  `,
  white: `
    bg-organick-white border-organick-blue-dark border text-organick-blue-dark
    hover:bg-organick-blue-dark hover:text-default-white
  `,
  yellow: `
    bg-organick-yellow text-organick-blue-dark border-organick-yellow border
    hover:bg-default-white
  `,
}

const Button: FC<ButtonProps> = ({ children, variant = 'blue-dark', icon }) => (
  <button
    type='button'
    className={clsx(
      `
        px-10 pt-2.5 pb-3 rounded-xl font-roboto font-bold 
        text-xl transition-colors flex gap-2 items-center
      `,
      variants[variant],
    )}
  >
    {children}
    {icon && <Image src={arrowIcon} alt='arrow icon' className='w-4 h-4 relative top-[0.3px]' />}
  </button>
)

export default Button

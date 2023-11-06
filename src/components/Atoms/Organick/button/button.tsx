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
        rounded-xl font-roboto font-bold transition-colors flex gap-2 items-center
        px-6 py-1 text-xl sm:pt-1 sm:pb-1.5 lg:px-10 lg:pt-2.5 lg:pb-3
      `,
      variants[variant],
    )}
  >
    {children}
    {icon && <Image src={arrowIcon} alt='arrow icon' className='w-4 h-4 relative top-[0.3px]' />}
  </button>
)

export default Button

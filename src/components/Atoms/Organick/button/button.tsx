import React, { ReactNode, FC } from 'react'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import Image from 'next/image'
import { ButtonStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import { insertEmojis } from '@/utils/emoji-parser/emoji-parser'
import arrowIcon from './icons/arrow.svg'

export type VariantsType = 'blue-dark' | 'white' | 'yellow'

export interface ButtonProps extends LinkProps {
  children: ReactNode
  variant?: VariantsType
  icon?: boolean
  target?: string
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

export const parseButtonProps = (data: ButtonStoryblok) => ({
  variant: data.variant,
  icon: data.icon,
  href: data.link.url || '/',
  target: data.link.target,
})

const Button: FC<ButtonProps> = ({ children, variant = 'blue-dark', icon, ...props }) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <Link
    {...props}
    passHref
    className={clsx(
      `
        rounded-xl font-roboto font-bold transition-colors gap-2 items-center
        px-6 py-1 text-xl sm:pt-1 sm:pb-1.5 lg:px-10 lg:pt-2.5 lg:pb-3 inline-flex
      `,
      variants[variant],
    )}
  >
    {insertEmojis(children as ReactNode[])}
    {icon && <Image src={arrowIcon} alt='arrow icon' className='w-4 h-4 relative top-[0.3px]' />}
  </Link>
)

export default Button

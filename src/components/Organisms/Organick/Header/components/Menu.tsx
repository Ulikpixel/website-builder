import { SlugContext } from '@/config/slugContext'
import { InfoSlug } from '@/types/storyblok-types'
import clsx from 'clsx'
import Link from 'next/link'
import React, { FC, useContext } from 'react'

interface MenuProps {
  isMenu: boolean
  setIsMenu: (status: boolean) => void
  links: InfoSlug[]
}

const Menu: FC<MenuProps> = ({ isMenu, setIsMenu, links }) => {
  const slugInfo = useContext(SlugContext)
  const currentSlug: string | null = slugInfo?.slug || null
  return (
    <nav
      className={clsx(
        `
        fixed top-0 w-80 bg-default-white border-l-2 pt-20
        border-organick-blue-dark h-full z-50 duration-500
      `,
        isMenu ? 'right-0' : 'right-[-400px]',
      )}
    >
      <ul className='text-center' onClick={() => setIsMenu(false)} role='presentation'>
        {links.map(({ name, id, real_path, slug }, idx) => (
          <li
            key={id}
            className={clsx(
              'border-1.5 border-b py-2 cursor-pointer duration-300 hover:bg-grey-menu',
              idx === 0 && 'border-t',
              slug === currentSlug && 'bg-grey-menu',
            )}
          >
            <Link className='text-organick-blue-dark text-lg font-semibold' href={real_path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu

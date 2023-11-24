import { SlugContext } from '@/config/slugContext'
import { InfoSlug } from '@/types/storyblok-types'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useContext } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import languageIcon from '../icons/language.svg'

interface MenuProps {
  isMenu: boolean
  setIsMenu: (status: boolean) => void
  links: InfoSlug[]
}

const Menu: FC<MenuProps> = ({ isMenu, setIsMenu, links }) => {
  const slugInfo = useContext(SlugContext)
  const pathname = usePathname()
  const router = useRouter()

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
            <Link className='text-organick-blue-dark text-base font-semibold' href={real_path}>
              {name}
            </Link>
          </li>
        ))}
        <li className='border-1.5 border-b py-2 cursor-pointer duration-300 hover:bg-grey-menu flex items-center justify-center gap-2'>
          <Link
            className='text-organick-blue-dark text-base font-semibold flex items-center gap-2'
            href={pathname}
            locale={router.locale === 'en' ? 'ru' : 'en'}
          >
            <Image src={languageIcon} alt='language' className='w-8 h-8 m-auto' />
            <p className='text-organick-blue-dark text-base font-semibold'>
              {router.locale === 'en' ? 'Russian language' : 'Анлийский язык'}
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu

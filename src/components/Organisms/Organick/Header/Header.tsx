import React, { FC, useContext, useState } from 'react'
import Image from 'next/image'
import Burger from '@/components/Atoms/Burger/Burger'
import Popup from '@/components/Atoms/Popup/Popup'
import { SlugContext } from '@/config/slugContext'
import Menu from './components/Menu'
import logoIcon from './icons/logo.svg'

const Header: FC = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false)
  const slugInfo = useContext(SlugContext)

  const links = slugInfo?.links || []
  return (
    <header>
      <div className='container flex justify-between items-center py-5'>
        <div className='flex items-center gap-2'>
          <Image src={logoIcon} alt='logo' className='w-9 h-logo' />
          <p className='text-organick-blue-dark font-bold text-2xl sm:text-4xl'>Organick</p>
        </div>
        {links.length > 0 && (
          <>
            <Burger isActive={isMenu} onClick={() => setIsMenu(!isMenu)} />
            {isMenu && <Popup onClick={() => setIsMenu(false)} />}
            <Menu isMenu={isMenu} setIsMenu={setIsMenu} links={links} />
          </>
        )}
      </div>
    </header>
  )
}

export default Header

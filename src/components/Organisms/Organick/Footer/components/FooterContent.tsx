import React from 'react'
import Image from 'next/image'
import logoIcon from '@/static/icons/logo.svg'
import instagramIcon from '../icons/instagram.svg'
import facebookIcon from '../icons/facebook.svg'
import twitterIcon from '../icons/twitter.svg'
import pinterestIcon from '../icons/pinterest.svg'

const socialIcons = [
  { url: instagramIcon, alt: 'instagram' },
  { url: facebookIcon, alt: 'facebook' },
  { url: twitterIcon, alt: 'twitter' },
  { url: pinterestIcon, alt: 'pinterest' },
]

const contacts = [
  { title: 'Email', description: 'needhelp@Organia.com' },
  { title: 'Phone', description: '666 888 888' },
  { title: 'Address', description: '88 road, borklyn street, USA' },
]

const pages: string[] = ['Style Guide', '404 Not Found', 'Password Protected', 'Licences', 'Changelog']

const FooterContent = () => (
  <div className='container py-14 flex flex-col items-center justify-center gap-10 xl:gap-0 xl:flex-row '>
    <div className='text-center xl:text-right'>
      <h5 className='mb-4 md:mb-8'>Contact Us</h5>
      <ul className='flex flex-col gap-5'>
        {contacts.map(({ title, description }) => (
          <li key={title}>
            <p className='font-bold'>{title}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className='mx-10 border-organick-grey max-w-[623px] text-center border-t border-b py-10 xl:py-0 xl:px-10 xl:border-t-0 xl:border-b-0 xl:border-l xl:border-r'>
      <div className='mb-6 flex gap-x-2 items-center justify-center'>
        <Image className='w-9' src={logoIcon} alt='logo' />
        <p className='font-bold text-organick-blue-dark text-4xl'>Organick</p>
      </div>
      <p className='mb-9'>
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing{' '}
      </p>
      <ul className='flex gap-x-3.5 justify-center'>
        {socialIcons.map(({ url, alt }) => (
          <li className='bg-organick-green-white p-2 sm:p-5 rounded-full' key={alt}>
            <Image src={url} alt={alt} />
          </li>
        ))}
      </ul>
    </div>
    <div className='text-center xl:text-left'>
      <h5 className='mb-4 md:mb-8'>Utility Pages</h5>
      <ul className='flex flex-col gap-5'>
        {pages.map((page) => (
          <li key={page}>
            <p>{page}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default FooterContent

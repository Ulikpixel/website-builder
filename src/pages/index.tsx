import React, { useEffect, useRef } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Preloader from '@/components/Atoms/Preloader/Preloader'

const Home: NextPage = () => {
  const langButton = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    setTimeout(() => langButton.current?.click())
  }, [])

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Preloader />
      <Link href='/home' className='opacity-0' locale='en' ref={langButton}>
        home
      </Link>
    </div>
  )
}

export default Home

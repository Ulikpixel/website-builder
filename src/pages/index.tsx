import React, { useEffect, useRef } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  const langButton = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    setTimeout(() => langButton.current?.click())
  }, [])

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h3>перенаправляем на страницу ...</h3>
      <Link href='/home' className='opacity-0' locale='en' ref={langButton}>
        home
      </Link>
    </div>
  )
}

export default Home

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { AppProps } from 'next/app'
import '@/styles/tailwind.css'
import { API_TOKEN_STORYBLOK } from '@/config'
// @ts-ignore
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import Organick from '@/components/Templates/Organick/Organick'
import Hero from '@/components/Organisms/Hero/Hero'
import Container from '@/components/Molecules/Container/Container'
import AdvertisingCard from '@/components/Molecules/AdvertisingCard/AdvertisingCard'

const components = {
  organick: Organick,
  hero: Hero,
  container: Container,
  'advertising-card': AdvertisingCard,
}

storyblokInit({
  accessToken: API_TOKEN_STORYBLOK,
  use: [apiPlugin],
  components,
  bridge: true,
})

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { AppProps } from 'next/app'
import { apiPlugin, storyblokInit } from '@storyblok/react'
import '@/styles/tailwind.css'
import { PREVIEW_TOKEN_STORYBLOK } from '@/config'
import Example from '@/components/Templates/Example'
import ExampleBlok from '@/components/Molecules/ExampleBlok'

const components = {
  example: Example,
  'example-block': ExampleBlok,
}

storyblokInit({
  accessToken: PREVIEW_TOKEN_STORYBLOK,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: 'en',
  },
})

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App

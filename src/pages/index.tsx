import React from 'react'
import { NextPage } from 'next'
import Button from '@/components/Atoms/Organick/button/button'

const Home: NextPage = () => (
  <div className='flex flex-col gap-4'>
    <div>
      <Button icon variant='yellow'>
        Default Button
      </Button>
    </div>
    <div className='flex gap-4'>
      <div className='w-6 h-6 bg-organick-blue-dark' />
      <div className='w-6 h-6 bg-organick-green' />
      <div className='w-6 h-6 bg-organick-yellow' />
      <div className='w-6 h-6 bg-organick-grey' />
      <div className='w-6 h-6 bg-organick-white' />
      <div className='w-6 h-6 bg-organick-green-white' />
      <div className='w-6 h-6 bg-organick-dark' />
    </div>
    <div>
      <p>full text</p>
      <p className='font-roboto'>full text</p>
      <p className='font-open-sans'>full text</p>
    </div>
    <div>
      <h1>Heading H1 Text</h1>
      <h2>Heading H2 Text</h2>
      <h3>Heading H3 Text</h3>
      <h4>Heading H4 Text</h4>
      <h5>Heading H5 Text</h5>
      <h6>Heading H6 Text</h6>
    </div>
    <div className='w-[400px]'>
      <p>
        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry s standard
        dummy text ever since the 1500s, when an unknown printer took a galley.established fact that a reader will be
        distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
        it has a more-or-less normal distribution of letters, as opposed.
      </p>
    </div>
    <div>
      <ol>
        <li>Publishing packages and web pageLorem Ipsum as their default</li>
        <li>Content here, content here , making it look like readable</li>
        <li>Packages and web pageLorem Ipsum as their default</li>
      </ol>
    </div>
  </div>
)

export default Home

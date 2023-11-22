import React from 'react'
import FooterContent from './components/FooterContent'

const Footer = () => (
  <footer>
    <FooterContent />
    <div className='border-t border-organick-grey text-center py-4'>
      <p>
        Copyright © <strong className='font-bold'>Organick</strong>
      </p>
    </div>
  </footer>
)

export default Footer

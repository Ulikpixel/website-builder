import React, { FC } from 'react'

interface PopupProps {
  onClick: () => void
}

const Popup: FC<PopupProps> = ({ onClick }) => (
  <div
    className='fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-30 cursor-pointer'
    onClick={onClick}
    role='presentation'
  />
)

export default Popup

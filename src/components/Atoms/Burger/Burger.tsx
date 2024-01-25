import clsx from 'clsx'
import React, { FC } from 'react'

interface BurgerProps {
  isActive: boolean
  onClick: () => void
}

const Burger: FC<BurgerProps> = ({ isActive, onClick }) => (
  <div
    onClick={onClick}
    role='presentation'
    className='w-9 h-9 cursor-pointer z-full relative flex flex-col justify-between py-1.5'
  >
    {[1, 2, 3].map((key, idx) => (
      <span
        // eslint-disable-next-line react/no-array-index-key
        key={`${key}-${idx}`}
        className={clsx('w-full h-[2.5px] bg-organick-blue-dark block transition-all', {
          'opacity-0': isActive && idx === 1,
          'rotate-45 absolute top-4': isActive && idx === 0,
          'rotate-[-45deg] absolute top-4': isActive && idx === 2,
        })}
      />
    ))}
  </div>
)

export default Burger

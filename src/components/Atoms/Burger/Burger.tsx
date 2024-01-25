import clsx from 'clsx'
import React, { FC } from 'react'

interface BurgerProps {
  isActive: boolean
  onClick: () => void
  className?: string
}

const Burger: FC<BurgerProps> = ({ isActive, onClick, className = '' }) => (
  <div
    onClick={onClick}
    role='presentation'
    className={`w-9 h-9 cursor-pointer z-full relative flex flex-col justify-between py-1.5 ${className}`}
  >
    {[1, 2, 3].map((key, idx) => (
      <span
        key={key}
        className={clsx(
          'w-full h-[2.5px] bg-organick-blue-dark block transition-all',
          isActive && {
            'opacity-0': idx === 1,
            'rotate-45 absolute top-4': idx === 0,
            'rotate-[-45deg] absolute top-4': idx === 2,
          },
        )}
      />
    ))}
  </div>
)

export default Burger

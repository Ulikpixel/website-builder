import React, { FC, SVGProps } from 'react'

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  svgFill?: SVGProps<SVGSVGElement>['fill'] | string
  pathFill?: SVGProps<SVGPathElement>['fill'] | string
}
/* eslint-disable react/jsx-props-no-spreading */
const ArrowIcon: FC<ArrowIconProps> = ({ svgFill = 'none', pathFill = 'black', ...props }) => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    x='0px'
    y='0px'
    viewBox='0 0 256 256'
    enableBackground='new 0 0 256 256'
    xmlSpace='preserve'
    fill={svgFill}
    {...props}
  >
    <g>
      <g>
        <path fill={pathFill} d='M192.5,128L77.8,10L63.5,24.8L163.8,128L63.5,231.2L77.8,246L192.5,128z' />
      </g>
    </g>
  </svg>
)

export default ArrowIcon

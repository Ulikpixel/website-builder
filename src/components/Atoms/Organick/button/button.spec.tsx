import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button, { variants, VariantsType } from './button'

const validVariant = (variant: VariantsType | undefined = 'blue-dark'): void => {
  it(`renders with default "${variant}" variant and children`, () => {
    const { getByText } = render(<Button variant={variant}>Click me</Button>)
    const button = getByText('Click me')
    const imageElement = screen.queryByRole('img')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(variants[variant])
    expect(imageElement).toBeNull()
    expect(button).toMatchSnapshot()
  })
}

describe('Button component', () => {
  validVariant()
  validVariant('white')
  validVariant('yellow')

  it('renders with icon when icon prop is true', () => {
    const { getByText } = render(<Button icon>Click me</Button>)
    const imageElement = screen.getByRole('img')
    const button = getByText('Click me')

    expect(imageElement).toBeInTheDocument()
    expect(button).toMatchSnapshot()
  })
})

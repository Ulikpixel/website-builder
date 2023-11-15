import React from 'react'
import { render } from '@testing-library/react'
import { insertEmojis, InsertEmojisValue } from './emoji-parser'

describe('insertEmojis', () => {
  it('should replace emojis in a string with corresponding React components', () => {
    const input: InsertEmojisValue = 'Hello !smile, how are you !hello?'
    const { container } = render(<>{insertEmojis(input)}</>)

    expect(container).toMatchSnapshot()
  })

  it('should handle an array of ReactNodes as input', () => {
    const input: InsertEmojisValue = ['Hello ', '!smile, how are you ', '!hello?']
    const { container } = render(<>{insertEmojis(input)}</>)

    expect(container).toMatchSnapshot()
  })

  it('should handle an empty string as input', () => {
    const input: InsertEmojisValue = ''
    const { container } = render(<>{insertEmojis(input)}</>)

    expect(container).toMatchSnapshot()
  })
})

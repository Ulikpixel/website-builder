import React, { ReactNode, ReactElement } from 'react'
import { InsertEmojisValue, insertEmojis } from '@/utils/emoji-parser/emoji-parser'
import {
  MARK_BOLD,
  MARK_STRIKE,
  MARK_UNDERLINE,
  NODE_HEADING,
  NODE_PARAGRAPH,
} from 'storyblok-rich-text-react-renderer'

// варианта заголовка
interface LevelHeading {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

interface MarkResolvers {
  [MARK_BOLD]: (children: ReactNode) => ReactElement
  [MARK_STRIKE]: (children: ReactNode) => ReactElement
  [MARK_UNDERLINE]: (children: ReactNode) => ReactElement
}

interface NodeResolvers {
  [NODE_PARAGRAPH]: (children: ReactNode) => ReactElement
  [NODE_HEADING]: (children: ReactNode, { level }: LevelHeading) => ReactElement
}

// Группируйте разрешители в объекты, что делает код более упорядоченным
export const nodeResolvers: NodeResolvers = {
  [NODE_PARAGRAPH]: (children) => <p>{insertEmojis(children as InsertEmojisValue)}</p>,
  [NODE_HEADING]: (children, { level }) => {
    const HeadingComponent = `h${level}` as keyof JSX.IntrinsicElements
    return <HeadingComponent>{insertEmojis(children as InsertEmojisValue)}</HeadingComponent>
  },
}

export const markResolvers: MarkResolvers = {
  [MARK_BOLD]: (children) => <strong>{insertEmojis(children as InsertEmojisValue)}</strong>,
  [MARK_STRIKE]: (children) => <s>{insertEmojis(children as InsertEmojisValue)}</s>,
  [MARK_UNDERLINE]: (children) => <u>{insertEmojis(children as InsertEmojisValue)}</u>,
}

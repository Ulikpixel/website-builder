import React, { ReactNode } from 'react'
import Image from 'next/image'
import reactStringReplace from 'react-string-replace'

// Импорт SVG иконок из файлов
import HelloIcon from './icons/hello.svg'
import SmileIcon from './icons/smile.svg'

// Определение типа для карты эмодзи
type EmojiMap = { [key: string]: React.ReactNode }

export type InsertEmojisValue = string | ReactNode[]

// Статический объект с эмодзи в виде компонентов Image
const staticEmojiMap: EmojiMap = {
  hello: <Image src={HelloIcon} alt='Hello Icon' className='w-emoji h-emoji' />,
  smile: <Image src={SmileIcon} alt='Smile Icon' className='w-emoji h-emoji' />,
  // Добавьте другие эмодзи по необходимости
}

// Регулярное выражение для поиска смайликов вида !smile
const emojiCode = /(![a-zA-Z]+)/

/**
 * Функция заменяет ключевые слова в строке на соответствующие эмодзи из карты.
 * @param value - Входная строка с ключевыми словами, подлежащими замене на эмодзи.
 * @returns Строка с вставленными эмодзи.
 */
export function insertEmojis(value: InsertEmojisValue): React.ReactNode {
  return reactStringReplace(value, emojiCode, (match, i) => {
    // Получение ключевого слова из совпадения (например, !smile -> smile)
    const keyword = match.substring(1)

    // Возвращение React-элемента с смайликом и уникальным ключом
    return (
      <span key={`${i}-${Math.random()}`} className='inline-block relative top-px'>
        {staticEmojiMap[keyword]}
      </span>
    )
  })
}

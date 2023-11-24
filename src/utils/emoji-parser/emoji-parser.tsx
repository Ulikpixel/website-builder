import React, { ReactNode } from 'react'
import Image from 'next/image'
import reactStringReplace from 'react-string-replace'
import uniqid from 'uniqid'

// Импорт SVG иконок из файлов
import LoveIcon from './icons/love.svg'
import CheekyIcon from './icons/cheeky.svg'
import HeartIcon from './icons/heart.svg'

// Определение типа для карты эмодзи
type EmojiMap = { [key: string]: React.ReactNode }

export type InsertEmojisValue = string | ReactNode[]

// Статический объект с эмодзи в виде компонентов Image (https://www.reshot.com/free-svg-icons/emoji/)
const staticEmojiMap: EmojiMap = {
  heart: <Image src={HeartIcon} alt='heart Icon' className='w-emoji h-emoji' />,
  cheeky: <Image src={CheekyIcon} alt='cheeky Icon' className='w-emoji h-emoji' />,
  love: <Image src={LoveIcon} alt='love Icon' className='w-emoji h-emoji' />,
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
      <span key={`${i}-${uniqid()}`} className='inline-block relative top-1'>
        {staticEmojiMap[keyword]}
      </span>
    )
  })
}

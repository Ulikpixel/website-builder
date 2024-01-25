export const Language = {
  ru: 'ru',
  en: 'default'
} as const

export type LanguageType = typeof Language[keyof typeof Language]
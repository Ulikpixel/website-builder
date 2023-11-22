import { LanguageType } from '@/types/language-types'
import { InfoSlugListResponse } from '@/types/storyblok-types'
import { VersionType } from '@/types/verstion-types'

export interface Params {
  version?: VersionType;
  language?: LanguageType;
  datasource?: string;
  per_page?: string;
  token?: string;
  by_uuids?: string | null;
  cv?: number;
}

interface ApiGetArguments {
  url: string;
  params?: Params;
}

const baseUrl = 'https://api.storyblok.com/v2/cdn/'
const headers = { 'Content-Type': 'application/json' }

interface IUrlParams extends URLSearchParams {
  token: string;
}

export const apiGet = async <T>(options: ApiGetArguments): Promise<T> => {
  const { params, url } = options
  const newParams = new URLSearchParams(params as IUrlParams)

  try {
    const response = await fetch(`${baseUrl}${url}?${newParams}`, { headers })
    const data: T = await response.json()
    return data
  } catch (err) {
    throw Error(err as string)
  }
}

export const getLinksStoryblok = async () => apiGet<InfoSlugListResponse>({
  url: 'links/',
  params: { token: process.env.PREVIEW_SECRET_TOKEN },
})
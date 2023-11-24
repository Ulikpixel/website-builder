import { NextApiRequest, NextApiResponse } from 'next'

export default async function exit(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData()

  const cookies = res.getHeader('Set-Cookie') as string[]
  res.setHeader(
    'Set-Cookie',
    cookies.map((cookie) =>
      cookie.replace('SameSite=Lax', 'SameSite=None;Secure')
    )
  )

  const { slug } = req.query

  const updatedSlug = slug === 'home' ? '' : slug

  res.redirect(`/${updatedSlug}`)
}
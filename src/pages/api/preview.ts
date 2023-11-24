import { NextApiRequest, NextApiResponse } from 'next'

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { secret, slug } = req.query
  const params = req.url?.split('?')

  if (secret !== process.env.PREVIEW_SECRET_TOKEN || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({})

  const cookies = res.getHeader('Set-Cookie') as string[]
  res.setHeader(
    'Set-Cookie',
    cookies.map((cookie) =>
      cookie.replace('SameSite=Lax', 'SameSite=None;Secure')
    )
  )

  const updatedSlug = slug === 'home' ? '' : slug
  return res.redirect(`/${updatedSlug}?${params ? params[1] : ''}`)
}
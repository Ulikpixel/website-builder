import { NextApiRequest, NextApiResponse } from 'next'

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { secret, slug } = req.query

  if (secret !== process.env.PREVIEW_SECRET_TOKEN || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const cookies = res.getHeader('Set-Cookie') as string[]
  res.setHeader(
    'Set-Cookie',
    cookies.map((cookie) =>
      cookie.replace('SameSite=Lax', 'SameSite=None')
    )
  )

  res.setPreviewData({})

  const updatedSlug = slug === 'home' ? '' : slug

  res.redirect(`/${updatedSlug}`)
  return res.end()
}


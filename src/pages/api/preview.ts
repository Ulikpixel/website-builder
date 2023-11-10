import { NextApiRequest, NextApiResponse } from 'next'

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { secret, slug } = req.query

  if (secret !== process.env.PREVIEW_SECRET_TOKEN || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({})
  const updatedSlug = slug === 'home' ? '' : slug

  res.redirect(`/${updatedSlug}`)
  return res.end()
}
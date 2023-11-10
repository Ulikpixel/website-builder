import { NextApiRequest, NextApiResponse } from 'next'

export default async function exit(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData()

  const { slug } = req.query

  const updatedSlug = slug === 'home' ? '' : slug

  res.redirect(`/${updatedSlug}`)
}
import { NextApiRequest, NextApiResponse } from "next";
import {reversify} from '../../../lib/reversify-api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  if (req.method !== 'POST') return res.status(405)

  const result = await reversify(req.body)

  res.status(201).send(result)
}

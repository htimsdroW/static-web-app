import { NextApiRequest, NextApiResponse } from "next";
import { getHistory } from '../../../../../lib/reversify-api'

type Entry = {
  inputString: string,
  outputString: string,
  timestamp: Date
}

type History = Entry[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<History>
) {
  if (req.method !== 'GET') return res.status(405)

  const { key, take } = req.query

  const result = await getHistory(String(key), String(take))

  return result
}

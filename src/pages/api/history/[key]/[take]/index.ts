import { NextApiRequest, NextApiResponse } from "next";
import { getHistory } from '../../../../../lib/reversify-api'
import type { History } from "../../../../../types/history";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<History>
) {
  if (req.method !== 'GET') return res.status(405)

  const { key, take } = req.query

  const result = await getHistory(String(key), String(take))

  res.status(200).send(result)
}

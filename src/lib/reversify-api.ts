import type { History } from '../types/history'
const host = process.env.REVERSIFY_FUNCTION_HOST
const key = process.env.REVERSIFY_FUNCTION_KEY

if (!host || !key) throw Error('Reversify func host and/or key missing.')

const headers: HeadersInit = {
  ['x-functions-key']: key
}

export const reversify = async (inputString: string) => {
  const options = {
    method: 'POST',
    body: inputString,
    headers
  }
  const response = await fetch(`${host}api/reversify`, options)

  if (!response.ok) throw Error('Reversify failed.')

  return await response.text()
}

export const getHistory = async (key: string, take: string): Promise<History> => {
  const options = {
    method: 'GET',
    headers
  }

  const response = await fetch(`${host}api/history/${key}/${take}`, options)

  if (!response.ok) throw Error('History failed.')

  return await response.json()
}

import useSwr from 'swr'
import { useEffect, useState } from 'react'
import { History } from '../types/history'

const fetcher = (path: string): Promise<History> => fetch(path).then(res => res.json())

function HistoryList({output}: Props) {
  const key = new Date().getUTCFullYear()
  const { data, error } = useSwr(`/api/history/${key}/5`, fetcher)

  if (error) return <div>Failed to load history.</div>
  if (!data) return <div>Loading...</div>

  const history = data.map((entity, index) => {
    const timestamp = String(new Date(+entity.timestamp))
    return (
      <div key={index}>
        <table>
          <tbody>
            <tr><td>input:</td><td>{entity.inputString}</td></tr>
            <tr><td>output:</td><td>{entity.outputString}</td></tr>
            <tr><td>submitted at:</td><td>{timestamp}</td></tr>
          </tbody>
        </table>
      </div>
    )
  })

  return (
    <div>
      <h4>History</h4>
      {history}
    </div>
  )
}

type Props = {
  output: string
}


export default HistoryList
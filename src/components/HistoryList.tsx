import useSwr from 'swr'
import { useEffect } from 'react'
import { History } from '../types/history'

const fetcher = (path: string): Promise<History> => fetch(path).then(res => res.json())

function HistoryList({output}: Props) {
  const key = new Date().getUTCFullYear()
  const { data, error, mutate, isValidating } = useSwr(`/api/history/${key}/5`, fetcher)

  useEffect(() => {
    mutate()
  }, [mutate, output])

  if (error) return <div>Failed to load history.</div>
  if (!data) return <div>Loading...</div>

  const history = data.map((entity, index) => {
    const date = new Date(Number(entity.createdAt))
    const submittedAt = `${date.toUTCString()}`
    return (
      <div key={index}>
        <table>
          <tbody>
            <tr><td>input:</td><td>{entity.inputString}</td></tr>
            <tr><td>output:</td><td>{entity.outputString}</td></tr>
            <tr><td>submitted at:</td><td>{submittedAt}</td></tr>
          </tbody>
        </table>
      </div>
    )
  })

  return (
    <div>
      <h4>History {isValidating && "...updating"}</h4>
      {history}
    </div>
  )
}

type Props = {
  output: string
}


export default HistoryList
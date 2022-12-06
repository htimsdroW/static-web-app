import { Dispatch, SetStateAction, useState } from 'react'

function ReversifyForm({setInput, setOutput}: Props) {

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const body = event.target.inputString.value
    setInput(body)
    setOutput("")
    event.target.inputString.value = ""

    const result = await fetch('/api/reversify', {body, method: 'POST'}).then(res => res.text()).catch(err => err)
    
    setOutput(result)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>String to Reversify: </label>
      <input type="text" id="inputString" name="inputString"></input>
      <button type="submit">Reverse!</button>
    </form>
  )
}

type Props = {
  setInput: Dispatch<SetStateAction<string>>
  setOutput: Dispatch<SetStateAction<string>>
}

export default ReversifyForm
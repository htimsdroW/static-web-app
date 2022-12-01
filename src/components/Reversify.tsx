import { useEffect, useState } from "react"
import HistoryList from "./HistoryList"
import ReversifyForm from "./ReversifyForm"



function Reversify() {
  const [output, setOutput] = useState("")
  const [input, setInput] = useState("")

  useEffect(() => {}, [output])

  return (
    <div>
      <ReversifyForm setInput={setInput} setOutput={setOutput}></ReversifyForm>
      <p>Input String: {input}</p>
      <p>Reversed String: {output}</p>
      <HistoryList output={output}/>
    </div>
  )
}

export default Reversify
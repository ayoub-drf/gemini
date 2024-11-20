import { createContext, useState } from "react"
import runGemini from "../config/gemini"

export const Context = createContext()

const ContextProp = (props) => {
    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompt] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [previousPrompt, setPreviousPrompt] = useState([])
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const onSent = async (prompt) => {
        setLoading(true)
        setResultData()
        setShowResult(true)
        try {
          const res = await runGemini(prompt);
            setLoading(false)
            setInput("")
            setResultData(res)
            console.log(res)
            return res
        } catch (err) {
          console.log(err)
        }
      }
      
    const contextValues = {
        onSent,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        showResult,
        setShowResult,
        previousPrompt,
        setPreviousPrompt,
        loading,
        setLoading,
        resultData,
        setResultData
    }


  return (
      <Context.Provider value={contextValues} >
          {props.children}
      </Context.Provider>
  )
}

export default ContextProp;
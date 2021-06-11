import React from 'react'
import { useGlobalContext } from './context'

function Form() {
    const {input,setInput,handleInput} = useGlobalContext()

    return (
        <form action="" onSubmit={handleInput}>
            <input type="number" placeholder="Enter the number of random pictures you need" value={input} onChange={(e)=>{
                setInput(e.target.value)
            }}/>
            <button type="submit">GET</button>
        </form>
    )
}

export default Form

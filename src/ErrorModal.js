import React,{useEffect} from 'react'
import { useGlobalContext } from './context'

function ErrorModal() {
    const {inputError, setInputError} = useGlobalContext()

    useEffect(()=>{
        const a = setTimeout(()=>{
            setInputError({open:false,content:""})
        },2000)
        return ()=>clearTimeout(a)
    })

    return (
        <div className="error-modal">
            {inputError.content}
        </div>
    )
}

export default ErrorModal

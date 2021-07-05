import React,{useContext, useReducer, useState, useEffect} from 'react'
import {reduce} from './Reduce'

const myContext = React.createContext()

const AppProvider = ({children}) =>{
    const [state, dispach] = useReducer(reduce, {isTooltipOpen:false, content:"",target:null})
    const [input,setInput] = useState()
    const [array,setArray] = useState([])
    const [modal,setModal] = useState({open:false, contentIndex:0})
    const [inputError, setInputError] = useState({open:false,content:""})
    const [prevInput, setPrevInput] = useState({modified:0, current:0})
    const [message,setMessage] = useState({text:"",type:"",isOffline:false})
    const [pagination, setPagination] = useState({perPageItems:30, currentPage:1, totalPage:1})
    const [currentArray, setCurrentArray] = useState([])

    const dataLength = currentArray.length-1

    useEffect(()=>{
        loadItems(30)
        setMessage((prev)=>{
            return {...prev,text:"Here are some Random pictures for you",type:"first load"}
        })
    },[])

    useEffect(()=>{
        window.addEventListener("offline",handleOffline)
        return ()=>window.removeEventListener("offline",handleOffline)
    })

    useEffect(() => {
        window.addEventListener("online",handleOnline)
        return () => {
            window.removeEventListener("online",handleOnline)
        }
    })

    const handleInput = (e) =>{
        e.preventDefault()
        if(input){
            if(input <= 0){
                setInputError({open: true, content:"Number can't be less than 1"})
            }
            loadItems(parseInt(input))
        }else{
            setInputError({open:true,content:"No input is given!"})
        }
    }

    const loadItems = (n) =>{
        let a = []
        let verifiedInput = n
        if(n > 5000){
            setInputError({open:true,content:"Maximum 5000 images can be loaded!"})
            verifiedInput = 5000
        }

        if(message.type !== "Network issue"){
                setMessage(message =>{
                    return {...message,type:"success",text:`Here is your ${verifiedInput} ${verifiedInput>1 ? "images" : "image"} result`}
                })
            }

        const listRange = prevInput.modified+verifiedInput

        for(let i = prevInput.modified;i<listRange;i++){
            a.push(`https://picsum.photos/200/300?random=${i}`)
        }

        setArray(a)
        setPrevInput((prev)=>{
            return {...prev,modified:listRange}
        })
        if(input){
            setPrevInput((prev)=>{
                return {...prev,current:verifiedInput}
            }
                )
        }
        setInput("")
    }

    const nextIndex = () =>{
        if(modal.contentIndex === dataLength){
            setModal((state)=>{
                return {...state, contentIndex:0}
            })
        }else{
            setModal((state)=>{
                return {...state, contentIndex:state.contentIndex+1}
            })
        }
    }

    const prevIndex = () =>{
        if(modal.contentIndex === 0){
            setModal((state)=>{
                return {...state, contentIndex:dataLength}
            })
        }else{
            setModal((state)=>{
                return {...state, contentIndex:state.contentIndex-1}
            })
        }
    }

    const handleOffline = () =>{
        setMessage({...message,isOffline:true})
    }

    const handleOnline = () =>{
        if(message.isOffline){
        setMessage({...message,isOffline:false})
        }
    }

    const changeImages = ()=>{
        if(prevInput.current){
            loadItems(prevInput.current)
        }else{
            loadItems(30)
        }
        }
    
    useEffect(()=>{
        setPagination((prev)=>{
            const numberOfPage = Math.ceil(array.length/prev.perPageItems)
            return {...prev, totalPage:numberOfPage, currentPage:1}
        })
        handleCurrentArray()
    },[array])

    useEffect(()=>{
        handleCurrentArray()
    },[pagination.currentPage])

    const handleCurrentArray = () =>{
        const lastIndex = pagination.currentPage * pagination.perPageItems
        const firstIndex = lastIndex - pagination.perPageItems
        setCurrentArray(array.slice(firstIndex, lastIndex))
    }

    return (
    <myContext.Provider value={{state, dispach, input, handleInput, setInput, array, modal, 
        setModal, prevIndex, nextIndex, inputError, setInputError, message, setMessage, loadItems, changeImages, pagination,setPagination, currentArray}}>
        {children}
    </myContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(myContext)
}

export {AppProvider, useGlobalContext}
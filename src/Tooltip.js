import React,{useEffect,useRef} from 'react'
import { useGlobalContext } from './context'

function Tooltip() {
    const {state,dispach} = useGlobalContext()
    const tooltip = useRef(null)

    const handleScroll = ()=>dispach({text:"close"})

    useEffect(()=>{
        const position = state.target.getBoundingClientRect()
        tooltip.current.style.top = position.top-40+"px";
        tooltip.current.style.left = position.left-15+"px"
        const time = setTimeout(()=>dispach({text:"close"}),2000)

        return ()=>clearTimeout(time)
    })

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)

        return ()=>window.removeEventListener("scroll",handleScroll)
    })

    return (
        <div className="tooltip" ref={tooltip}>
            {state.content}
            <div className="arrow-down"></div>
        </div>
    )
}

export default Tooltip

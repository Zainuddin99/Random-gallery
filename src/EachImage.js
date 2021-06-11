import React from 'react'
import { useGlobalContext } from './context'

function EachImage({index, image}) {
    const {setModal, dispach} = useGlobalContext()

    return (
        <div className="wrapper">
            <div className="wrapper-content">
                <button style={{zIndex:"1000"}} onClick={()=>setModal({open:true,contentIndex:index})} onMouseOver={(e)=>dispach({text:"Click to view",e})} onMouseOut={()=>dispach({text:"close"})}>View this</button>
            </div>
            <img src={image} alt=""/>
        </div>
    )
}

export default EachImage

import React from 'react'
import { useGlobalContext } from './context'

function Modal() {
    const {dispach, currentArray, modal, setModal, prevIndex, nextIndex} = useGlobalContext()

    return (
        <div className="modal-container">
        <div className="modal-back" onClick={()=>setModal({...modal, open:false})}>
        </div>
        <div className="modal">
            <h1 className="imageNumber">{modal.contentIndex+1}</h1>
            <button className="close" onClick={()=>setModal({...modal, open:false})} onMouseOver={(e)=>dispach({text:"Close",e})} onMouseOut={()=>dispach({text:"close"})}>X</button>
            <button onClick={prevIndex} className="nav-btn" onMouseOut={()=>dispach({text:"close"})} onMouseOver={(e)=>dispach({text:"Previous",e})}>{"<"}</button>
            <img src={currentArray[modal.contentIndex]} alt=""/>
            <button onClick={nextIndex} className="nav-btn" onMouseOut={()=>dispach({text:"close"})} onMouseOver={(e)=>dispach({text:"Next",e})}>{'>'}</button>
        </div>
        </div>
    )
}

export default Modal
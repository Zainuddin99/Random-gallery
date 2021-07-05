import React from 'react'
import { useGlobalContext } from './context'
import {SwitchTransition, CSSTransition} from 'react-transition-group'

function EachImage({index, image}) {
    const {setModal, dispach} = useGlobalContext()

    return (
        <SwitchTransition>
            <CSSTransition key={image} timeout={{exit:0, enter:1000}} classNames="wrapper">
        <div className="wrapper">
            <div className="wrapper-content">
                <button style={{zIndex:"1000"}} onClick={()=>setModal({open:true,contentIndex:index})} onMouseOver={(e)=>dispach({text:"Click to view",e})} onMouseOut={()=>dispach({text:"close"})}>View this</button>
            </div>
            <img src={image} alt=""/>
        </div>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default EachImage

import React from 'react'
import Modal from './Modal'
import {useGlobalContext} from './context'
import Tooltip from './Tooltip'
import ImageContainer from './ImageContainer'
import Form from './Form'
import ErrorModal from './ErrorModal'
import Message from './Message'
import Header from './Header'


function App() {
    const {state, modal, inputError, changeImages,dispach} = useGlobalContext()

    return (
        <>
        { inputError.open && <ErrorModal/> }

        <Header/>

        { state.isTooltipOpen && <Tooltip/>}

        <Form/>

        <button className="changeImage-btn" onClick={changeImages} onMouseOut={()=>dispach({text:"close"})} onMouseOver={(e)=>dispach({text:"Click to display different set of same number images",e})}>Change Images</button>

        <Message/>

        <ImageContainer/>

        { modal.open && <Modal/> }
        </>
    )
}

export default App

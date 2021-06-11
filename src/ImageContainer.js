import React from 'react'
import { useGlobalContext } from './context'
import EachImage from './EachImage'

function ImageContainer() {
    const {array} = useGlobalContext()

    return (
        <div className="image-container">
            {
                array.map((image,index)=>{
                    return <EachImage key={index+1} index={index} image={image}/>
                })
            }
        </div>
    )
}

export default ImageContainer

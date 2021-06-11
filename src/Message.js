import React from 'react'
import { useGlobalContext } from './context'

function Message() {
    const {message} = useGlobalContext()

    return (
        <div className="message">
                {message.isOffline && <div className="offline-message">Connection failed! Check network</div>}
                <div className="success">{message.text}</div>
                <div className="sub-message"><strong>Note: </strong>Large number of images might take time to load. Hence please wait.</div>
                <div className="sub-message">Slow Loading? The connection might be slow.</div>

        </div>
    )
}

export default Message

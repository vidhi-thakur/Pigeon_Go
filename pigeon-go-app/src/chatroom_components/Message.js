import React from 'react'
import "./Message.css"

function Message({name, timestamp, message}) {
    return (
        <div className="message">
            <span className="message__userName font-s">{name}</span>
            {message}
            <span className="font-s m-l">{new Date(timestamp?.toDate()).toUTCString}</span>
        </div>
    )
}

export default Message

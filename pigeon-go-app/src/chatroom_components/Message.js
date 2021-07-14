import React from 'react'
import "./Message.css"
import { useStateValue } from "../StateProvider"

function Message({ name, timestamp, message }) {

    const [{ user }] = useStateValue()
    return (
        <div className={`message ${name === user.displayName && "message__receiver"}`}>
            <span className="message__userName font-s">{name}</span>
            {message}
            <span className="font-s m-l">{Date(timestamp).toString()}</span>
        </div>
    )
}

export default Message

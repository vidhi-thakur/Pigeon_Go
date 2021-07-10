import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className="sidebarchat">
            <Avatar />
            <div className="sidebarchat__info">
                <h4>ROOM NAME</h4>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat

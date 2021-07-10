import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core';

function SidebarChat() {

    let seed = Math.random();
    return (
        <div className="sidebarchat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarchat__info">
                <h6 className="mb-0 sidebarchat__chatRoom">ROOM NAME</h6>
                <p className="mb-0">Last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat

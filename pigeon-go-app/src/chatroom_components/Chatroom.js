import React from 'react'
import "./Chatroom.css"
import { Avatar, IconButton } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function Chatroom() {
    return (
        <div className="chatroom">
            {/* chat room header */}
            <div className="chatroom__header -flex">
                <Avatar />
                <IconButton>
                    <SearchRoundedIcon style={{color: "var(--gray-dark)"}} />
                </IconButton>
            </div>
            {/* chat room body */}
            {/* chat room footer */}
        </div>
    )
}

export default Chatroom

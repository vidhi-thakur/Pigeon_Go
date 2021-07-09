import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton, Button } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar sidebar--flex">
            <div className="sidebar__header sidebar--flex sidebar__border-b-1">
                <Avatar />
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className="sidebar__searchfield sidebar--flex sidebar__border-b-1">
                <SearchRoundedIcon />
                <input className="sidebar__searchinput" placeholder="Search chats" />
            </div>
            <Button variant="contained">START A NEW CHAT</Button>
        </div>
    )
}

export default Sidebar

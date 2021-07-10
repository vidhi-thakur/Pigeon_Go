import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ButtonModal from './ButtonModal';

import './Sidebar.css'
import SidebarChat from "./SidebarChat"

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
            <ButtonModal />
            <div className="sidebar__chatContainer sidebar--flex">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar

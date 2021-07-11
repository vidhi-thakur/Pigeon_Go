import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ButtonModal from './ButtonModal';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { auth } from "../firebase"

import './Sidebar.css'
import SidebarChat from "./SidebarChat"

function Sidebar() {

    const [darktheme, setDarktheme] = useState(false)

    const signOutHandler = () => {
        auth.signOut()
    }

    return (
        <div className="sidebar -flex">
            <div className="sidebar__header -flex sidebar__border-b-1">
                <Avatar />
                <div className="sidebar__icons -flex">
                    <IconButton className="sidebar__themetoggle" onClick={() => setDarktheme(!darktheme)}>{darktheme ? <Brightness2Icon className="_iconColor" /> : <WbSunnyIcon className="_iconColor" />}</IconButton>

                    <IconButton>
                        <ExitToAppIcon onClick={signOutHandler} className="_iconColor" />
                    </IconButton>
                </div>

            </div>
            <div className="sidebar__searchfield -flex sidebar__border-b-1">
                <SearchRoundedIcon style={{ color: "var(--gray-dark)" }} />
                <input className="sidebar__searchinput" placeholder="Search chats" />
            </div>
            <ButtonModal />
            <div className="sidebar__chatContainer -flex">
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar

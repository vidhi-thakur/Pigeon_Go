import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ButtonModal from './ButtonModal';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import db, { auth } from "../firebase"
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import './Sidebar.css'
import SidebarChat from "./SidebarChat"
import { useStateValue } from '../StateProvider';

function Sidebar() {

    const [{ user }] = useStateValue();

    const [darktheme, setDarktheme] = useState(false)
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        //db stuff --> here we wnat to fetch data from db and display to the user
        db.collection("rooms").orderBy("timestamp", "desc").onSnapshot((snapshot) => setRooms(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }))))
    }, [])
    
    return (
        <div className="sidebar -flex">
            <div className="sidebar__header -flex sidebar__border-b-1">
                <Avatar src={user.photoURL} />
                <div className="sidebar__icons -flex">
                    <OverlayTrigger
                        key="bottom"
                        placement="bottom"
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                Toggle theme
                            </Tooltip>
                        }
                    >
                        <IconButton className="sidebar__themetoggle --cursor" onClick={() => setDarktheme(!darktheme)}>{darktheme ? <Brightness2Icon className="_iconColor" /> : <WbSunnyIcon className="_iconColor" />}</IconButton>
                    </OverlayTrigger>
                    <OverlayTrigger
                        key="bottom1"
                        placement="bottom"
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                Sign Out
                            </Tooltip>
                        }
                    >
                        <IconButton>
                            <ExitToAppIcon onClick={() => auth.signOut()} className="_iconColor --cursor" />
                        </IconButton>
                    </OverlayTrigger>
                </div>

            </div>
            <div className="sidebar__searchfield -flex sidebar__border-b-1">
                <SearchRoundedIcon style={{ color: "var(--gray-dark)" }} />
                <input className="sidebar__searchinput" placeholder="Search chats" />
            </div>
            <ButtonModal />
            <div className="sidebar__chatContainer -flex">
                {rooms.map((room) => (
                    <SidebarChat key={room.id} id={room.id} title={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar

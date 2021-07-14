import React, { useEffect, useState } from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom"
import db from '../firebase';

function SidebarChat({ id, title }) {

    const [lastmessage, setLastmessage] = useState([])

    useEffect(() => {
        if(id) {
            db.collection("rooms").doc(id).collection("message").orderBy("userTimestamp", "desc").onSnapshot((snapshot)=>(setLastmessage(snapshot.docs.map(doc => ({
                data: doc.data()
            })))))
        }
         
    }, [id])

    return (
        <Link to={`/rooms/${id}`} style={{ textDecoration: "none", color: "black" }} >
            <div className="sidebarchat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`} />
                <div className="sidebarchat__info">
                    <h6 className="mb-0 sidebarchat__chatRoom">{title}</h6>
                    <p className="mb-0">{lastmessage[0]?.data.userInput}</p>
                </div>
            </div>
        </Link>

    )
}

export default SidebarChat

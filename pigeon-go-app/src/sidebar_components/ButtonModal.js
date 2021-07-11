import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from '@material-ui/core';
import "./ButtonModal.css"

function ButtonModal() {

    const [chatroominput, setChatroominput] = useState("")
    const [show, setShow] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        //db stuff --> basically we want to upload our input from user to db 
    } 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="buttonmodal">
            <Button className="buttonmodal__button" variant="contained" onClick={handleShow}>START A NEW CHAT</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ENTER CHAT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input value={chatroominput} onChange={(e)=>setChatroominput(e.target.value)} className="buttonmodal__input" placeholder="Enter chat subject here..." />
                        <button style={{display: "none"}} type="submit" onClick={onSubmit}>Invisible</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="buttonmodal__bottomButton" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ButtonModal
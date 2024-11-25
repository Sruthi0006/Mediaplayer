
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, removeVideo } from '../services/allApi';



function Videocard({ videoDetails, setRemoveStatus, present }) {
    <p></p>
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
        setShow(true);

let caption =videoDetails?.caption
let url = videoDetails?.embededLink
let time = new Date()
console.log(time);
const timeStamp = new Intl.DateTimeFormat("en-GB",{year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}).format(time)
console.log(timeStamp);

const reqBody ={
    caption,
    url,
    timeStamp
}


        const result = await addHistoryApi(reqBody)
        console.log(result);

    }

    const handleDelete = async (id) => {
        const result = await removeVideo(id)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
            setRemoveStatus(result)

        }
    }

    const videoDrag=(e , vDetails)=>{
        console.log(e);
        console.log(vDetails);
        e.dataTransfer.setData("videoDetails", JSON.stringify(vDetails))
        
    }

    return (
        <div>
            <Card style={{ width: '100%' }} className='mt-3' draggable onDragStart={(e)=>videoDrag(e,videoDetails )}>
                {!present && <Card.Img onClick={handleShow} variant='top' src={videoDetails?.ImgUrl} style={{ height: '300px' }} />}
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title style={{ fontSize: '10px' }}>{videoDetails?.caption}</Card.Title>
                    {!present && <Button onClick={() => handleDelete(videoDetails?.id)} variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>}
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{videoDetails?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <iframe width="100%" height="480" src={`${videoDetails?.embededLink}?autoplay=1`} title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </Modal.Body>

            </Modal>
        </div>
    )
}


export default Videocard

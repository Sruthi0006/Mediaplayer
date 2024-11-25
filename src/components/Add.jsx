import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { addvideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setAddStatus}) {

  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    Imgurl: "",
    embededLink: ""
  })



  console.log(videoDetails);


  const handleClose = () => {setShow(false)
    handleCancel()
  };
  const handleShow = () => setShow(true);
  const handleCancel = () => {
    setVideoDetails({
      caption: "",
      Imgurl: "",
      embededLink: ""
    })
  }

const handleadd = async()=>{
const {caption,Imgurl,embededLink} = videoDetails

if(!caption || !Imgurl || !embededLink){
  toast.info('please fill the form completely')
}
else{


  if(embededLink.startsWith('https://youtu.be/')){
    let link = `https://www.youtube.com/embed/${embededLink.slice(17,28)}`
    console.log(link);
    const result = await addvideoApi({caption,Imgurl,embededLink:link})
    console.log(result);
    if(result.status>=200 && result.status<300){
      toast.success('Video added successfully')
      handleClose()
      setAddStatus(result)
    }
    else{
      toast.error('Something went wrong')
      handleCancel()
    }
  }
  else{
    let link =` https://www.youtube.com/embed/${embededLink.slice(-11)}`
    console.log(link);
    const result = await addvideoApi({caption,Imgurl,embededLink:link})
    console.log(result);
    if(result.status>=200 && result.status<300){
      toast.success('Video added successfully')
      handleClose()
      setAddStatus(result)
    }
    else{
      toast.error('Something went wrong')
      handleCancel()
    }
    
  }





  
  
}

}



  return (
    <>

      <h5><span className='d-md-inline d-none'>Upload New Video</span> <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-3' /></h5>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2 text-warning' /> Upload Videos </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-white'>Please fill the following details</p>
          <div className='rounded border border-secondary' style={{ padding: '30px' }}>
            <input type="text" placeholder='Video Caption' value={videoDetails.caption} onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} className='form-control mb-4' />
            <input type="text" placeholder='Video Image' value={videoDetails.Imgurl} onChange={(e) => setVideoDetails({ ...videoDetails, Imgurl: e.target.value })} className='form-control mb-4' />
            <input type="text" placeholder='Video Url' value={videoDetails.embededLink} onChange={(e) => setVideoDetails({ ...videoDetails, embededLink: e.target.value })} className='form-control mb-4' />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleadd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer position = 'top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Add




//https://youtu.be/GWNrPJyRTcA?si=QLaUL7kaAFD233FC
//https://www.youtube.com/watch?v=GWNrPJyRTcA 
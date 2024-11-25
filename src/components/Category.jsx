import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Videocard from './Videocard'
import { addCategoryApi, deleteCategoryApi, getCtegoryApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { json } from 'react-router-dom';


function Categories({categoryVDStatus}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [categoryStatus, setCategoryStatus] = useState({})
  const [deleteCategory, setDeleteCategory] = useState([])
  const [categoryUpdateStatus, setCategoryUpdateStatus] = useState({})

  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const handleCancel = () => {
    setCategoryName("")
  }

  const handleADD = async () => {
    if (!categoryName) {
      toast.info('please fill the form completely')
    }
    else {
      const reqBody = {
        category: categoryName,
        allVideos: []
      }
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Category added successfully')
        handleClose()
        setCategoryStatus(result)
      }
      else {
        toast.error('Something went wrong')
      }

    }
  }

  const handleDelete = async(id)=>{
    const result = await deleteCategoryApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setDeleteCategory(result)
      toast.error('Category deleted')
    }
    else{
      toast.error('Something went wrong')
    }
    
  }

  const getCategory = async () => {
    const result = await getCtegoryApi()
    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data);
    }
    else{
      toast.error("Something went wrong")
    }

  }
  console.log(allCategory);

  const videoOver = (e)=>{
    //reload prevent
    e.preventDefault()
  }

  const videoDrop = async(e, categoryDetails)=>{

    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData('videoDetails'))
    console.log(videoDetails);
    // categoryDetails.allVideos.push(videoDetails)
    // console.log(categoryDetails);

    if(categoryDetails.allVideos.find((item)=>item.id == videoDetails.id)){
      toast.warning('Video already in the same category')
    }
    else{
      categoryDetails.allVideos.push(videoDetails)
      console.log(categoryDetails);
      const result = await updateCategoryApi(categoryDetails.id,categoryDetails)
      console.log(result);
      if(result.status>=200 && result.status<300){
        setCategoryUpdateStatus(result)
      }
      
    }
    
    
  }

  const videoDrag = (e,videoDetails, categoryDetails)=>{
    console.log(videoDetails, categoryDetails);

    const details = {
      videoDetails,
      categoryDetails
    }
    e.dataTransfer.setData("Details",JSON.stringify(details))
    

  }

  useEffect(() => {
    getCategory()
  }, [categoryStatus,deleteCategory, categoryUpdateStatus,categoryVDStatus])



  return (
    <>
      <h4 className='mt-5'>Category</h4>
      <button onClick={handleShow} className='btn btn-warning mt-4 rounded w-100'> Add Category</button>

      {allCategory?.length > 0 ?
        allCategory?.map((item) => (
          <div className='border border-secondary p-3 mt-4' droppable onDragOver={(e)=>videoOver(e)} onDrop={(e)=>videoDrop(e, item)}>
            <div className="d-flex justify-content-between mb-3">
              <h6 className='pt-2'>{item?.category}</h6>
              <button className='btn btn-danger' onClick={()=>handleDelete(item?.id)}><FontAwesomeIcon icon={faTrash} /></button>

            </div>

            {item?.allVideos.length > 0 &&
            item?.allVideos.map((video)=>(
              <div draggable onDragStart={(e)=>(videoDrag(e, video, item))} >
                <Videocard videoDetails={video} present = {true} draggable onDragStart={(e)=>videoDrag(e,videoDetails)}/>
                </div>
            ))
            
            }
          </div>
        ))


        :

        <h5 className='text-center text-danger mt-4'>No category added yet...</h5>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 rounded border border-light'>
            <input type="text" placeholder='Enter Category Name' className='form-control' onChange={(e) => setCategoryName(e.target.value)} value={categoryName} />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleADD}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Categories
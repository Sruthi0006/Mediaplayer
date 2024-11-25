import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getvideoApi, updateCategoryApi } from '../services/allApi'


function Allvideos({addStatus, setcategoryVDStatus}) {
  const [video, setVideo] = useState([])
  const [deleteStatus, setDeleteStatus] = useState({})
  
  const getAllVideo = async()=>{
    const result = await getvideoApi()
    // console.log(result);

    setVideo(result.data)
    
  }

  console.log(video);

  const dragOver = (e)=>{
    e.preventDefault()
  }

  const videoDrop =  async(e)=>{
    const {videoDetails, categoryDetails} = JSON.parse(e.dataTransfer.getData("Details"))
    console.log(videoDetails, categoryDetails);

    let result = categoryDetails.allVideos.filter((item)=>item.id!=videoDetails.id)
    const reqBody = {
      category : categoryDetails.category,
      allVideos : result,
      id : categoryDetails.id
    }
    
    const response = await updateCategoryApi(categoryDetails.id, reqBody)
    console.log(response);

    if(response.status >=200 && response.status<300){
      setcategoryVDStatus(result)
    }
    

  }
  

  useEffect(()=>{
    getAllVideo()
  },[addStatus, deleteStatus])

  


  return (
    <>
    <h4 className='mt-5'>All Videos</h4>
    {video?.length>0?

    <div className="container-fluid mt-3"  droppable onDragOver={(e)=>dragOver(e) } onDrop={(e)=>videoDrop(e)}>
      <div className="row">
        {video?.map((item)=>(
          <div className="col-md-3 p-3">
          <Videocard videoDetails = {item} setDeleteStatus ={setDeleteStatus} />
        </div>
        ))}
        
        
      </div>
    </div>
    :
    <div className="container-fluid mt-4">

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <img  src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="" className='w-100' />
          <h5 className='text-center text-danger mt-4'>No video added yet</h5>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>}




    </>
  )
}

export default Allvideos
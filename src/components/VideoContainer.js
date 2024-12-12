import React, { useEffect, useState } from 'react'
import { Youtube_API } from '../utils/constatnts';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  const fetchdata = async () => {
    const data = await fetch(Youtube_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items)
}
  useEffect(() => {
    fetchdata();
  }, []);

 
  return ( 
  <div className='flex flex-wrap'>
    {videos.map((video)=>{
      return <Link to="/Watchpage">
        <VideoCards key={video.id} info={video}/>
        </Link>
    })}
    </div>
  )
}

export default VideoContainer
import React, { useEffect, useState } from 'react'
import { Youtube_API } from '../utils/constatnts';
import VideoCards, { AdVideoCard } from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  const fetchdata = async () => {
    const data = await fetch(Youtube_API);
    const json = await data.json();
   // console.log(json.items);
    setVideos(json.items)
}
//console.log(videos[0])
  useEffect(() => {
    fetchdata();
  }, []);

 
  return ( <div className='flex flex-wrap'>
    <AdVideoCard info={videos[0]}/>
    {videos.map((video)=>{
      return <Link  key={video.id} to={"/Watchpage?v="+video.id}>
        <VideoCards info={video}/>
        </Link>
    })}
    </div>
  )
  
}
export default VideoContainer
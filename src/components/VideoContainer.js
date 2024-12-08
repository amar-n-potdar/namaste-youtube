import React, { useEffect } from 'react'
import { Youtube_API } from '../utils/constatnts';

const VideoContainer = () => {
  const fetchdata = async () => {
    const data = await fetch(Youtube_API);
    const json = await data.json();
    console.log(json);
    
   
  }
  useEffect(() => {
    fetchdata();
  }, []);

 
  return ( 
  <div>
    VideoContainer
    </div>
  )
}

export default VideoContainer
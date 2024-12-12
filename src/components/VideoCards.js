import React from 'react'

const VideoCards = ({info}) => {
    //console.log(info);
    if (info==null)  return <h1>Loading</h1>
    
    const {snippet,statistics}=info;
    const {channelTitle,thumbnails,title}=snippet;
    
    
    const {likeCount,viewCount}=statistics;
    
  return (<div className='p-2 m-2 w-60 shadow-2xl '>
    <img alt="video" className=" w-max rounded-lg"src={thumbnails?.default?.url} />
    <ul>
    <li className='font-bold py-2'>{title}</li>
    <li>{channelTitle}</li> 
    <li> {likeCount}</li> 
    </ul>
    </div>
  )
}
export const AdVideoCard=({info})=>{
return <div className='p-1 m-1 border-red-900'>
  <h1>HigherOrderComponent</h1>
<VideoCards info={info}/>
</div>
}


export default VideoCards
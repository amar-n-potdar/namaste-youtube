import React from 'react'
import { MainContainer } from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
  <div className='flex grid grid-flow-col'>
   <Sidebar />
   <MainContainer />
   </div>
  )
}

export default Body
import React from 'react'
import { MainContainer } from './MainContainer'
import Sidebar from './Sidebar'
import Watchpage from './Watchpage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
  <div className='flex grid grid-flow-col'>
   <Sidebar />
   <Outlet/>
   </div>
  )
}

export default Body
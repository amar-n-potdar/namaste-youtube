import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appslice';

const Watchpage = () => {
   const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div>Watchpage</div>
  )
}

export default Watchpage
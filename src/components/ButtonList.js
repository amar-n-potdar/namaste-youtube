import React from 'react'
import Button from './Button'
const list=["All","News","Kids","Soccer","Cooking","Songs","Cricket","Valentines"];
const ButtonList = () => {
  
  return (
    <div className='flex'>
    
    {list.map((button)=> <Button key={button} name={button}/>)}
    </div>
  )
}

export default ButtonList
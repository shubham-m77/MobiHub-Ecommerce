import React from 'react'
import { RiLoader3Line } from "react-icons/ri";
import "@/app/globals.css"
const loading = () => {
  return (
    <div className='d-flex align-items-center justify-content-center spinner_box'>
     <RiLoader3Line className='spinner'/>
    </div>
  )
}

export default loading

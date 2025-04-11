"use client"
import "@/app/globals.css"
const error = () => {
  return (
    <div className='d-flex align-items-center justify-content-center spinner_box'>
     <h1 className='error_msg'>Something Went Wrong,<span> Error Found!!</span> </h1>
    </div>
  )
}

export default error

"use client"
import "@/app/globals.css"
const error = () => {
  return (
    <div className='d-flex align-items-center justify-content-center spinner_box '>
     <h2 className='error_msg pb-5'>Something Went Wrong,<span> Error Found in Fetching Products!!</span></h2>
    </div>
  )
}

export default error

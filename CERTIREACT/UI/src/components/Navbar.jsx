import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div>
            <nav className="flex justify-end gap-[20px] mr-4 ">
            <button className="bg-sky-500 hover:bg-sky-700">HOME</button>
            <Link to={'/issue'} className="bg-sky-500 hover:bg-sky-700">ISSUE CERTIFICATE</Link>
            </nav> 
         </div>
    </>
  )
}

export default Navbar
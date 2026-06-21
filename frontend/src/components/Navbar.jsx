import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="sticky bg-[rgb(17,45,78)] text-white p-4 flex justify-between items-center border-b-2 border-black shadow-sm top-0 z-50 font-raleway">
          <h1 className="font-bold text-xl">Chatham/Lee County Job Board
          </h1>
          <ul className="text-white flex space-x-4 font-bold">
            <li className="duration-500 ease-in-out 
          hover:underline hover:text-[rgb(219,226,239)] hover:cursor-pointer hover:scale-125 hover:opacity-100"><Link to="/home">Home</Link></li>
            <li className="duration-500 ease-in-out 
          hover:underline hover:text-[rgb(219,226,239)] hover:cursor-pointer hover:scale-125 hover:opacity-100"><Link to="/jobs">Jobs</Link></li>
            <li className="duration-500 ease-in-out 
          hover:underline hover:text-[rgb(219,226,239)] hover:cursor-pointer hover:scale-125 hover:opacity-100"><Link to="/about">About</Link></li>
            <li className="duration-500 ease-in-out 
          hover:underline hover:text-[rgb(219,226,239)] hover:cursor-pointer hover:scale-125 hover:opacity-100"><Link to="/contact">Contact</Link></li>
          </ul>
          <ul className="flex space-x-4">
            <li><Link to="/notifications"><IoMdNotifications className="duration-500 ease-in-out text-white hover:text-[rgb(219,226,239)] hover:scale-125 hover:opacity-100 transition-colors" size={28}/></Link></li>
            <li><Link to="/profile/userId">profile logo</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-[rgb(249, 247, 247)] min-h-screen font-raleway pt-16">
        <div className="flex flex-col items-center justify-center h-60 border-b-4 border-[rgb(17,45,78)] gap-y-4 mb-16 max-w-5xl w-full mx-auto">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">The Chatham/Lee County Job Board is a community-driven platform dedicated to connecting job seekers with local employment opportunities. Our mission is to support the economic growth of Chatham and Lee County by providing a centralized hub for job listings, resources, and information about the local job market.</p>
        </div>
        <div className="flex flex-row items-center justify-center h-60 gap-x-32 px-16">
          <div className="flex flex-col border-2 border-[rgb(17,45,78)] p-8 rounded-lg shadow-sm ">
            <h2 className="text-2xl font-bold mb-4 border-solid border-b-2 border-[rgb(17,45,78)]">Our Goal</h2>
            <p>In a digital world filled with recruitment scams, we prioritize your safety. 
                Every employer account created directly on our platform undergoes a manual 
                verification process. When you see our <span className="font-bold text-[rgb(63,114,175)]">Verified Local</span> badge, 
                you can apply with confidence knowing you're connecting with a real business 
                in our community.</p>
          </div>
          <div className="flex flex-col border-2 border-[rgb(17,45,78)] p-8 rounded-lg shadow-sm ">
            <h2 className="text-2xl font-bold mb-4 border-solid border-b-2 border-[rgb(17,45,78)]">Serving our Community</h2>
            <p>We are specifically engineered to serve the <span className="font-bold">86,390 residents</span> 
                of Siler City, Pittsboro, Sanford, and the surrounding rural communities. 
                While national job boards focus on major tech hubs, we focus on the retail, 
                service, and trade roles that are the backbone of the Piedmont region.</p>
          </div>

        </div>
        <div className="flex flex-col items-center justify-center h-60 gap-y-4 mt-16 max-w-5xl w-full mx-auto">
          <p className="text-center text-sm text-gray-500 mt-8">
                © {new Date().getFullYear()} <a href="https://www.linkedin.com/in/jymir/" target="_blank" rel="noopener noreferrer" className="text-[rgb(63,114,175)] hover:underline">Jy'Mir Fuller</a>. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
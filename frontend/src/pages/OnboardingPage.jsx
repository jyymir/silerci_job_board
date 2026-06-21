import React from 'react'

const OnboardingPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Chatham/Lee County Job Board</h1>
        <p className="text-lg text-gray-700 mb-8">Your one-stop destination for local job opportunities in Chatham and Lee County.</p>
        <a href="/jobs" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">Explore Jobs</a>
      </div>
    </>
  )
}

export default OnboardingPage
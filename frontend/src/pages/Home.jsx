import React from 'react'
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-[rgb(249,247,247)] min-h-screen font-raleway w-full">
        
        {/* Header + Search */}
        <div className="max-w-7xl mx-auto w-full px-8 pt-16">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Find Your Next Local Opportunity</h1>
            <p className="text-lg text-gray-700 mb-8">Looking for jobs? Browse our collection of 
              latest jobs and work opportunities locally.</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-8 pb-8">
            <input type="text" placeholder="Search Job Title or Keyword" className="w-1/4 p-4 border border-gray-300 rounded-lg" />
            <input type="text" placeholder="Location" className="w-1/8 p-4 border border-gray-300 rounded-lg" />
            <button className="bg-[rgb(17,45,78)] text-white px-6 py-4 rounded-lg hover:bg-[rgb(27,100,184)] transition-colors duration-300">Search</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-row items-start gap-10 pt-8 px-16 max-w-7xl mx-auto w-full">

          {/* LEFT - Filter Panel */}
          <div className="bg-[rgb(17,45,78)] rounded-2xl p-5 w-64 flex-shrink-0 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <span className="text-base font-semibold text-white tracking-wide">Filters</span>
              <svg className="w-4 h-4 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="space-y-6">

              {/* Date Posted */}
              <div>
                <p className="text-sm font-semibold text-white mb-2">Date posted</p>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-[rgb(219,226,239)] rounded-lg px-3 py-2 text-sm text-stone-700 pr-8 focus:outline-none focus:ring-1 focus:ring-stone-400">
                    <option>Last Week</option>
                    <option>Last Month</option>
                    <option>Last 3 Months</option>
                    <option>Any Time</option>
                  </select>
                  <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Job Type */}
              <div>
                <p className="text-sm font-semibold text-white mb-3">Job type</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 bg-[rgb(219,226,239)] border-2 border-red-400 rounded-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-white">Full-time</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 bg-white border-2 border-stone-400 rounded-sm flex-shrink-0"></div>
                    <span className="text-sm text-white">Part-time</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 bg-white border-2 border-stone-400 rounded-sm flex-shrink-0"></div>
                    <span className="text-sm text-white">Intern</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 bg-white border-2 border-stone-400 rounded-sm flex-shrink-0"></div>
                    <span className="text-sm text-white">Freelance</span>
                  </label>
                </div>
              </div>

              {/* Salary Range */}
              <div>
                <p className="text-sm font-semibold text-white mb-3">Salary Range</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 bg-white border-2 border-stone-400 rounded-sm flex-shrink-0"></div>
                    <span className="text-sm text-white">Under $1000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 bg-red-400 border-2 border-red-400 rounded-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-white">$1000-$2000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 bg-white border-2 border-stone-400 rounded-sm flex-shrink-0"></div>
                    <span className="text-sm text-white">$2000-$3000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 bg-white border-2 border-stone-400 rounded-sm flex-shrink-0"></div>
                    <span className="text-sm text-white">≥ $3000</span>
                  </label>
                </div>
              </div>

              {/* On site/Remote */}
              <div>
                <p className="text-sm font-semibold text-white mb-3">On site/Remote</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 bg-red-400 border-2 border-red-400 rounded-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-white">On-site</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 bg-white border-2 border-stone-400 rounded-sm flex-shrink-0"></div>
                    <span className="text-sm text-white">Hybrid</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 bg-white border-2 border-stone-400 rounded-sm flex-shrink-0"></div>
                    <span className="text-sm text-white">Remote</span>
                  </label>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT - Job Listings */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Latest Job Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                <p className="text-gray-700 mb-4">Company XYZ - Chatham, IL</p>
                <p className="text-gray-700 mb-4">Full-time | $80,000 - $100,000</p>
                <a href="/jobs/1" className="bg-[rgb(17,45,78)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(27,100,184)] transition-colors duration-300">View Details</a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                <p className="text-gray-700 mb-4">Company XYZ - Chatham, IL</p>
                <p className="text-gray-700 mb-4">Full-time | $80,000 - $100,000</p>
                <a href="/jobs/1" className="bg-[rgb(17,45,78)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(27,100,184)] transition-colors duration-300">View Details</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
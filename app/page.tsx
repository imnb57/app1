import React from 'react'

const Page = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Blurry orb background */}
      <div className="absolute rounded-full w-[50rem] h-[50rem] bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 blur-[200px]"></div>

      {/* Content */}
      <div className="z-10 text-center px-6">
        {/* Main Heading */}
        <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl text-white leading-tight drop-shadow-md">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Data Science for Beginners
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-gray-300 font-medium text-lg sm:text-xl mt-5 max-w-2xl mx-auto drop-shadow-md">
          Your one-stop destination to embark on your data science journey. Learn, grow, and master the art of data!
        </p>

        {/* Call-to-action Button */}
        <div className="mt-8">
          <a
            href="#"
            className="px-8 py-3 text-lg font-semibold text-black bg-gradient-to-r from-yellow-400 to-red-500 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            COMING SOON!!!
          </a>
        </div>
      </div>
    </div>
  )
}

export default Page

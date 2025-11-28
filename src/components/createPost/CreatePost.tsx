import Image from 'next/image'
import React from 'react'
import { HiVideoCamera } from "react-icons/hi";
import { BsCameraReelsFill, BsFileImage } from "react-icons/bs";

const CreatePost = ({user}:{user:string}) => {
    
  return (
    
         <div className="bg-gray-100 shadow-sm border border-gray-200 rounded-xs my-6 p-1 flex justify-between items-center">
            {/* user profile pic  */}
                <div className="flex justify-center items-center">
                  <div className="w-12 mx-2">
                  <Image src="https://github.com/shadcn.png" alt="post image" width={100} height={100} className="rounded-full"/>
                </div>
                {/* post input field */}
                
                  <button className="border border-gray-100 rounded-full px-3 py-1.5 mx-2">{`What's on your mind ${user}`}</button>
                
                </div>
                {/* buton group  */}
                <div className="">
                  <button className="mx-2">
                    <HiVideoCamera size={26} className="text-[#FF4D6D]"/>
                  </button>
                  <button className="mx-2">
                    <BsFileImage size={26} className="text-[#4DFFB8]" />
                  </button>
                  <button className="mx-2">
                    <BsCameraReelsFill size={22} className="text-[#FF4D6D]"/>
                  </button>
                </div>
          </div>
  )
}

export default CreatePost
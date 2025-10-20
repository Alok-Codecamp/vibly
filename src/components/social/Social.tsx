"use client"

import { IoIosArrowDown } from 'react-icons/io'
import { FaGamepad } from 'react-icons/fa'
import { MdFeed,MdOndemandVideo } from 'react-icons/md'
import { useState } from "react"
import { RiPagesLine } from "react-icons/ri"
import { FaShop } from "react-icons/fa6"




const Social = () => {
  const [open, setOpen] = useState(false);
  
    const handleTriggerClick = () => {
      setOpen(!open);
    }


    return (
        <div className=' my-6 border-1 border-gray-100 w-46 py-1 rounded-medium'>
            {/* dropdown container */}
            <div>
                
                {/* dropdown trigger */}
                    <button   onClick={handleTriggerClick}className="w-full cursor-pointer flex justify-start items-center text-lg font-medium text-gray-700 hover:text-black">
Social<IoIosArrowDown  className={`ml-1 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`} />
                    </button>
                
              {/* dropdown menu content */}
                {open?
                   <ul  className='list-none font-medium text-gray-500'>
                    <li className='my-2 flex justify-start items-center'><span className='bg-[#8E53FD] p-1 mr-2 rounded-full'><MdFeed  size={22} color='white'/></span>
                        Feeds</li>
                    <li className='my-2 flex justify-start items-center'><span className='bg-[#8E53FD] p-1 mr-2 rounded-full'><MdOndemandVideo size={22} color='white'/></span>
                        Video</li>
                    <li className='my-2 flex justify-start items-center'><span className='bg-[#8E53FD] p-1 mr-2 rounded-full'><RiPagesLine  size={22} color='white'/></span>
                        Pages</li>
                    <li className='my-2 flex justify-start items-center'><span className='bg-[#8E53FD] p-1 mr-2 rounded-full'><FaShop  size={22} color='white'/></span>
                        Market</li>
                        <li className='my-2 flex justify-start items-center'><span className='bg-[#8E53FD] p-1 mr-2 rounded-full'><FaGamepad  size={22} color='white'/></span>
                        Gaming</li>
                </ul>:<></>}
            </div>
        </div>
    )
}

export default Social
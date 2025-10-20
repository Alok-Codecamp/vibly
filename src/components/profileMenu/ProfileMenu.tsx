"use client"
import { useEffect, useRef, useState } from "react";
import { BiSolidMessageSquare } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdGroups, MdHome } from "react-icons/md";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
 const dropdownRef = useRef<HTMLDivElement>(null); 
    const handleTriggerClick = () => {
      setOpen(!open);
    }
 useEffect(()=>{
    const handleTriggerClickOutside=(event:MouseEvent)=>{
        if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
            setOpen(false)
        }
    }
    document.addEventListener("mousedown", handleTriggerClickOutside);
    return ()=>{
        document.removeEventListener("mousedown",handleTriggerClickOutside)
    }
 },[])


    return (
        <div ref={dropdownRef} className='w-52'>
            {/* dropdown container */}
            <div>
                
                {/* dropdown trigger */}
                    <button   onClick={handleTriggerClick}className="w-full cursor-pointer flex justify-start items-center text-lg font-medium text-gray-700 hover:text-black">
Menu<IoIosArrowDown  className={`ml-1 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`} />
                    </button>
                
              {/* dropdown menu content */}
                {open?
                 <ul  className='list-none font-medium text-gray-500'>
                    <li className='my-2 flex justify-start items-center'><span className='bg-[#8E53FD] p-1 mr-2 rounded-full'><MdHome  size={22} color='white'/></span>
                        Home</li>
                    <li className='my-2 flex justify-start items-center'><span className='bg-[#8E53FD] p-1 mr-2 rounded-full'><FaUserFriends size={22} color='white'/></span>
                        Friend</li>
                    <li className='my-2 flex justify-start items-center'><span className='bg-[#8E53FD] p-1 mr-2 rounded-full'><MdGroups   size={22} color='white'/></span>
                        Groups</li>
                    <li className='my-2 flex justify-start items-center'><span className='bg-[#8E53FD] p-1 mr-2 rounded-full'><BiSolidMessageSquare  size={22} color='white'/></span>
                        Messages</li>
                       
                </ul>
                    :<></>}
            </div>
        </div>
    )
}

export default ProfileMenu
"use client"
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowDown, IoIosHome } from 'react-icons/io'
import { FaUserFriends } from 'react-icons/fa'
import { MdGroups } from 'react-icons/md'
import { BiMessageSquare } from 'react-icons/bi'



const Menu = () => {

    return (
        <div >
            <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-0 py-1 rounded-lg cursor-pointer select-none flex justify-start items-center text-lg">Menu<IoIosArrowDown className="" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56 ml-8 mr-auto p-0 border-0 shadow-none '>
                    <DropdownMenuItem className='text-lg text-black'><span className='bg-[#8E53FD] p-1 rounded-full'><IoIosHome  size={26} color='white'/></span>
                        Home</DropdownMenuItem>
                    <DropdownMenuItem className='text-lg text-black'><span className='bg-[#8E53FD] p-1 rounded-full'><FaUserFriends
  size={26} color='white'/></span>
                        Friends</DropdownMenuItem>
                    <DropdownMenuItem className='text-lg text-black'><span className='bg-[#8E53FD] p-1 rounded-full'><MdGroups  size={26} color='white'/></span>
                        Groups</DropdownMenuItem>
                    <DropdownMenuItem className='text-lg text-black'><span className='bg-[#8E53FD] p-1 rounded-full'><BiMessageSquare  size={26} color='white'/></span>
                        Messages</DropdownMenuItem>
                    
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Menu
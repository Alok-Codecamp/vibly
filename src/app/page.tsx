import Image from "next/image";
import logo from "@/assets/logo/vibly.png"
import Form from "@/components/Form/Form";
import { CiSettings } from "react-icons/ci";
import {  IoMdNotificationsOutline } from "react-icons/io";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Menu from "@/components/menu/Menu";
import Social from "@/components/social/Social";
import ProfileMenu from "@/components/profileMenu/ProfileMenu";


export default function Home() {




  return (
    <div className="">
      <main className="hidden md:grid grid-cols-4">
        {/* left  */}
        <section className="mx-10 col-span-1 mt-10">
          {/* vibly logo */}
          <div className="">
            <Image src={logo} height={100} width={100} alt="facebook logo" />
          </div>
          {/* left side menu  */}
          <div >
            <div className="mt-10 ">
            <Menu />
            
          </div>
          <div>
            <Social />
          </div>
          </div>
        </section>
        {/* middle  */}
        <section className="border-r-1 border-l-1 border-gray-300 pt-10 px-10 col-span-2 h-screen">
          {/* search input bar */}
          <div>
            <Form />
          </div>
        </section>
        {/* right side */}
        <section className="mx-10 col-span-1 mt-10">
          {/* profile menu section  */}
          <div className="flex justify-center items-start">
           
             <button className="mr-3"><CiSettings size={26} /></button>
            <button className="mx-3"><IoMdNotificationsOutline size={26} /></button>
          
            <div className="flex justify-center items-start w-48">
              <Avatar className="mr-3">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <ProfileMenu/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

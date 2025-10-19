import Image from "next/image";
import logo from "@/assets/logo/vibly.png"
import Form from "@/components/Form/Form";
import { CiSettings } from "react-icons/ci";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {



  return (
    <div className="">
      <main className="hidden md:grid grid-cols-4 mt-10">
        {/* left  */}
        <section className="mx-10 col-span-1">
          <div className="">
            <Image src={logo} height={100} width={100} alt="facebook logo" />
          </div>
        </section>
        {/* middle  */}
        <section className="border-r-1 border-l-1 border-gray-200 px-10 col-span-2 h-screen">
          {/* search input bar */}
          <div>
            <Form />
          </div>
        </section>
        {/* right side */}
        <section className="mx-10 col-span-1">
          <div className="flex justify-center items-center">
            <button className="mr-3"><CiSettings size={26} /></button>
            <button className="mx-3"><IoMdNotificationsOutline size={26} /></button>
            <div className="flex justify-center items-center border-1 border-gray-300 px-3 py-1 rounded-full">
              <Avatar className="mr-3">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none focus:ring-0 focus:ring-offset-0 active:outline-none cursor-pointer select-none flex justify-center items-end">Guest<IoIosArrowDown className="" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

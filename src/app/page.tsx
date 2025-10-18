import Image from "next/image";
import logo from "@/assets/logo/vibly.png"
import Form from "@/components/Form/Form";



export default function Home() {


 
  return (
    <div className="">
      <main className="hidden md:grid grid-cols-4 mt-10">
        {/* left  */}
        <section className="mx-10 col-span-1">
          <div className="">
            <Image src={logo} height={100} width={100} alt="facebook logo"/>
          </div>
        </section>
        {/* middle  */}
        <section className="border-r-1 border-l-1 border-gray-200 px-10 col-span-2 h-screen">
          {/* search input bar */}
          <div>
            <Form/>
          </div>
        </section>
        {/* right side */} 
        <section className="mx-10 col-span-1">
          <div>right section</div>
        </section>
       </main>
    </div>
  );
}

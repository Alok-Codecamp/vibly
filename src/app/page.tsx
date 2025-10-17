import Image from "next/image";
import logo from "@/assets/logo/vibly.png"

export default function Home() {
  return (
    <div className="">
      <main className="hidden md:grid grid-cols-3 mt-10">
        {/* left  */}
        <section className="">
          <div className="mx-10">
            <Image src={logo} height={100} width={100} alt="facebook logo"/>
          </div>
        </section>
        {/* middle  */}
        <section className="border-r-1 border-l-1 border-gray-200">
          <div>middle section</div>
        </section>
        {/* right side */}
        <section className="">
          <div>right section</div>
        </section>
       </main>
    </div>
  );
}

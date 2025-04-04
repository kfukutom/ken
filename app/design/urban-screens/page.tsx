//rea
import Image from "next/image";
import rdr2 from "@/public/outlaws.jpeg";
export default function Home() {
    return (
      <div className="animate-fade-left bg-white animate-once animate-ease-linear px-4 sm:px-12 md:px-24 lg:px-36 xl:px-[300px] py-12">
        <p className="py-2">This project was made by <a href="/" className="underline">Ken</a>.</p>
        <p className="italic">Thanks for stopping by, and also this page is WIP.</p>
        <Image
          className="rounded-2xl shadow-md mt-3"
          src={rdr2}
          alt="fav game <3"
          width={200}
          height={100}
        />
      </div>
    );
} // Index or Page.tsx()
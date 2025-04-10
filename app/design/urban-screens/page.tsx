//rea
import Image from "next/image";
import rdr2 from "@/public/outlaws.jpeg";

export default function Home() {
  return (
    <div className="animate-fade-left animate-once animate-ease-linear bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 max-w-screen-sm mx-auto">
      <p className="py-2">
        This project was made by <a href="/" className="underline">Ken</a>.
      </p>
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
} // Index
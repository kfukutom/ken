"use client";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";
import TechStack from "@/components/TechStack";

export default function About() {
  return (
    <div className="animate-fade-right animate-once animate-ease-linear px-4 sm:px-12 md:px-24 lg:px-36 xl:px-[424px] py-12">
      <h1 className="text-lg font-light">Hello!</h1>
      <p className="text-xs text-yellow-600 italic">Currently in Tampa, Florida 🌴</p>
      <p className="mt-2 text-sm font-thin text-gray-500">
        I'm Ken Fukutomi and I'm originally from Southern California. I work with data and software, and I'm currently looking for opportunities in summer 2026, ideally working within an urban context.
      </p>
      <p className="mt-2 text-sm text-gray-700">
        My contact is as follows,{" "}
        <a
          className="underline cursor-pointer hover:text-blue-400"
          href="mailto:kfukutom@umich.edu"
        >
          kfukutom [at] umich [dot] edu
        </a>
      </p>

      <hr className="my-3" />
      <h1 className="text-lg font-light">Misc.</h1>
      <p className="mt-2 text-sm text-gray-500">
        I've been a bilingual Japanese-native speaker for nearly my whole life.
      </p>
      <p className="text-sm text-gray-500">
        Beyond linguistics, I'm comfortable with using the following,
      </p>

      {/* Modularized Tech Stack :) */}
      <TechStack />
      <p className="mt-1 mb-3 text-sm text-gray-500">
        In addition, I have experience working with various Python libraries commonly used in data analytics and science. 
        My <a className="underline"href="/">sample work</a> will demonstrate my mastery in them.
      </p>

        <p className="mt-1 text-sm font-light text-gray-500 flex items-center gap-2">
            <FaFileDownload className="text-black" />
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-400 hover:text-blue-500 transition ease-in-out"
            >
            Download Resume
            </a>
        </p>

        <Link href="/">
            <button className="mt-6 text-sm cursor-pointer px-4 py-2 bg-yellow-600 text-white rounded-xl font-light hover:bg-yellow-700 transition-all duration-200 ease-in-out shadow-md hover:shadow-xl">
                Return Home
            </button>
        </Link>
    </div>
  );
} // AboutMe()
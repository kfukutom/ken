"use client";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";
import Image from "next/image";
import TechStack from "@/components/TechStack";

// hachi
import HACHI from "@/public/hachi.jpeg";
import HACHI2 from "@/public/hachi2.jpeg";

export default function About() {
  return (
    <div className="animate-fade-right bg-white animate-once animate-ease-linear px-4 sm:px-12 md:px-24 lg:px-36 xl:px-[424px] py-8">
      <h1 className="text-lg font-light">Hello there!</h1>
      <p className="text-xs text-yellow-600 italic">Currently in Tampa, Florida 🌴</p>

      <p className="mt-2 text-sm font-thin text-gray-500">
        I'm Ken Fukutomi and I'm originally from Southern California. I work with data and software, and I'm currently looking for opportunities in summer 2026, ideally working within an urban context.
      </p>

      <p className="mt-1 text-sm text-gray-700">
        My contact is as follows,{" "}
        <a
          className="underline hover:text-blue-400 transition"
          href="mailto:kfukutom@umich.edu"
        >
          kfukutom [at] umich [dot] edu
        </a>
      </p>

      <hr className="my-3 border-gray-200" />
      <h1 className="text-lg font-light">Technical</h1>

      <p className="mt-2 text-sm text-gray-500">
        I've been a bilingual Japanese-native speaker for nearly my whole life.
      </p>
      <p className="text-sm text-gray-500">
        Beyond linguistics, I'm comfortable with using the following:
      </p>

      <TechStack />

      <p className="mt-1 mb-3 text-sm text-gray-500">
        In addition, I have experience working with various Python libraries commonly used in data analytics and science.{" "}
        <a className="underline hover:text-blue-400 transition" href="/">
          Sample work
        </a>{" "}
        will demonstrate my mastery in them.
      </p>

      <p className="mt-1 text-sm font-light text-gray-600 flex items-center gap-2">
        <FaFileDownload className="text-black" />
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400 hover:text-blue-500 transition"
        >
          Download Resume
        </a>
      </p>
    
      <hr className="mt-4 mb-3 border-gray-200" />
      <h1 className="text-lg font-thin">Miscellaneous</h1>
      <div className="mt-3 flex flex-row gap-3">
        <Image
          className="rounded-2xl shadow-md"
          src={HACHI}
          alt="My dog, Hachi"
          width={100}
          height={100}
        />
        <Image
          className="rounded-2xl shadow-md"
          src={HACHI2}
          alt="My dog, Hachi #2"
          width={100}
          height={100}
        />
      </div>
      <p className="text-xs font-thin pt-1.5">*My dog, <a className="underline cursor-pointer" href="https://www.imdb.com/title/tt0093132/">Hachi</a> enjoying the warm spring breeze.</p>

      <Link href="/" className="block w-fit mt-4">
        <button className="text-sm px-4 py-2 cursor-pointer bg-yellow-600 text-white rounded-xl font-light hover:bg-yellow-700 transition duration-200 shadow-md hover:shadow-xl">
          Return Home
        </button>
      </Link>
    </div>
  );
} // About().tsx
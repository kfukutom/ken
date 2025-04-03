import Image from "next/image";

// Public Images:
import git from "@/public/github.png";
import link from "@/public/link.png";

// My Portfolio Home Page :)
const geo_route = "https://www.geoguessr.com/user/658d58f7715d05059ff28ab9";

export default function Home() {
  return (
    <div>
      {/* Name Container */}
      <div className="px-[450px] py-[50px]">
        <div className="flex items-center gap-4 pb-[20px]">
          {/* Temp Profile Icon */}
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
            <span>KF</span>
          </div>

          {/* Text Info */}
          <div>
            <p className="text-xl font-bold">Ken Fukutomi</p>
            <p className="text-gray-400">Engineering @ Kittelson</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 pb-[20px]">
          <p className="text-sm text-gray-600">
            Data Science, Mathematics @ <span className="text-yellow-500">UMich</span>
          </p>
          <p className="text-sm text-gray-600">
            In my freetime, I've been enjoying{" "}
            <a
              href={geo_route}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-500 underline"
            >
              GeoGuessr
            </a>{" "}
            📌
          </p>
        </div>

        {/* My Socials LOL */}
        <div className="flex gap-2 pb-[20px]">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer w-40 h-20 flex items-center justify-center bg-gray-100 rounded-lg hover:border hover:border-gray transition"
          >
            01
          </a>

          <a
            href="https://www.linkedin.com/in/kfukutom/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer w-40 h-20 flex items-center justify-center bg-gray-100 rounded-lg hover:border hover:border-gray transition"
          >
            <Image src={link} alt="LinkedIn Logo" width={40} height={40} />
          </a>

          <a
            href="https://github.com/kfukutom/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer w-40 h-20 flex items-center justify-center bg-gray-100 rounded-lg hover:border hover:border-gray transition"
          >
            <Image src={git} alt="GitHub Logo" width={32} height={32} />
          </a>

          <a
            href="https://www.instagram.com/kfukutom/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer w-40 h-20 flex items-center justify-center bg-gray-100 rounded-lg text-2xl hover:border hover:border-gray transition"
          >
            📸
          </a>
        </div>

        {/* Project Cards */}
        <div className="pt-[10px]">
          <p className="text-xl font-bold text-gray-700 mb-4">Projects</p>

          {/* First Row */}
          <div className="flex gap-2 mb-2">
            <div className="cursor-pointer w-83 h-40 flex items-center justify-center bg-gray-200 rounded-xl transition">
              Uber Data Engineering
            </div>
            <div className="cursor-pointer w-83 h-40 flex items-center justify-center bg-gray-200 rounded-xl transition">
              Sentiment Visualizer Platform
            </div>
          </div>

          {/* Second Row */}
          <div className="pt-2 flex gap-2">
            <div className="cursor-pointer w-83 h-40 flex items-center justify-center bg-gray-200 rounded-xl transition">
              Gradient Descent
            </div>
            <div className="cursor-pointer w-83 h-40 flex items-center justify-center bg-gray-200 rounded-xl transition">
              GeoGuessr Script
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="pt-[40px] pb-[20px]">
          <p className="text-xl font-bold text-gray-700 mb-4">Work</p>
        </div>
        <p className="pt-20 text-center text-xs text-gray-600">Built by Ken Fukutomi :)</p>
      </div>
    </div>
  );
} // Home(), Ken Fukutomi's Portfolio (2025)
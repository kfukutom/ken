import Image from "next/image";

// Public Images:
import git from "@/public/github.png";
import link from "@/public/link.png";
import me from "@/public/me.png";

// React Icons:
import IconName from "react-icons/io5";

// My Portfolio Home Page :)
const geo_route = "https://www.geoguessr.com/user/658d58f7715d05059ff28ab9";

export default function Home() {
  return (
    <div className="px-4 sm:px-12 md:px-24 lg:px-36 xl:px-[424px] py-12">
      {/* Name Container */}
      <div className="flex items-center gap-4 pb-6">
        {/* Temp Profile Icon */}
        <div className="w-13 h-13 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
          <Image
            src={me}
            alt="Ken."
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Info */}
        <div>
          <p className="text-xl font-light">Ken Fukutomi</p>
          <p className="text-gray-400">Engineering @ Kittelson & Associates</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="flex flex-col gap-2 pb-6">
        <p className="text-sm text-gray-600">
          Computer Science, Mathematics @ <span className="text-yellow-600">Michigan</span>
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
          & building digital experiences 📌
        </p>
        <p className="text-sm text-black-500">
          <span className="font-bold">Passion</span> for transportation, coding, and design.
        </p>
      </div>

      {/* My Socials LOL */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-6 justify-items-center">
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-40 h-15 flex items-center justify-center bg-gray-100 rounded-lg text-2xl hover:border-[2px] hover:border-black-500 transition"
        >
          👨‍🎓
        </a>

        <a
          href="https://www.linkedin.com/in/kfukutom/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-40 h-15 flex items-center justify-center bg-gray-100 rounded-lg hover:border-[2px] hover:border-black-500 transition"
        >
          <Image src={link} alt="LinkedIn Logo" width={40} height={40} />
        </a>

        <a
          href="https://github.com/kfukutom/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-40 h-15 flex items-center justify-center bg-gray-100 rounded-lg hover:border-[2px] hover:border-black-500 transition"
        >
          <Image src={git} alt="GitHub Logo" width={32} height={32} />
        </a>

        <a
          href="https://www.instagram.com/kfukutom/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-40 h-15 flex items-center justify-center bg-gray-100 rounded-lg text-2xl hover:border-[2px] hover:border-black-500 transition"
        >
          📸
        </a>
      </div>

      {/* Project Cards */}
      <p className="text-xl mt-2.5 font-light text-gray-700 mb-4">Projects</p>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Card 1 */}
        <div className="w-80 bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-md transition cursor-pointer">
          <div className="h-40 bg-gray-200 flex items-center justify-center text-black text-lg font-light">
            Uber Data Engineering
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2">
              <p className="font-bold text-gray-800">Uber Data Engineering</p>
            </div>
            <p className="text-sm text-gray-500">ETL pipelines, trip data, optimization</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-80 bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-md transition cursor-pointer">
          <div className="h-40 bg-gray-200 flex items-center justify-center text-black text-lg font-light">
            Sentiment Visualizer
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2">
              <p className="font-bold text-gray-800">Sentiment Visualizer</p>
            </div>
            <p className="text-sm text-gray-500">LLM + charts for public opinions</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-80 bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-md transition cursor-pointer">
          <div className="h-40 bg-gray-200 flex items-center justify-center text-black text-lg font-light">
            Gradient Descent
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2">
              <p className="font-bold text-gray-800">Gradient Descent</p>
            </div>
            <p className="text-sm text-gray-500">ML from scratch project</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-80 bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-md transition cursor-pointer">
          <div className="h-40 bg-gray-200 flex items-center justify-center text-black text-lg font-light">
            SQL Clone
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2">
              <p className="font-bold text-gray-800">GeoGuessr Script</p>
            </div>
            <p className="text-sm text-gray-500">Browser automation & scraping</p>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <p className="text-xl font-light text-gray-700 mt-10 mb-5">Work</p>
      <div className="pb-6 flex gap-2 flex-col">
        {/* Containers. */}
        <div className="bg-gray-100 w-full h-12 overflow-hidden rounded-xl px-4 flex items-center justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="text-sm font-bold">Kittelson & Associates</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-sm text-gray-600">Engineering</span>
          </div>
          <span className="text-sm text-gray-500">2025</span>
        </div>
        <div className="bg-gray-100 w-full h-12 overflow-hidden rounded-xl px-4 flex items-center justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="text-sm font-bold">University of Tokyo</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-sm text-gray-600">Data, Research</span>
          </div>
          <span className="text-sm text-gray-500">2024</span>
        </div>
        
      </div>
      
      <p className="pt-20 text-center text-xs text-gray-600">Built by Ken with Typescript/Tailwind</p>
      <p className="pt-1 text-center text-xs text-yellow-700">let's create art 🖤</p>
      {/* End of Code */}
    </div>
  );
} // Home(), Ken Fukutomi's Portfolio (2025)
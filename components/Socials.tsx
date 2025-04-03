import Image from "next/image";
import git from "@/public/github.png";
import fig from "@/public/figma.webp";
import link from "@/public/link.png";

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-6 justify-items-center">
      <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer w-40 h-15 flex items-center justify-center bg-gray-100 rounded-lg text-2xl hover:border-[2px] hover:border-black-500 transition"
      >
        <Image src={fig} alt="Design Portfolio" width={60} height={60} />
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
  );
} // Socials.tsx()
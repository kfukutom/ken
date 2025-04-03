import Image from "next/image";
import me from "@/public/me.png";

export default function Header() {
  return (
    <div className="flex items-center gap-4 pb-6">
      <div className="w-13 h-13 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
        <Image
          src={me}
          alt="Ken."
          width={48}
          height={48}
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <p className="text-xl font-thin">Ken Fukutomi</p>
        <p className="text-gray-400">Engineering @ Kittelson & Associates</p>
      </div>
    </div>
  );
} // Header.tsx()
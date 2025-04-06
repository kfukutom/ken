import Image from "next/image";
import page1 from "@/public/Page1.png";
import page2 from "@/public/page2.jpg";

export default function Home() {
    return (
        <div className="animate-fade-left bg-white animate-once animate-ease-linear px-4 sm:px-12 md:px-24 lg:px-36 xl:px-[350px] py-12">
            <h1 className="text-lg font-light">Digital Zine</h1>
            <p className="text-sm font-light text-gray-500 mt-1">
                Designed by: Ken Fukutomi and Kaylee Foster
            </p>
            <p className="text-sm font-light text-gray-500 mt-1">
                Tools: Figma, Illustrator, Excel
            </p>

            <div className="flex flex-row flex-wrap items-center gap-2 mt-2">
                <p className="text-sm font-light text-gray-800">Skills:</p>
                <div className="bg-black text-white rounded-full text-xs px-3 py-1">
                    Figma
                </div>
                <div className="bg-black text-white rounded-full text-xs px-3 py-1">
                    Affinity Diagramming
                </div>
                <div className="bg-black text-white rounded-full text-xs px-3 py-1">
                    Data Setting
                </div>
                <div className="bg-black text-white rounded-full text-xs px-3 py-1">
                    Process Coding
                </div>
            </div>

            <hr className="my-4" />

            <p className="text-sm font-light">
                As product managers navigating <span className="text-blue-600">urban systems</span>, we often overlook subtle user behaviors and unspoken needs. Through techniques like affinity diagramming and archetype analysis, we uncover hidden insights that drive more <span className="text-blue-600">user-centric</span> design decisions.
            </p>

            <h1 className="mt-5 text-lg font-bold">Front Cover</h1>
            <div className="flex flex-row gap-2">
                <Image
                    className="shadow-lg mt-3"
                    src={page1}
                    alt="Page 1"
                    width={300}
                    height={300}
                />
                <Image
                    className="shadow-lg mt-3"
                    src={page2}
                    alt="Page 2"
                    width={300}
                    height={300}
                />
            </div>
            <p className="mt-3 text-sm font-light">
                The magazine cover was designed to reflect the layered nature of <span className="text-blue-600">transportation systems</span> and the diverse archetypes of people who move through them - commuters, wanderers, workers - each with their own rhythm and purpose.
            </p>
            <h1 className="mt-5 text-lg font-bold">Affinity Diagram / Archetypes</h1>
        </div>
    );
}
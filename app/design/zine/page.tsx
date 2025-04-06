import Image from "next/image";
import page1 from "@/public/Page1.png";
import page2 from "@/public/page2.jpg";
import Link from "next/link";

export default function Home() {
    return (
        <div className="animate-fade-up animate-ease-in animate-normal animate-fill-forwards bg-white animate-once animate-ease-linear px-6 sm:px-12 md:px-24 lg:px-36 xl:px-[350px] py-16 space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold">Digital Zine</h1>
                <p className="text-sm text-gray-600">
                    Designed by: Ken Fukutomi
                </p>
                <p className="text-sm text-gray-600">
                    Tools: Figma, Illustrator, Excel
                </p>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-medium text-gray-800">Skills:</p>
                <div className="flex flex-wrap gap-2">
                    {["Figma", "Affinity Diagramming", "Data Setting", "Process Coding"].map((skill) => (
                        <span key={skill} className="bg-black text-white rounded-full text-xs px-3 py-1">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div className="space-y-4 text-sm font-light text-gray-800">
                <p>
                    When navigating <span className="text-blue-600">urban systems</span>, we often overlook subtle user behaviors and unspoken needs. Through techniques like affinity diagramming and archetype analysis, the main purpose of this project was to uncover hidden insights that drive more <span className="text-blue-600">user-centric</span> design decisions.
                    And more importantly, the purpose of collectivizing an insight was to present it in a eased manner, through procured design-choices.
                </p>
                <p className="text-xl text-black-400">...</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Front Cover + Design</h2>
                <div className="flex flex-wrap gap-4">
                    <Image
                        className="rounded-lg shadow-lg"
                        src={page1}
                        alt="Page 1"
                        width={300}
                        height={300}
                    />
                    <Image
                        className="rounded-lg shadow-lg"
                        src={page2}
                        alt="Page 2"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-sm font-light text-gray-700">
                    The magazine cover was designed to reflect the layered nature of <span className="text-blue-600">transportation systems</span> 
                    and the diverse archetypes of people who move through them — commuters, wanderers, and workers — each with their own unique systemic needs.
                    This project allowed Kaylee and I to develop a magazine mockup that enhanced our personal design techniques by integrating multiple 
                    methods from qualitative design research.
                </p>
            </div>

            <p className="text-xl text-black-400">...</p>
            <h2 className="text-lg font-semibold">Data-Driven and Affinity-Based Diagramming</h2>
            <div className="w-full border rounded shadow overflow-hidden">
                <iframe
                    src="/Zine.pdf"
                    title="Zine PDF"
                    className="w-full h-[600px]"
                ></iframe>
            </div>
            <p className="text-sm font-light text-gray-700">
                The magazine cover was designed to reflect the layered nature of <span className="text-blue-600">transportation systems</span> 
                and the diverse archetypes of people who move through them — commuters, wanderers, and workers — each with their own unique systemic needs.
                This project allowed Kaylee and I to develop a magazine mockup that enhanced our personal design techniques by integrating multiple 
                methods from qualitative design research.
            </p>

            <hr className="my-6 border-gray-300" />
            <p className="text-left text-xs text-gray-600">April 6th, 2025 by @kfukutom</p>
            <Link href="/" className="block w-fit mt-4">
                <button className="text-sm px-4 py-2 cursor-pointer bg-yellow-600 text-white rounded-xl font-light hover:bg-yellow-700 transition duration-200 shadow-md hover:shadow-xl">
                    Return Home
                </button>
            </Link>
        </div>
    );
}
import Link from "next/link";

export default function Home() {
  return (
    <div className="animate-fade-left animate-once animate-ease-linear bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 space-y-6 max-w-screen-md mx-auto">
      <p className="text-left text-xl text-yellow-600">design + beyond</p>

      <div className="space-y-2">
        <p className="font-medium">
          i. urban screens | <span className="text-sm text-gray-500">Figma, Illustrator, RAWGraphs</span>
        </p>
        <p className="font-thin text-gray-500">
          Deconstructing a tangible urban object to uncover the systems and modules that exist beyond its immediate context.
        </p>
        <a href="/design/urban-screens" className="text-blue-600 underline hover:text-blue-800 transition">
          view project
        </a>
      </div>

      <hr className="border-gray-200" />

      <div className="space-y-2">
        <p className="font-medium">
          ii. digital zine | <span className="text-sm text-gray-500">Figma, Miro</span>
        </p>
        <p className="text-gray-400 font-extralight text-xs">Partner: Kaylee</p>
        <p className="font-thin text-gray-500">
          Designed a digital magazine outlining various character archetypes of an observed environment.
        </p>
        <a href="/design/zine" className="text-blue-600 underline hover:text-blue-800 transition">
          view project
        </a>
      </div>

      <hr className="border-gray-200" />

      <div className="space-y-2">
        <p className="font-medium">
          iii. mobile app wireframe | <span className="text-sm text-gray-500">Figma, Sketch, UXPin</span>
        </p>
        <p className="text-gray-400 font-extralight text-xs">Partner: Georgia, Jessica</p>
        <p className="font-thin text-gray-500">
          I developed a wireframe for an ecommerce business.
        </p>
        <a href="/design/urban-screens" className="text-blue-600 underline hover:text-blue-800 transition">
          view project
        </a>
      </div>

      <hr className="border-gray-200" />

      <div className="space-y-2">
        <p className="font-medium">
          iv. think technologies | <span className="text-sm text-gray-500">LucidChart, Figma</span>
        </p>
        <p className="text-gray-400 font-extralight text-xs">Co-lead: Jonas</p>
        <p className="font-thin text-gray-500">
          Diagramming a backend architecture for an ambitious Detroit startup.
        </p>
        <a href="/design/urban-screens" className="text-blue-600 underline hover:text-blue-800 transition">
          view project
        </a>
      </div>

      <hr className="border-gray-200" />

      <Link href="/" className="block w-fit mt-4">
        <button className="text-sm px-4 py-2 cursor-pointer bg-yellow-600 text-white rounded-xl font-light hover:bg-yellow-700 transition duration-200 shadow-md hover:shadow-xl">
          Return Home
        </button>
      </Link>
    </div>
  );
} // Home().tsx
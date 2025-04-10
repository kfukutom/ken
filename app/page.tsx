import Header from "@/components/Header";
import Bio from "@/components/Bio";
import SocialLinks from "@/components/Socials";
import ProjectList from "@/components/Projects";
import ExperienceList from "@/components/Experience";

export default function Home() {
  return (
    <div className="animate-fade-up animate-once animate-ease-linear bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 max-w-screen-md mx-auto">
      <Header />
      <Bio />
      <SocialLinks />
      <ProjectList />
      <ExperienceList />
      <a className="underline text-sm cursor-pointer text-blue-600 hover:text-blue-500" href="/about">
        More about me.
      </a>
      <p className="pt-20 text-center text-xs text-gray-600">Built by Ken with Typescript/Tailwind</p>
      <p className="pt-1 text-center text-xs text-yellow-600">let's create art 🖤</p>
    </div>
  );
}
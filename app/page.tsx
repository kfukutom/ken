import Header from "@/components/Header";
import Bio from "@/components/Bio";
import SocialLinks from "@/components/Socials";
import ProjectList from "@/components/Projects";
import ExperienceList from "@/components/Experience";

export default function Home() {
  return (
    <div className="animate-fade-up animate-once animate-ease-linear px-4 sm:px-12 md:px-24 lg:px-36 xl:px-[424px] py-12">
      <Header />
      <Bio />
      <SocialLinks />
      <ProjectList />
      <ExperienceList />
      <a className="underline text-sm cursor-pointer text-blue-600 hover:text-blue-500" href="/about">More about me.</a>
      <p className="pt-20 text-center text-xs text-gray-600">Built by myself with Typescript/Tailwind</p>
      <p className="pt-1 text-center text-xs text-yellow-700">let's create art 🖤</p>
    </div>
  );
} // Index or Page.tsx()
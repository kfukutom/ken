import kittelson from "@/Icons/kittelson.png";
import todai from "@/Icons/utokyo.png";
import Image from "next/image";

const experiences = [
  {
    company: "Kittelson & Associates",
    role: "Engineering Intern",
    year: "2025",
    logo: kittelson,
  },
  {
    company: "University of Tokyo",
    role: "Data, Research",
    year: "2024",
    logo: todai,
  },
];

export default function ExperienceList() {
  return (
    <>
      <p className="text-xl font-light text-gray-700 mt-10 mb-5">Experience</p>
      <div className="pb-6 flex flex-col gap-2">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-100 w-full h-12 rounded-xl px-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={32}
                  height={32}
                  style={{ objectFit: "contain" }}
                  className="hidden sm:block rounded-md"
                />
              ) : (
                <div className="hidden sm:block w-8 h-8 bg-gray-200 rounded-md" />
              )}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-sm font-bold">{exp.company}</span>
                <span className="hidden sm:inline">|</span>
                <span className="text-sm font-thin text-gray-600">{exp.role}</span>
              </div>
            </div>
            <span className="text-sm text-gray-500">{exp.year}</span>
          </div>
        ))}
      </div>
    </>
  );
} // Experiences
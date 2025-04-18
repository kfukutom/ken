import Image from "next/image";

// Project images
import p1 from "@/public/projects/uber.gif";
import p2 from "@/public/projects/p2.png";
import p3 from "@/public/projects/p3.png";
import p4 from "@/public/Proj.jpeg";
import arima from "@/public/projects/arima.png";

const projects = [
  {
    title: "Uber Statistical Model",
    description: "Dynamic Pricing w/ ML (Python, SQL)",
    image: p1,
  },
  {
    title: "Sentiment Visualizer",
    description: "Event Social, Visualizer (Fullstack)",
    image: p2,
  },
  {
    title: "Gradient Descent",
    description: "ML from scratch project",
    image: p4,
  },
  {
    title: "SQL Clone",
    description: "Hackable SQL Clone (C/C++)",
    image: p3,
    link: "https://github.com/kfukutom/cql"
  },
  {
    title: "Debunking Predictive Policing",
    description: "A constructive anti-hypothesis",
    image: arima,
    link: "https://github.com/kfukutom/cql"
  }
];

export default function ProjectList() {
  return (
    <>
      <p className="text-xl mt-2.5 font-light text-gray-700 mb-4">CS Projects</p>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-80 bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-md transition cursor-pointer"
          >

            <div className="h-40 relative">
              {project.image?.src.endsWith(".gif") ? (
                <img
                  src={project.image.src}
                  alt={`Preview of ${project.title}`}
                  className="object-cover w-full h-full"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>

            <div className="p-4">
              <p className="font-bold text-gray-800">{project.title}</p>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
} // Projects().tsx
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { ProjectCardProps, projects } from "@/utils/constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col py-5 md:py-10 scroll-mt-10"
      data-section
    >
      <h1 className="text-4xl font-bold text-center mb-3">My Projects</h1>
      <div className="flex flex-1 flex-wrap justify-center items-stretch gap-3 ">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </section>
  );
};
export default Projects;

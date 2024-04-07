import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { ProjectCardProps } from "@/utils/constants";

const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      id: "ladwitra-2024",
      title: "La Dwitra 2024",
      desc: (
        <div>
          <span>
            The website is designed to facilitate participant registration for
            silat championsip and jaipong competition of La Dwitra 2024, an
            event organized by{" "}
            <Link
              href={"https://smplabsupicibiru.com/"}
              className="text-blue-500"
              target="_blank"
            >
              SMP Labschool UPI Cibiru.
            </Link>{" "}
          </span>
          <span>
            I think this website is way more better than my last 2 similiar
            projects, i learned a lot of new things in the depelopment process.
            It was created in about two week, but I still maintain this website
            until the event is over.
          </span>
        </div>
      ),
      techStack: ["next", "firebase", "tailwind"],
      visitUrl: "https://ladwitra.vercel.app/",
      repoUrl: "https://github.com/irfansud2nd/ladwitra-2024",
      commercial: true,
    },
    {
      id: "asbd-2023",
      title: "Kejurnas ASBD 2023",
      desc: (
        <div>
          <span>
            The website is designed to facilitate participant registration for
            the Kejuaraan Nasional{" "}
            <Link
              href={"https://silatalazhar.com/"}
              className="text-blue-500"
              target="_blank"
            >
              ASBD
            </Link>{" "}
            2023.
          </span>
          <br />
          <span>495 Users</span>
          <br />
          <span>12 Admins</span>
          <br />
          <span>Accommodating 2312 data consisting of:</span>
          <ul className="list-inside list-disc">
            <li>157 Kontingens</li>
            <li>1772 Athletes</li>
            <li>433 Officials</li>
          </ul>
          <span>
            This website was only given one week to be created, but its better
            than the PORTUE one.
          </span>
        </div>
      ),
      techStack: ["next", "firebase", "tailwind"],
      visitUrl: "https://kejurnas-asbd-2023.vercel.app/",
      repoUrl: "https://github.com/irfansud2nd/kejurnas-asbd-2023",
      commercial: true,
    },
    {
      id: "portue-2023",
      title: "PORTUE 2023",
      desc: (
        <div>
          <span>
            PORTUE 2023 is a website designed to facilitate participant
            registration for the{" "}
            <Link
              href={"https://portue.koni-kotabandung.or.id/"}
              className="text-blue-500"
              target="_blank"
            >
              PORTUE Silat Bandung Championship 2023.{" "}
            </Link>
          </span>
          <br />
          <span>180 Users</span>
          <br />
          <span>5 Admins</span>
          <br />
          <span>Accommodating 1776 data consisting of:</span>
          <ul className="list-inside list-disc">
            <li>101 Kontingens</li>
            <li>1511 Athletes</li>
            <li>164 Officials</li>
          </ul>
          <span>
            I acknowledge that this website is far from perfect, due to the very
            limited development time of just one week.
          </span>
        </div>
      ),

      techStack: ["next", "firebase", "tailwind"],
      visitUrl: "https://portue-silat-championship.vercel.app",
      repoUrl: "https://github.com/irfansud2nd/portue-championship",
      commercial: true,
    },
    {
      id: "custom-kit",
      title: "Custom Kit",
      desc: (
        <span>
          Custom Kit is an innovation that provides a retro or customized
          appearance for your motorcycle without the need to modify its chassis.
          This way, you can easily restore your motorcycle to its original form.
          The design is inspired by{" "}
          <Link
            href="https://eat-curious.com"
            className="text-blue-500"
            target="_blank"
          >
            eat-curious.com
          </Link>
          , and the image assets are from{" "}
          <Link
            href="https://instagram.com/custom.kit"
            target="_blank"
            className="text-blue-500"
          >
            Custom Kit by Katros
          </Link>
          .
        </span>
      ),
      techStack: ["react", "tailwind"],
      visitUrl: "https://irfansud2nd.github.io/custom-kit",
      repoUrl: "https://github.com/irfansud2nd/custom-kit",
    },
    {
      id: "sud-gym",
      title: "Sud Gym",
      desc: (
        <span>
          Sudgym is a website that provides information about body exercises
          based on muscle targets or equipment. I followed a tutorial from{" "}
          <Link
            href="https://www.youtube.com/@javascriptmastery"
            target="_blank"
            className="text-blue-500"
          >
            Javascript Mastery
          </Link>
          , but I used a different tech stack, which is Typescript and Tailwind.
        </span>
      ),
      techStack: ["react", "tailwind", "api"],
      visitUrl: "https://sudgym.netlify.app/",
      repoUrl: "https://github.com/irfansud2nd/sudgym",
    },
    // {
    // id:'sud-garage',
    //   title: "Sud Garage",
    //   desc: "Sudgarage is a simple landing page with the most basic tech stack that showcases the services offered.",
    //   techStack: ["html", "css", "js"],
    //   visitUrl: "https://irfansud2nd.github.io/sud-garage",
    //   repoUrl: "https://github.com/irfansud2nd/sud-garage",
    // },
    // {
    // id:'4-numbers',
    //   title: "Guess 4 numbers",
    //   desc: "Guess 4 Numbers is a game I created when I first started learning JavaScript. It may not be a flashy project, but it holds sentimental value for me , it is also the first page that I have deployed. The essence of the game is to guess 4 numbers, and the clues provided include correct numbers and their positions.",
    //   techStack: ["html", "css", "js"],
    //   visitUrl: "https://irfansud2nd.github.io/guess-the-4-numbers/",
    //   repoUrl: "https://github.com/irfansud2nd/guess-the-4-numbers",
    // },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col py-5 md:py-10 scroll-mt-10"
      data-section
    >
      <h1 className="text-4xl font-bold text-center mb-3">My Projects</h1>
      <div className="flex flex-1 flex-wrap justify-center items-center gap-3 ">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </section>
  );
};
export default Projects;

import Link from "next/link";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col py-5 md:py-10 scroll-mt-10"
      data-section
    >
      <h1 className="text-4xl font-bold text-center mb-3">My Projects</h1>
      <div className="flex flex-1 flex-wrap justify-center items-center gap-3 ">
        <ProjectCard
          heading="Kejurnas ASBD 2023"
          desc={
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
              2023. It has been used by around 1300 people. This is my second
              paid website. This website was only given one week to be created,
              but its better than the PORTUE one.
            </span>
          }
          webm="/previews/asbd-preview.webm"
          mp4="/previews/asbd-preview.mp4"
          techStack={["next", "firebase", "tailwind"]}
          visitUrl="https://kejurnas-asbd-2023.vercel.app/"
          repoUrl="https://github.com/irfansud2nd/kejurnas-asbd-2023"
        />
        <ProjectCard
          heading="PORTUE 2023"
          desc={
            <span>
              PORTUE 2023 is a website designed to facilitate participant
              registration for the{" "}
              <Link
                href={"https://portue.koni-kotabandung.or.id/"}
                className="text-blue-500"
                target="_blank"
              >
                PORTUE Silat Bandung Championship 2023
              </Link>
              . It has been used by around 1700 people. This is my first paid
              website. I acknowledge that this website is far from perfect, due
              to the very limited development time of just one week.
            </span>
          }
          webm="/previews/portue-preview.webm"
          mp4="/previews/portue-preview.mp4"
          techStack={["next", "firebase", "tailwind"]}
          visitUrl="https://portue-silat-championship.vercel.app"
          repoUrl="https://github.com/irfansud2nd/portue-championship"
        />
        <ProjectCard
          heading="Custom Kit"
          desc={
            <span>
              Custom Kit is an innovation that provides a retro or customized
              appearance for your motorcycle without the need to modify its
              chassis. This way, you can easily restore your motorcycle to its
              original form. The design is inspired by{" "}
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
          }
          webm="/previews/custom-kit-preview.webm"
          mp4="/previews/custom-kit-preview.mp4"
          techStack={["react", "tailwind"]}
          visitUrl="https://irfansud2nd.github.io/custom-kit"
          repoUrl="https://github.com/irfansud2nd/custom-kit"
        />
        <ProjectCard
          heading="Sud Gym"
          desc={
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
              , but I used a different tech stack, which is Typescript and
              Tailwind.
            </span>
          }
          webm="/previews/sud-gym-preview.webm"
          mp4="/previews/sud-gym-preview.mp4"
          techStack={["react", "tailwind", "api"]}
          visitUrl="https://sudgym.netlify.app/"
          repoUrl="https://github.com/irfansud2nd/sudgym"
        />
        <ProjectCard
          heading="Sud Garage"
          desc="Sudgarage is a simple landing page with the most basic tech stack that showcases the services offered."
          webm="/previews/sud-garage-preview.webm"
          mp4="/previews/sud-garage-preview.mp4"
          techStack={["html", "css", "js"]}
          visitUrl="https://irfansud2nd.github.io/sud-garage"
          repoUrl="https://github.com/irfansud2nd/sud-garage"
        />
        <ProjectCard
          heading="Guess 4 numbers"
          desc="Guess 4 Numbers is a game I created when I first started learning JavaScript. It may not be a flashy project, but it holds sentimental value for me , it is also the first page that I have deployed. The essence of the game is to guess 4 numbers, and the clues provided include correct numbers and their positions."
          webm="/previews/4-numbers-preview.webm"
          mp4="/previews/4-numbers-preview.mp4"
          techStack={["html", "css", "js"]}
          visitUrl="https://irfansud2nd.github.io/guess-the-4-numbers/"
          repoUrl="https://github.com/irfansud2nd/guess-the-4-numbers"
        />
      </div>
    </section>
  );
};
export default Projects;

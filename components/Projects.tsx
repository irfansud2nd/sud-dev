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
          heading="Custom Kit"
          desc={
            <span>
              Custom Kit is an innovation that provides a retro or customized
              appearance for your motorcycle without the need to modify its
              chassis. This way, you can easily restore your motorcycle to its
              original form. The design is inspired by{" "}
              <a href="https://eat-curious.com" className="text-blue-500">
                eat-curious.com
              </a>
              , and the image assets are from{" "}
              <a
                href="https://instagram.com/custom.kit"
                className="text-blue-500"
              >
                Custom Kit by Katros
              </a>
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
              <a
                href="https://www.youtube.com/@javascriptmastery"
                className="text-blue-500"
              >
                Javascript Mastery
              </a>
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

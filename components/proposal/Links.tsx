import { projects } from "@/utils/constants";
import { Button } from "../ui/button";
import { toast } from "sonner";

const Links = () => {
  const linkButtons = [
    {
      label: "Github",
      link: "https://github.com/irfansud2nd",
    },
    {
      label: "Personal Website",
      link: "https://sud-dev.vercel.app",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/irfansudp",
    },
  ];
  return (
    <div className="p-2 border-2 mt-2">
      <h1 className="text-xl font-semibold border-b">Link</h1>
      <h2 className="text-lg font-medium">Profile</h2>
      <div
        className="
      flex gap-3"
      >
        {linkButtons.map((button) => (
          <Button
            onClick={() =>
              navigator.clipboard
                .writeText(button.link)
                .then(() => toast.success("Copied"))
            }
          >
            {button.label}
          </Button>
        ))}
      </div>
      <h2 className="text-lg font-medium">Projects</h2>
      <div
        className="
      flex gap-2 flex-wrap"
      >
        {projects.map((project) => (
          <div className="border-2 rounded flex flex-col gap-1 p-1 items-center">
            <p className="mb-1 font-medium border-b border-black whitespace-nowrap">
              {project.title}
            </p>
            <Button
              onClick={() =>
                navigator.clipboard
                  .writeText(project.visitUrl)
                  .then(() => toast.success("Copied"))
              }
              className="w-full"
            >
              Live Web
            </Button>
            <Button
              onClick={() =>
                navigator.clipboard
                  .writeText(project.repoUrl)
                  .then(() => toast.success("Copied"))
              }
              className="w-full"
            >
              Repo
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Links;

import Link from "next/link";

import { ProjectCardProps } from "@/utils/constants";
import TechIcon from "../home/TechIcon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import ProjectBadge from "./ProjectBadge";

const ProjectCard = ({
  id,
  title,
  desc,
  techStack,
  visitUrl,
  repoUrl,
  commercial,
}: ProjectCardProps) => {
  return (
    <Card className="bg-secondary h-[720px] w-[310px] grid grid-rows-[auto_1fr_auto] relative">
      <ProjectBadge
        type={commercial ? "commercial" : "personal"}
        className="absolute right-2 top-2"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Dialog>
          <DialogTrigger className="w-[260px] h-[130px]">
            <Image
              src={`/images/${id}.png`}
              alt={`${title}'s thumbnail`}
              width={260}
              height={130}
            />
          </DialogTrigger>
          <DialogContent className="w-[90vw] max-w-[90vw]">
            <video autoPlay loop muted playsInline className="w-full">
              <source src={`/previews/${id}.webm`} className="w-full" />
              <source src={`/previews/${id}.mp4`} className="w-full" />
            </video>
          </DialogContent>
        </Dialog>
        <div className="flex-1 text-justify mt-2">{desc}</div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-2 justify-center items-center w-full">
          <Link
            href={repoUrl + "#readme"}
            target="_blank"
            className="text-blue-500"
          >
            Full description on github
          </Link>
          <div className="flex gap-1 flex-wrap text-2xl">
            {techStack.map((name) => (
              <TechIcon tech={name} key={name} />
            ))}
          </div>
          <div className="flex gap-1 items-center justify-center">
            <Button size="sm">
              <Link href={visitUrl} target="_blank">
                Visit
              </Link>
            </Button>
            <Button size="sm" variant={"outline"}>
              <Link href={repoUrl} target="_blank">
                Repo
              </Link>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
export default ProjectCard;

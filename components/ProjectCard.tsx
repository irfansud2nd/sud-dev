import Link from "next/link";

import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";

type ProjectCardProps = {
  heading: string;
  desc: string | JSX.Element;
  webm: string;
  mp4: string;
  techStack: (
    | "html"
    | "css"
    | "js"
    | "react"
    | "tailwind"
    | "next"
    | "api"
    | "firebase"
  )[];
  visitUrl: string;
  repoUrl: string;
};

const ProjectCard = ({
  heading,
  desc,
  webm,
  mp4,
  techStack,
  visitUrl,
  repoUrl,
}: ProjectCardProps) => {
  const techIcons = [
    {
      name: "html",
      icon: <AiFillHtml5 className="text-orange-600" />,
    },
    {
      name: "css",
      icon: <BiLogoCss3 className="text-blue-700" />,
    },
    {
      name: "js",
      icon: <BiLogoJavascript className="text-yellow-500" />,
    },
    {
      name: "react",
      icon: <BiLogoReact className="text-blue-500" />,
    },
    {
      name: "tailwind",
      icon: <BiLogoTailwindCss className="text-blue-500" />,
    },
    {
      name: "next",
      icon: <SiNextdotjs className="text-black" />,
    },
    {
      name: "api",
      icon: <TbApi className="text-black" />,
    },
    {
      name: "firebase",
      icon: <IoLogoFirebase className="text-yellow-400" />,
    },
  ];

  const getIconByName = (name: string) => {
    const techIcon = techIcons.find((item) => item.name === name);
    return techIcon ? techIcon.icon : null;
  };

  return (
    <div className="w-[310px] h-[510px] bg-gray-50 border-2 border-gray-400 rounded-md shadow-xl flex flex-col gap-2 items-center px-2 py-3">
      <h1 className="whitespace-nowrap font-extrabold text-3xl border-b-2 border-b-slate-500 text-center">
        {heading}
      </h1>
      <video autoPlay loop muted playsInline>
        <source src={webm} />
        <source src={mp4} />
      </video>
      <p className="flex-1 text-justify">{desc}</p>
      <Link
        href={repoUrl + "#readme"}
        target="_blank"
        className="text-blue-500"
      >
        Full description on github
      </Link>
      <div className="flex gap-1 flex-wrap text-2xl">
        {techStack.map((name) => getIconByName(name))}
      </div>
      <div className="flex gap-1 flex-wrap font-semibold text-sm">
        <Link
          href={visitUrl}
          target="_blank"
          className="bg-blue-500 px-2 py-0.5 rounded-full text-gray-100"
        >
          Visit
        </Link>
        <Link
          href={repoUrl}
          target="_blank"
          className="bg-gray-600 px-2 py-0.5 rounded-full text-gray-100"
        >
          Repo
        </Link>
      </div>
    </div>
  );
};
export default ProjectCard;

import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { TbApi } from "react-icons/tb";
import { TechNames } from "@/utils/constants";

const TechIcon = ({
  tech,
  className,
}: {
  tech: TechNames;
  className?: string;
}) => {
  const techs: { name: TechNames; tooltip: string; element: JSX.Element }[] = [
    {
      name: "html",
      tooltip: "HTML",
      element: <AiFillHtml5 className={`${className} text-orange-600`} />,
    },
    {
      name: "css",
      tooltip: "CSS",
      element: <BiLogoCss3 className={`${className} text-blue-700`} />,
    },
    {
      name: "js",
      tooltip: "Javascript",
      element: <BiLogoJavascript className={`${className} text-yellow-500`} />,
    },
    {
      name: "react",
      tooltip: "React JS",
      element: <BiLogoReact className={`${className} text-blue-500`} />,
    },
    {
      name: "next",
      tooltip: "Next JS",
      element: <SiNextdotjs className={className} />,
    },
    {
      name: "tailwind",
      tooltip: "Tailwind CSS",
      element: <BiLogoTailwindCss className={`${className} text-blue-500`} />,
    },
    {
      name: "firebase",
      tooltip: "Firebase",
      element: <IoLogoFirebase className={`${className} text-yellow-400`} />,
    },
    {
      name: "api",
      tooltip: "API",
      element: <TbApi className={className} />,
    },
  ];

  const exceptions = ["api"];

  if (tech == "all") {
    const techNames = techs
      .map((item) => item.name)
      .filter((item) => !exceptions.includes(item));
    return (
      <>
        {techNames.map((name) => (
          <TechIcon tech={name} className={className} key={name} />
        ))}
      </>
    );
  }

  const selectedTech = techs.find((item) => item.name == tech);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{selectedTech?.element}</TooltipTrigger>
        <TooltipContent>
          <p>{selectedTech?.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default TechIcon;

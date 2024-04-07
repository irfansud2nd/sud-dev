import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";
import TechIcon from "./TechIcon";

const TechStack = () => {
  return (
    <div className="max-w-[95vw] md:max-w-full mx-auto md:mx-0 overflow-hidden">
      <h2 className="font-semibold text-xl">Tech Stack</h2>
      <div className="w-[200%]">
        <div className="flex justify-around text-4xl pt-2 border-t-2 border-t-gray-800 animate-runningImage">
          <TechIcon tech="all" />
          <TechIcon tech="all" />
        </div>
      </div>
    </div>
  );
};
export default TechStack;

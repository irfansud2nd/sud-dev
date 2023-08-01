import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { SiCodepen } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white w-full py-2">
      <div className="flex justify-center items-center gap-2 flex-wrap sm:gap-5 font-medium">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold ">Check me on</h4>
          <Link target="_blank" href="https://www.linkedin.com/in/irfansud">
            <AiFillLinkedin className="inline-block mr-1 mb-1" />
            LinkedIn
          </Link>
          <Link target="_blank" href="https://github.com/irfansud2nd">
            <AiFillGithub className="inline-block mr-1 mb-1" />
            Github
          </Link>
          <Link target="_blank" href="https://codepen.io/irfansud2nd">
            <SiCodepen className="inline-block mr-1 mb-1" />
            Codepen
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            target="_blank"
            href="mailto:irfansudiningrat@gmail.com"
            className="text-lg font-semibold"
          >
            <MdOutlineMailOutline className="inline-block mr-2 text-gray-600 bg-white rounded-full p-1 text-2xl" />
            irfansudiningrat@gmail.com
          </Link>
          <Link
            target="_blank"
            href="https://github.com/irfansud2nd/sud-dev"
            className="text-lg font-semibold"
          >
            <BiLinkExternal className="inline-block mr-2 text-gray-600 bg-white rounded-full p-1 text-2xl" />
            Repo of this website
          </Link>
          <Link
            target="_blank"
            href="https://irfansud2nd.github.io/"
            className="text-lg font-semibold"
          >
            <BiLinkExternal className="inline-block mr-2 text-gray-600 bg-white rounded-full p-1 text-2xl" />
            My older personal website
          </Link>
        </div>
      </div>
      <p className="font-medium mt-2 text-center">&copy; 2023 sud.dev</p>
    </div>
  );
};
export default Footer;

import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { SiCodepen } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiGitRepositoryLine } from "react-icons/ri";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-secondary w-full py-2">
      <Container>
        <div className="grid grid-cols-8 place-items-center gap-2 font-medium px-2">
          <div className="col-span-5 lg:col-span-6 lg:w-full">
            <div className="flex max-lg:flex-col gap-y-4 justify-around whitespace-nowrap ">
              <Link
                target="_blank"
                href="mailto:irfansudiningrat@gmail.com"
                className="text-base sm:text-lg font-semibold"
              >
                <MdOutlineMailOutline className="inline-block mr-2 text-gray-600 bg-white rounded-full p-1 text-lg sm:text-2xl" />
                irfansudiningrat@gmail.com
              </Link>
              <Link
                target="_blank"
                href="https://github.com/irfansud2nd/sud-dev"
                className="text-base sm:text-lg font-semibold"
              >
                <RiGitRepositoryLine className="inline-block mr-2 text-gray-600 bg-white rounded-full p-1 text-lg sm:text-2xl" />
                Repo of this website
              </Link>
              <Link
                target="_blank"
                href="https://irfansud2nd.github.io/"
                className="text-base sm:text-lg font-semibold"
              >
                <BiLinkExternal className="inline-block mr-2 text-gray-600 bg-white rounded-full p-1 text-lg sm:text-2xl" />
                My older personal website
              </Link>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <h4 className="text-lgfont-semibold">Check me on</h4>
            <div className="flex max-lg:flex-col gap-2 whitespace-nowrap">
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
          </div>
        </div>
        <p className="font-medium mt-2 text-center">&copy; 2023 sud.dev</p>
      </Container>
    </footer>
  );
};
export default Footer;

import { NavbarProps } from "@/utils/constants";
import Link from "next/link";

const Links = ({ activeSection }: NavbarProps) => {
  return (
    <div className="flex items-baseline gap-2 ">
      <Link
        href="/#home"
        className={`${
          activeSection === "home" ? "border-b-black" : "border-b-white "
        } border-b-4  hover:border-b-gray-300 transition-all duration-75`}
      >
        Home
      </Link>
      <Link
        href="/#about"
        className={`${
          activeSection === "about" ? "border-b-black" : "border-b-white "
        } border-b-4  hover:border-b-gray-300 transition-all duration-75`}
      >
        About
      </Link>
      <Link
        href="/#projects"
        className={`${
          activeSection === "projects" ? "border-b-black" : "border-b-white "
        } border-b-4  hover:border-b-gray-300 transition-all duration-75`}
      >
        Projects
      </Link>
      <Link
        href="/#contact"
        className="bg-gray-500 px-2 py-1 rounded-full text-white"
      >
        Hire me!
      </Link>
    </div>
  );
};
export default Links;
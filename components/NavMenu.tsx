import Link from "next/link";
import { Dispatch } from "react";
import { BiMenu } from "react-icons/bi";

type NavMenuProps = {
  showMenu: boolean;
  setShowMenu: Dispatch<React.SetStateAction<boolean>>;
};

const NavMenu = ({ showMenu, setShowMenu }: NavMenuProps) => {
  return (
    <div className="md:hidden">
      <BiMenu
        className="text-2xl cursor-pointer"
        onClick={() => setShowMenu((prev) => !prev)}
      />
      <div
        className={`${showMenu ? "block" : "hidden"}
        absolute bg-opacity-40 right-2 sm:right-10 w-full h-screen`}
        onClick={(e) => setShowMenu(false)}
      >
        <div
          className={`${showMenu ? "absolute" : "hidden"} 
          top-0 right-0 h-[150px] w-[200px] max-h-screen max-w-screen-sm bg-gray-300 rounded-md`}
        >
          <div className="flex flex-col w-full h-full items-center justify-around text-lg font-sm">
            <Link
              href="#home"
              className="bg-gray-100 border-y border-t-2 border-x-2 border-black w-full h-full flex justify-center items-center hover:-translate-x-2 hover:-translate-y-2 rounded-t-md hover:border-y-2 transition-all"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="bg-gray-100 border-y border-x-2 border-black w-full h-full flex justify-center items-center hover:-translate-x-2 hover:-translate-y-2 hover:border-y-2 transition-all"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="bg-gray-100 border-y border-x-2 border-black w-full h-full flex justify-center items-center hover:-translate-x-2 hover:-translate-y-2 hover:border-y-2 transition-all"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="bg-gray-100 border-y border-b-2 border-x-2 border-black w-full h-full flex justify-center items-center hover:-translate-x-2 hover:-translate-y-2 hover:border-y-2 transition-all text-lg rounded-b-md"
            >
              Hire me!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavMenu;

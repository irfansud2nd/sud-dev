import { NavbarProps } from "@/utils/constants";
import Links from "./Links";

const Navbar = ({ activeSection }: NavbarProps) => {
  return (
    <nav className="fixed top-0 w-full flex justify-between py-1 sm:py-4 px-2 sm:px-10 font-semibold text-lg">
      <h1>sud.dev</h1>
      <Links activeSection={activeSection} />
    </nav>
  );
};
export default Navbar;
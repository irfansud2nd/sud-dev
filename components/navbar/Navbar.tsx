import Container from "../Container";
import Links from "./Links";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-0 w-full bg-inherit">
      <Container className="flex gap-2 py-1 sm:py-4 px-2 sm:px-10 font-semibold text-lg items-center">
        <h1 className="text-xl font-bold mr-auto">sud.dev</h1>
        <Links />
        <ThemeSwitcher />
      </Container>
    </nav>
  );
};
export default Navbar;

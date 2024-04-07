import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const MobileMenu = () => {
  const links = ["home", "about", "projects", "contact"];

  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <BiMenu className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.map((link) => (
            <DropdownMenuItem key={link} asChild>
              <Link href={`#${link}`} className="capitalize">
                {link}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default MobileMenu;

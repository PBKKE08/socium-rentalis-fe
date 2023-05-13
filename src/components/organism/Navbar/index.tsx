import { useEffect, useState } from "react";
import NavIcon from "./NavIcon";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import Button from "@/components/atoms/Button";

type NavbarProps = {
  name: string;
};

export default function Navbar({ name }: NavbarProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setIsNavOpen(false);
  }, []);

  const handleNavIconClick = () => {
    const nav = document.querySelector("nav");
    const ul = document.querySelector("ul");
    if (nav && ul) {
      nav.classList.toggle("border-b-0");
      ul.classList.toggle("border-b");
      ul.classList.toggle("border-b-primary-100");
      ul.classList.toggle("opacity-0");
      ul.classList.toggle("z-[-1]");
      ul.classList.toggle("top-[80px]");

      setIsNavOpen(!isNavOpen);
    }
  };

  return (
    <nav className="p-4 md:flex md:flex-row md:justify-between md:items-center sm:container mx-auto border-b border-b-primary-100 gap-5 md:gap-0">
      <div className="flex items-center justify-between">
        <NavLogo />
        <NavIcon onClick={handleNavIconClick} isOpen={isNavOpen} />
      </div>
      <ul className="flex flex-col md:flex-row items-center gap-1 md:gap-4 justify-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto px-4 md:px-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300 pb-4 md:pb-0">
        <NavLink name="Home" isActive={name === "home" && true} href="/" />
        <NavLink
          name="Partners"
          isActive={name === "partners" && true}
          href="/partners"
        />
        <li>
          <Button href="/login">Login</Button>
        </li>
      </ul>
    </nav>
  );
}

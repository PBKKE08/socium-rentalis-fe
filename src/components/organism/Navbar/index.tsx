import Image from "next/image";
import NavLink from "./NavLink";

type NavbarProps = {
  name: string;
};

export default function Navbar({ name }: NavbarProps) {
  return (
    <nav className="p-4 flex justify-between items-center sm:container mx-auto border-b border-b-primary-100">
      <div className="flex items-center justify-center">
        <Image
          src="/images/logo-sm.svg"
          alt="Socium Rentalis"
          width={50}
          height={50}
          priority
          quality={100}
        />
        <p className="text-sm font-medium">
          <span className="text-primary-200">Soc</span>ium <br />{" "}
          <span className="text-primary-200">Ren</span>talis
        </p>
      </div>
      <ul className="flex items-center gap-4">
        <NavLink name="Home" isActive={name === "home" && true} href="/" />
        <NavLink
          name="Partners"
          isActive={name === "partners" && true}
          href="/partners"
        />
      </ul>
    </nav>
  );
}

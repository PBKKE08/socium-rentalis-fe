import Link from "next/link";

type NavLinkProps = {
  name: string;
  isActive?: boolean;
  href: string;
};

export default function NavLink({ href, name, isActive }: NavLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className={`text-heading ${isActive && "font-medium text-primary-300"}`}
      >
        {name}
      </Link>
    </li>
  );
}

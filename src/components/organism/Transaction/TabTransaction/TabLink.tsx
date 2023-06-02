import Link from "next/link";

type TabLinkProps = {
  name: string;
  isActive?: boolean;
  href: string;
};

export default function TabLink({ href, name, isActive }: TabLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className={`text-heading ${
          isActive &&
          "font-medium text-primary-300 border-b pb-2 border-primary-300"
        }`}
      >
        {name}
      </Link>
    </li>
  );
}

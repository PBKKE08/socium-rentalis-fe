import Link from "next/link";
import ContactIcon from "./ContactIcon";

type FooterProps = {
  className?: string;
};

const linkData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Booking Steps",
    href: "/",
  },
  {
    name: "Careers",
    href: "/",
  },
  {
    name: "Reviews",
    href: "/",
  },
  {
    name: "Partners",
    href: "/",
  },
  {
    name: "Privacy & Policy",
    href: "/",
  },
];

const contactData: {
  name: "instagram" | "twitter" | "linkedin" | "mail";
  href: string;
}[] = [
  {
    name: "instagram",
    href: "/",
  },
  {
    name: "linkedin",
    href: "/",
  },
  {
    name: "twitter",
    href: "/",
  },
  {
    name: "mail",
    href: "/",
  },
];

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <ul className="flex justify-center items-center flex-wrap gap-6 mb-8">
        {linkData.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-white duration-300 hover:text-primary-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-white text-lg font-medium text-center mb-5">
        Contact Us
      </p>
      <div className="flex justify-center items-center flex-wrap gap-6 mb-8">
        {contactData.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className="text-white duration-300 hover:text-primary-200"
          >
            <ContactIcon name={item.name} />
          </Link>
        ))}
      </div>

      <p className="text-white text-center mt-10">© Socium Rentalis 2023</p>
    </footer>
  );
}

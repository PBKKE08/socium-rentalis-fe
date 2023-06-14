import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link className="flex items-center md:justify-center" href={`/`}>
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
    </Link>
  );
}

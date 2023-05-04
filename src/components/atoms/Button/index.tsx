import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  isPrimary?: boolean;
} & React.ComponentPropsWithoutRef<"link"> &
  React.ComponentPropsWithoutRef<"button">;

export default function Button({
  type,
  isPrimary,
  children,
  className,
  href,
}: ButtonProps) {
  const buttonClass = clsx(
    "rounded-full w-full block px-5 py-3 text-center transition duration-300 focus:ring-4 focus:outline-none",
    isPrimary
      ? "text-white bg-primary-200 hover:bg-primary-300 focus:ring-primary-200"
      : "text-heading bg-primary-100 hover:bg-pink-200 focus:ring-primary-100",
    className
  );

  if (href)
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );

  return (
    <button {...(type && { type })} className={buttonClass}>
      {children}
    </button>
  );
}

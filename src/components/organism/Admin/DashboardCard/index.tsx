import Link from "next/link";

type DashboardCardProps = {
  title: string;
  number: number;
  text: string;
  href: string;
};

export default function DashboardCard({ title, number, text, href }: DashboardCardProps) {
  return (
    <Link className="flex flex-col bg-font-primary-50 px-4 py-8 w-60 rounded-xl" href={href}>
      <p className="text-heading text-xl font-semibold">{title}</p>
      <p className="text-font-primary-400">{number} {text}</p>
    </Link>
  );
}

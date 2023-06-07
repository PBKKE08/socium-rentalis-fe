type DashboardCardProps = {
  title: string;
  number: number;
};

export default function DashboardCard({ title, number }: DashboardCardProps) {
  return (
    <div className="flex flex-col bg-font-primary-50 px-4 py-8 w-60 rounded-xl">
      <p className="text-heading text-xl font-semibold">{title}</p>
      <p className="text-font-primary-400">{number} Partners</p>
    </div>
  );
}

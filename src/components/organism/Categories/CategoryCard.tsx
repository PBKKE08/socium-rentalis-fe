type CategoryCardProps = {
  title: string;
  number: number;
};
export default function CategoryCard({ title, number }: CategoryCardProps) {
  return (
    <div className="flex flex-col w-fill bg-white px-4 py-8 w-60 rounded-xl">
      <p className="text-heading text-xl font-semibold">{title}</p>
      <p className="text-font-primary-400">{number} Partners</p>
    </div>
  );
}

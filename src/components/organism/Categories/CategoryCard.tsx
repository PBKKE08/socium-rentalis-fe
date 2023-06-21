type CategoryCardProps = {
  title: string;
  star: string;
  desc: string;
};
export default function CategoryCard({ title, desc, star }: CategoryCardProps) {
  return (
    <div className="flex flex-col bg-white px-4 py-8 w-90 rounded-xl">
      <p className="text-heading text-xl font-semibold">{title}</p>
      <p className="text-heading text-xl font-semibold">{star}</p>
      <p className="text-font-primary-400">{desc}</p>
    </div>
  );
}

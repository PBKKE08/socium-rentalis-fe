import CategoryCard from "./CategoryCard";

type CategoriesProps = {
  className?: string;
};

const categoriesData = [
  {
    title: "Cars",
    number: 305,
  },
  {
    title: "Bike",
    number: 150,
  },
  {
    title: "Camera",
    number: 50,
  },
  {
    title: "Games",
    number: 50,
  },
];

export default function Categories({ className }: CategoriesProps) {
  return (
    <div className={className}>
      <h1 className="section-heading mb-3">Popular Categories</h1>
      <p className="text-font-primary-400 mb-10">
        Quick way to get your first experience
      </p>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        {categoriesData.map((category) => (
          <CategoryCard
            number={category.number}
            title={category.title}
            key={category.title}
          />
        ))}
      </div>
    </div>
  );
}

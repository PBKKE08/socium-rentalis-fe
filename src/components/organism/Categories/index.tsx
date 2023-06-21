import CategoryCard from "./CategoryCard";

type CategoriesProps = {
  className?: string;
};

const categoriesData = [
  {
    title: "It was INCREDIBLY fun",
    desc: "From our first encounter, laughter filled the air as sparks flew",
    star: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    title: "Not awkward at all",
    desc: "Her vibrant personality dissolved any awkwardness",
    star: "⭐️⭐️⭐️⭐️",
  },
  {
    title: "Never a dull-moment!",
    desc: "Ultimate Companion Experience!",
    star: "⭐️⭐️⭐️⭐️",
  },
  {
    title: "An-Absolute Blast!",
    desc: "together we embarked on thrilling adventures, creating unforgettable memories",
    star: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    title: "A Wild Ride of Joy!",
    desc: "We laughed, shared stories, and experienced the joy of companionship",
    star: "⭐️⭐️⭐️⭐️⭐️",
  },
];

export default function Categories({ className }: CategoriesProps) {
  return (
    <div className={className}>
      <h1 className="section-heading mb-3">User's Review</h1>
      <p className="text-font-primary-400 mb-10">
        Discover what others are saying about their initial experiences
      </p>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        {categoriesData.map((category) => (
          <CategoryCard
            desc={category.desc}
            title={category.title}
            star={category.star}
            key={category.title}
          />
        ))}
      </div>
    </div>
  );
}

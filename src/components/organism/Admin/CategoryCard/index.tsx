import Link from "next/link";
import { NumericFormat } from "react-number-format";

type CategoryCardProps = {
  category: CategoryCard;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      // href={`/detail/${partner.id}`}
      href={`#`}
      className="w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/5 flex flex-col gap-6 items-center justify-center hover:scale-105 duration-300"
    >
        <div className="flex flex-col gap-1 w-full">
          <p
            className={`
          text-black px-4 py-2 rounded-full text-sm max-w-fit 
          `}
          >
            {category.name}
          </p>
          </div>
    </Link>
  );
}

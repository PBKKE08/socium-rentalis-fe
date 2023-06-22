import clsx from "clsx";
import Image from "next/image";
import { NumericFormat } from "react-number-format";

type DetailProfileProps = {
  name: string;
  price: number;
  category: string;
  isPaid?: boolean;
  status?: string;
};

export default function DetailProfile({
  name,
  price,
  category,
  isPaid,
  status,
}: DetailProfileProps) {
  const paidStyles = clsx(
    "text-white px-4 py-2 rounded-full text-sm max-w-fit",
    isPaid ? "bg-green-500" : "bg-red-500"
  );

  const statusStyles = clsx(
    "text-white px-4 py-2 rounded-full text-sm max-w-fit",
    (status === "1" && "bg-gray-500") ||
      (status === "2" && "bg-green-500") ||
      (status === "3" && "bg-blue-500")
  );

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-5">
      <Image
        src={`https://source.unsplash.com/random/?female`}
        width={100}
        height={100}
        alt="partner-img"
        className="object-cover object-center rounded-xl shadow-md w-40 aspect-square"
        quality={100}
        loading="lazy"
      />

      <div className="flex flex-col gap-1">
        <p className={paidStyles}>{isPaid ? "Paid" : "Unpaid"}</p>
        <p className={statusStyles}>
          {(status === "1" && "Ended") ||
            (status === "2" && "On Going") ||
            (status === "3" && "Upcoming")}
        </p>
        <p className="text-heading font-medium text-xl">{name}</p>
        <p className="text-heading text-lg">
          <NumericFormat
            value={price}
            displayType="text"
            prefix="IDR "
            suffix="/jam"
            decimalSeparator=","
            thousandSeparator="."
          />
        </p>
        {/* <p className="text-font-primary-400">
          Gender : <span className="text-heading">Male</span>
        </p> */}
        <p className="text-font-primary-400">
          Category : <span className="text-heading">{category}</span>
        </p>
        {/* <div className="text-font-primary-400 flex items-center gap-1">
          <p>Rating : </p>
          <span className="inline-flex gap-1 items-center justify-center">
            <Image
              src="/images/icon-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <p className="text-heading">5</p>
          </span>
        </div> */}
      </div>
    </div>
  );
}

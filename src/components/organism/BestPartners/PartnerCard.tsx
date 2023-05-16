import Image from "next/image";
import { NumericFormat } from "react-number-format";

type PartnerCardProps = {} & PartnerCard;

export default function PartnerCard({
  category,
  gender,
  name,
  price,
  rating,
}: PartnerCardProps) {
  return (
    <div className="w-72 flex flex-col gap-6 items-center justify-center">
      <Image
        src={`https://source.unsplash.com/random/?${gender}`}
        width={100}
        height={200}
        alt="partner-img"
        className="object-cover object-center rounded-xl shadow-md w-full"
        priority
        quality={100}
      />

      <div className="flex flex-col gap-1 w-full">
        <p className="text-heading text-xl font-semibold">
          <NumericFormat
            value={price}
            displayType="text"
            prefix="IDR "
            suffix="/jam"
            decimalSeparator=","
            thousandSeparator="."
          />
        </p>
        <p className="text-xl text-font-primary-500 font-medium">{name}</p>
        <p className="text-font-primary-400">
          {gender} - {category}
        </p>
        <div className="flex gap-1 items-center">
          <Image
            src="/images/icon-star.svg"
            width={20}
            height={20}
            alt="star"
          />
          <p className="text-headiong">{rating}</p>
          {/* {Array.from(Array(rating).keys()).map((_, index) => (
            <Image
              src="/images/icon-star.svg"
              width={20}
              height={20}
              alt="star"
              key={index}
            />
          ))} */}

          {/* {Array.from(Array(5 - rating).keys()).map((_, index) => (
            <Image
              src="/images/star-outline.svg"
              width={20}
              height={20}
              alt="star"
              key={index}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

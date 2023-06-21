import Image from "next/image";
import Link from "next/link";
import { NumericFormat } from "react-number-format";

type PartnerCardProps = {
  partner: PartnerCard;
};

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <Link
      href={`/detail/${partner.id}`}
      className="w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/5 flex flex-col gap-6 items-center justify-center hover:scale-105 duration-300"
    >
      <Image
        src={`https://source.unsplash.com/random/?${partner.gender}`}
        width={500}
        height={500}
        alt="partner-img"
        className="object-cover object-center rounded-xl shadow-md w-full aspect-square"
        quality={100}
        loading="lazy"
      />

      <div className="flex flex-col gap-1 w-full">
        <p className="text-heading text-lg font-semibold">
          <NumericFormat
            value={partner.price}
            displayType="text"
            prefix="IDR "
            suffix="/jam"
            decimalSeparator=","
            thousandSeparator="."
          />
        </p>
        <p className="text-lg text-font-primary-500 font-medium">
          {partner.name}
        </p>
        <p className="text-font-primary-400">
          {partner.gender}
          {/* - {partner.category} */}
        </p>
        <div className="flex gap-1 items-center">
          <Image
            src="/images/icon-star.svg"
            width={20}
            height={20}
            alt="star"
          />
          <p className="text-heading">{partner.rating}</p>
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
    </Link>
  );
}

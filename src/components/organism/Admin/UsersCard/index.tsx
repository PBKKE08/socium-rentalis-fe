import Image from "next/image";
import Link from "next/link";
import { NumericFormat } from "react-number-format";

type UsersCardProps = {
  partner: PartnerCard;
};

export default function UsersCard({ partner }: UsersCardProps) {
  return (
    <Link
      // href={`/detail/${partner.id}`}
      href={`#`}
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

      {partner.isPartner ? (
        <div className="flex flex-col gap-1 w-full">
          <p
            className={`
          text-white px-4 py-2 rounded-full text-sm max-w-fit 
          ${partner.isPartner === "pending" && "bg-yellow-500"}
          ${partner.isPartner === "accepted" && "bg-green-500"}
          ${partner.isPartner === "rejected" && "bg-red-500"}
          `}
          >
            {partner.isPartner}
          </p>
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
            {partner.gender} - {partner.category}
          </p>
          <div className="flex gap-1 items-center">
            <Image
              src="/images/icon-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <p className="text-heading">{partner.rating}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1 w-full">
          <p className="text-white text-sm px-4 py-2 bg-gray-500 rounded-full max-w-fit">
            Not a partner
          </p>
          <p className="text-lg text-font-primary-500 font-medium">
            {partner.name}
          </p>
          <p className="text-font-primary-400">{partner.gender}</p>
        </div>
      )}
    </Link>
  );
}

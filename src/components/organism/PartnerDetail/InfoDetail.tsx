import Image from "next/image";
import { NumericFormat } from "react-number-format";

type InfoDetailProps = {
  partner: {
    id: string;
    name: string;
    city: string;
    price: string;
    email: string;
    category: string;
    rating: number;
    description: string;
    gender: string;
  };
};

export default function InfoDetail({ partner }: InfoDetailProps) {
  return (
    <>
      <p className="text-heading font-medium text-2xl mb-1">{partner.name}</p>
      <p className="text-heading font-bold text-3xl mb-4">
        <NumericFormat
          value={partner.price}
          displayType="text"
          prefix="IDR "
          suffix="/jam"
          decimalSeparator=","
          thousandSeparator="."
        />
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-primary-200 text-lg font-medium">Detail</p>
        <p className="text-font-primary-400">
          City : <span className="text-heading">{partner.city}</span>
        </p>
        <p className="text-font-primary-400">
          Gender :{" "}
          <span className="text-heading">
            {partner.gender === "f" ? "female" : "male"}
          </span>
        </p>
        <p className="text-font-primary-400">
          Category : <span className="text-heading">{partner.category}</span>
        </p>
        <div className="text-font-primary-400 flex items-center gap-1">
          <p>Rating : </p>
          <span className="inline-flex gap-1 items-center justify-center">
            <Image
              src="/images/icon-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <p className="text-heading">{partner.rating}</p>
          </span>
        </div>
        <p className="text-heading">{partner.description}</p>
      </div>
    </>
  );
}

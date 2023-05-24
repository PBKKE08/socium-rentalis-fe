import Image from "next/image";
import Link from "next/link";
import Button from "@/components/atoms/Button"
import { NumericFormat } from "react-number-format";

type PartnerCardProps = {
  partner: PartnerCard;
};

export default function UserCard({ partner }: PartnerCardProps) {
  return (
    <Link
      href={`/detail/${partner.id}`}
      className="max-w-100 flex flex-row gap-6 items-center justify-center hover:scale-105 duration-300 p-4"
    >
      <Image
        src={`https://source.unsplash.com/random/?${partner.gender}`}
        width={128}
        height={128}
        alt="partner-img"
        className="object-cover object-center rounded-xl shadow-md w-full aspect-square"
        quality={100}
        loading="lazy"
      />

      <div className="flex flex-col gap-1 w-full mr-24">
        <p className="text-lg text-font-primary-500 font-medium">
          {partner.name}
        </p>
        <p className="text-font-primary-400">
          {partner.gender} - {partner.category}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Button type="button">Deactivate</Button>
      </div>
    </Link>
  );
}

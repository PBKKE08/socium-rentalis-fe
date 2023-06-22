import Button from "@/components/atoms/Button";
import { accPartner, rejectPartner } from "@/services/admin";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NumericFormat } from "react-number-format";

type UsersCardProps = {
  partner: any;
};

export default function UsersCard({ partner }: UsersCardProps) {
  const router = useRouter();
  const acceptHandler = async (id: string, email: string) => {
    const result: any = await accPartner(id, email);

    if (result.error) return alert(result.message);
    alert("Partner accepted");
    router.reload();
  };
  const rejectHandler = async (id: string, email: string) => {
    const result: any = await rejectPartner(id, email);

    if (result.error) return alert(result.message);
    alert("Partner rejected");
    router.reload();
  };
  return (
    <div className="w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/5 flex flex-col gap-6 items-center justify-center ">
      <Image
        src={`https://source.unsplash.com/random/?${
          partner.gender === "f" ? "female" : "male"
        }`}
        width={500}
        height={500}
        alt="partner-img"
        className="object-cover object-center rounded-xl shadow-md w-full aspect-square"
        quality={100}
        loading="lazy"
      />

      {/* {partner.isPartner ? (
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
              value={partner.harga}
              displayType="text"
              prefix="IDR "
              suffix="/jam"
              decimalSeparator=","
              thousandSeparator="."
            />
          </p>
          <p className="text-lg text-font-primary-500 font-medium">
            {partner.nama}
          </p>
          <p className="text-font-primary-400">
            {partner.gender} - {partner.kategori}
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
            {partner.nama}
          </p>
          <p className="text-font-primary-400">{partner.gender}</p>
        </div>
      )} */}
      <div className="flex flex-col gap-1 w-full">
        <p className="text-lg text-font-primary-500 font-medium">
          {partner.name}
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
        <p className="text-font-primary-400">
          {partner.gender === "f" ? "female" : "male"} - {partner.category_name}
        </p>
        <p className="text-font-primary-400">{partner.city}</p>
        <p className="text-font-primary-400">{partner.partner_email}</p>

        <div className="flex flex-col justify-center items-center mt-4">
          <Button
            isCustom
            customClass="bg-green-500 mb-3 text-white hover:bg-green-300 focus:ring-green-200"
            onClick={() =>
              acceptHandler(partner.partner_id, partner.partner_email)
            }
          >
            Accept
          </Button>
          <Button
            isCustom
            customClass="bg-red-500 text-white hover:bg-red-300 focus:ring-red-200"
            onClick={() =>
              rejectHandler(partner.partner_id, partner.partner_email)
            }
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}

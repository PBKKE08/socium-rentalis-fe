import Image from "next/image";
import React from "react";
import Detail from "./Detail";
import Button from "@/components/atoms/Button";
import clsx from "clsx";

type CardHistoryTransactionProps = {
  data: any;
};

export default function CardHistoryTransaction({
  data,
}: CardHistoryTransactionProps) {
  const statusClass = clsx(
    "text-white px-4 py-2 rounded-full text-sm max-w-fit",
    data.order_status === "1" && "bg-gray-500",
    data.order_status === "2" && "bg-green-500"
  );
  return (
    <div className="flex items-center justify-center gap-4 w-full md:w-3/4 lg:w-2/4 border border-font-primary-300 p-4 rounded-lg flex-col md:flex-row">
      <Image
        src={`https://source.unsplash.com/random/?${
          data.gender === "f" ? "female" : "male"
        }`}
        width={100}
        height={100}
        alt="partner-img"
        className="object-cover object-center rounded-xl shadow-md w-40 aspect-square"
        quality={100}
        loading="lazy"
      />

      <div className="flex items-end w-full flex-col md:flex-row gap-4 md:gap-0">
        <div
          className="flex flex-col gap-2 w-full justify-center items-center md:justify-start md:items-start"
          style={{ flex: "1 0 70%" }}
        >
          <p className="text-heading text-xl font-medium">
            {data.partner_name}
          </p>
          <p className={statusClass}>
            {(data.order_status === "1" && "Ended") ||
              (data.order_status === "2" && "On Going")}
          </p>
          <p className="text-font-primary-500">{data.category}</p>
          <p className="text-font-primary-400">{data.booking_date}</p>
          <p className="text-font-primary-500">
            {data.start} - {data.end}
          </p>
          <div className="flex gap-1 items-center">
            <Image
              src="/images/icon-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <p className="text-heading"></p>
          </div>
        </div>
        <Button href={`/transaction/detail/${data.order_id}`} className="">
          Details
        </Button>
      </div>
    </div>
  );
}

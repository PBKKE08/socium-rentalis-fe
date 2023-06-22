import Image from "next/image";
import { NumericFormat } from "react-number-format";
import BookingItemDetail from "./BookingItemDetail";
import { getDurationInHours } from "@/lib/validation";
import { useEffect, useState } from "react";

type BookingItemProfileProps = {
  partner: any;
  bookingData: any;
};

export default function BookingItemProfile({
  partner,
  bookingData,
}: BookingItemProfileProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mb-10">
        <Image
          src={`https://source.unsplash.com/random/?${
            partner.gender === "f" ? "female" : "male"
          }`}
          width={500}
          height={500}
          alt="partner-img"
          className="object-cover object-center rounded-xl shadow-md w-2/4 md:w-2/6 lg:w-1/4 aspect-square"
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
            {partner.gender === "f" ? "Female" : "Male"} - {partner.category}
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
      </div>
      <div className="flex flex-col gap-3 w-full mb-10">
        <BookingItemDetail title="Kategori Booking" value={partner.category} />
        <BookingItemDetail
          title="Tanggal Booking"
          value={bookingData.bookingDate}
        />
        <BookingItemDetail title="Jam Mulai" value={bookingData.bookingStart} />
        <BookingItemDetail title="Jam Selesai" value={bookingData.bookingEnd} />
      </div>
    </>
  );
}

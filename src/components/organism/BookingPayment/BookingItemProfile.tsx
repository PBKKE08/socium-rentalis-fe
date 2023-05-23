import Image from "next/image";
import { NumericFormat } from "react-number-format";
import BookingItemDetail from "./BookingItemDetail";

export default function BookingItemProfile() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mb-10">
        <Image
          src={`https://source.unsplash.com/random/?male`}
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
              value={1000000}
              displayType="text"
              prefix="IDR "
              suffix="/jam"
              decimalSeparator=","
              thousandSeparator="."
            />
          </p>
          <p className="text-lg text-font-primary-500 font-medium">Name</p>
          <p className="text-font-primary-400">Male - Cars</p>
          <div className="flex gap-1 items-center">
            <Image
              src="/images/icon-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <p className="text-heading">{5}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full mb-10">
        <BookingItemDetail title="Kategori Booking" value="Kondangan" />
        <BookingItemDetail title="Tanggal Booking" value="17 Januari 2024" />
        <BookingItemDetail title="Jam Mulai" value="06:00 AM" />
        <BookingItemDetail title="Jam Selesai" value="17:00 PM" />
        <BookingItemDetail title="Durasi" value="11 Jam" />
      </div>
    </>
  );
}

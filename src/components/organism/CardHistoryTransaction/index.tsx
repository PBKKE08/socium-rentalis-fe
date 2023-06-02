import Image from "next/image";
import React from "react";
import Detail from "./Detail";

export default function CardHistoryTransaction() {
  return (
    <div className="flex items-center justify-center gap-4 w-full md:w-3/4 lg:w-2/4 border border-font-primary-300 p-4 rounded-lg flex-col md:flex-row">
      <Image
        src={`https://source.unsplash.com/random/?female`}
        width={100}
        height={100}
        alt="partner-img"
        className="object-cover object-center rounded-xl shadow-md w-40 aspect-square"
        quality={100}
        loading="lazy"
      />

      <Detail />
    </div>
  );
}

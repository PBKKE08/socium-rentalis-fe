import Button from "@/components/atoms/Button";
import Image from "next/image";

export default function Detail() {
  return (
    <div className="flex items-end w-full flex-col md:flex-row gap-4 md:gap-0">
      <div
        className="flex flex-col gap-2 w-full justify-center items-center md:justify-start md:items-start"
        style={{ flex: "1 0 70%" }}
      >
        <p className="text-heading text-xl font-medium">Katarina</p>
        <p
          className="text-font-primary-5
        500"
        >
          Kondangan
        </p>
        <p className="text-font-primary-400">20 Februari 2023</p>
        <p className="text-font-primary-500">06.00 - 09.00</p>
        <div className="flex gap-1 items-center">
          <Image
            src="/images/icon-star.svg"
            width={20}
            height={20}
            alt="star"
          />
          <p className="text-heading">4.9</p>
        </div>
      </div>
      <Button href="/transaction/detail/1212" className="">
        Details
      </Button>
    </div>
  );
}

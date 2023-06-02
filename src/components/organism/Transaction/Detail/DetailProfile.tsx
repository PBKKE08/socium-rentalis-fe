import Image from "next/image";
import { NumericFormat } from "react-number-format";

export default function DetailProfile() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-5">
      <Image
        src={`https://source.unsplash.com/random/?female`}
        width={100}
        height={100}
        alt="partner-img"
        className="object-cover object-center rounded-xl shadow-md w-40 aspect-square"
        quality={100}
        loading="lazy"
      />

      <div className="flex flex-col gap-1">
        <p className="text-heading font-medium text-xl">John Doe</p>
        <p className="text-heading text-lg">
          <NumericFormat
            value={100000}
            displayType="text"
            prefix="IDR "
            suffix="/jam"
            decimalSeparator=","
            thousandSeparator="."
          />
        </p>
        <p className="text-font-primary-400">
          Gender : <span className="text-heading">Male</span>
        </p>
        <p className="text-font-primary-400">
          Category : <span className="text-heading">Cars</span>
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
            <p className="text-heading">5</p>
          </span>
        </div>
      </div>
    </div>
  );
}

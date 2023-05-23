import Image from "next/image";
import InfoDetail from "./InfoDetail";
import BookingForm from "../BookingForm";

type PartnerDetailProps = {
  className?: string;
};

export default function PartnerDetail({ className }: PartnerDetailProps) {
  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <Image
          src={`https://source.unsplash.com/random/?male`}
          width={500}
          height={500}
          alt="partner-img"
          className="object-cover object-center rounded-xl shadow-md max-w-xs max-h-96"
          quality={100}
          loading="lazy"
        />
        <div className="flex flex-col w-full">
          <InfoDetail />
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

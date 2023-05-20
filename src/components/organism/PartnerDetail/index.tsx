import Image from "next/image";

type PartnerDetailProps = {
  className?: string;
};

export default function PartnerDetail({ className }: PartnerDetailProps) {
  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6">
        <Image
          src={`https://source.unsplash.com/random/?male`}
          width={500}
          height={500}
          alt="partner-img"
          className="object-cover object-center rounded-xl shadow-md w-1/3 aspect-2/3 max-h-96"
          quality={100}
          loading="lazy"
        />
        <div className="flex flex-col gap-4 w-full">
          <p className="text-heading font-semibold text-2xl">John Doe</p>
        </div>
      </div>
    </div>
  );
}

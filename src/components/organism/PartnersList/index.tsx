import PartnerCard from "../../atoms/PartnerCard";

type PartnersListProps = {
  className?: string;
  partners: any;
};

const partnersData: PartnerCard[] = [
  {
    id: 1,
    nama: "John Doe",
    kategori: "Cars",
    rating: 5,
    harga: 100000,
    gender: "f",
  },
  {
    id: 2,
    nama: "John Doe",
    kategori: "Cars",
    rating: 5,
    harga: 100000,
    gender: "m",
  },
  {
    id: 3,
    nama: "John Doe",
    kategori: "Cars",
    rating: 4.7,
    harga: 100000,
    gender: "f",
  },
  {
    id: 4,
    nama: "John Doe",
    kategori: "Cars",
    rating: 5,
    harga: 100000,
    gender: "m",
  },
];

export default function PartnersList({
  className,
  partners,
}: PartnersListProps) {
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {partners.map((partner: any) => (
          <PartnerCard partner={partner} key={partner.id} />
        ))}
      </div>
    </div>
  );
}

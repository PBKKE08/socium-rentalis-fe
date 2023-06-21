import PartnerCard from "../../atoms/PartnerCard";

type BestPartnersProps = {
  className?: string;
};

const partnersData: PartnerCard[] = [
  {
    id: 1,
    nama: "M. Ferdian Iqbal",
    kategori: "Cars",
    rating: 5,
    harga: 150000,
    gender: "f",
  },
  {
    id: 2,
    nama: "Samuel",
    kategori: "Cars",
    rating: 5,
    harga: 125000,
    gender: "m",
  },
  {
    id: 3,
    nama: "Naufal",
    kategori: "Cars",
    rating: 4.7,
    harga: 150000,
    gender: "f",
  },
  {
    id: 4,
    nama: "Reyner",
    kategori: "Cars",
    rating: 5,
    harga: 100000,
    gender: "m",
  },
];

export default function BestPartners({ className }: BestPartnersProps) {
  return (
    <div className={className}>
      <h1 className="section-heading mb-3">Best Partners</h1>
      <p className="text-font-primary-400 mb-10">Always there when needed</p>
      <div className="flex justify-center items-center gap-8 md:gap-4 flex-col md:flex-row flex-wrap lg:flex-nowrap">
        {partnersData.map((partner, index) => (
          <PartnerCard partner={partner} key={index} />
        ))}
      </div>
    </div>
  );
}

import PartnerCard from "../../atoms/PartnerCard";

type BestPartnersProps = {
  className?: string;
};

const partnersData: PartnerCard[] = [
  {
    id: 1,
    name: "John Doe",
    category: "Cars",
    rating: 5,
    price: 100000,
    gender: "female",
  },
  {
    id: 2,
    name: "John Doe",
    category: "Cars",
    rating: 5,
    price: 100000,
    gender: "male",
  },
  {
    id: 3,
    name: "John Doe",
    category: "Cars",
    rating: 4.7,
    price: 100000,
    gender: "female",
  },
  {
    id: 4,
    name: "John Doe",
    category: "Cars",
    rating: 5,
    price: 100000,
    gender: "male",
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

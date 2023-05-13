import PartnerCard from "./PartnerCard";

type BestPartnersProps = {
  className?: string;
};

const partnersData: PartnerCard[] = [
  {
    name: "John Doe",
    category: "Cars",
    rating: 5,
    price: 100000,
    gender: "female",
  },
  {
    name: "John Doe",
    category: "Cars",
    rating: 5,
    price: 100000,
    gender: "male",
  },
  {
    name: "John Doe",
    category: "Cars",
    rating: 4.7,
    price: 100000,
    gender: "female",
  },
  {
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
      <div className="flex justify-center items-center gap-4">
        {partnersData.map((partner, index) => (
          <PartnerCard
            category={partner.category}
            gender={partner.gender}
            name={partner.name}
            price={partner.price}
            rating={partner.rating}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

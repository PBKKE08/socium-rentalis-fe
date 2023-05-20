import PartnerCard from "../../atoms/PartnerCard";

type PartnersListProps = {
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

export default function PartnersList({ className }: PartnersListProps) {
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {partnersData.map((partner) => (
          <PartnerCard partner={partner} key={partner.id} />
        ))}
      </div>
    </div>
  );
}

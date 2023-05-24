import MaintenanceCard from "./card";
import PartnerCard from "../../atoms/PartnerCard";

type PartnersListProps = {
  className?: string;
};

const partnersData: PartnerCard[] = [
  {
    id: 1,
    name: "John Doe",
    category: "Cars",
    rating: 0,
    price: 100000,
    gender: "female",
  },
  {
    id: 2,
    name: "John Doe",
    category: "Cars",
    rating: 0,
    price: 100000,
    gender: "male",
  },
  {
    id: 3,
    name: "John Doe",
    category: "Cars",
    rating: 0,
    price: 100000,
    gender: "female",
  },
  {
    id: 4,
    name: "John Doe",
    category: "Cars",
    rating: 0,
    price: 100000,
    gender: "male",
  },
];

export default function MaintenanceList({ className }: PartnersListProps) {
  return (
    <div className={className}>
      <div className="grid items-center justify-center gap-6">
        {partnersData.map((partner) => (
          <MaintenanceCard partner={partner} key={partner.id} />
        ))}
      </div>
    </div>
  );
}

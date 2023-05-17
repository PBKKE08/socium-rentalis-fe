import PartnerCard from "../BestPartners/PartnerCard";

type PartnersListProps = {
  className?: string;
};

export default function PartnersList({ className }: PartnersListProps) {
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((partner) => (
          <PartnerCard
            key={partner}
            category="cars"
            gender="male"
            name="Andre"
            price={100000}
            rating={4.54}
          />
        ))}
      </div>
    </div>
  );
}

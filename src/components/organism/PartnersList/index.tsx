import PartnerCard from "../BestPartners/PartnerCard";

type PartnersListProps = {
  className?: string;
};

export default function PartnersList({ className }: PartnersListProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center content-center grid-flow-dense">
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

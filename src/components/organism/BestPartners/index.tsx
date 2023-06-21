import { useCallback, useEffect, useState } from "react";
import PartnerCard from "../../atoms/PartnerCard";
import { getPartners } from "@/services/users";

type BestPartnersProps = {
  className?: string;
};

export default function BestPartners({ className }: BestPartnersProps) {
  const [partners, setPartners] = useState<PartnerCard[]>();

  const getAllPartners = useCallback(async () => {
    const result = await getPartners();
    setPartners(result.data);
    // console.log(result.data);
  }, [getPartners]);

  useEffect(() => {
    getAllPartners();
  }, []);
  return (
    <div className={className}>
      <h1 className="section-heading mb-3">Best Partners</h1>
      <p className="text-font-primary-400 mb-10">Always there when needed</p>
      <div className="flex justify-center items-center gap-8 md:gap-4 flex-col md:flex-row flex-wrap lg:flex-nowrap">
        {partners && <PartnerCard partner={partners[0]} />}
        {partners && <PartnerCard partner={partners[1]} />}
        {partners && <PartnerCard partner={partners[2]} />}
        {partners && <PartnerCard partner={partners[3]} />}
      </div>
    </div>
  );
}

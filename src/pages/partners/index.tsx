import FilterForm from "@/components/organism/FilterForm";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import PartnersList from "@/components/organism/PartnersList";
import { getPartners } from "@/services/users";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

export default function Partners() {
  const [partners, setPartners] = useState<any>([]);
  const [query, setQuery] = useState<QueryFilter>({
    area: "",
    gender: "",
    category: "",
  });
  // console.log({ query });
  const getAllPartners = useCallback(async () => {
    const result = await getPartners(query);
    setPartners(result.data);
    // console.log(result.data);
  }, [getPartners, query]);

  useEffect(() => {
    getAllPartners();
  }, [query]);

  return (
    <>
      <Head>
        <title>Socium Rentalis</title>
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar name="partners" />
        <FilterForm
          className="pt-10 pb-8 px-4 container mx-auto"
          setQuery={setQuery}
        />
        {partners ? (
          <PartnersList
            className="pt-10 pb-8 px-4 container mx-auto"
            partners={partners}
          />
        ) : (
          <div className="text-center text-2xl font-bold">
            No Partners Found
          </div>
        )}
        <div className="bg-primary-400">
          <Footer className="pt-20 pb-20 px-4 container mx-auto" />
        </div>
      </main>
    </>
  );
}

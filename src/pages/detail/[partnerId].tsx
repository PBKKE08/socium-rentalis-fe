import Head from "next/head";
import Navbar from "../../components/organism/Navbar";
import PartnerDetail from "@/components/organism/PartnerDetail";

export default function PartnerId() {
  return (
    <>
      <Head>
        <title>Socium Rentalis | Detail</title>
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar name="partners" />
        <PartnerDetail className="pt-20 pb-8 px-4 container mx-auto" />
      </main>
    </>
  );
}

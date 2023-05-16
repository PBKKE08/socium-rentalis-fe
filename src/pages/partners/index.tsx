import FilterForm from "@/components/organism/FilterForm";
import Navbar from "@/components/organism/Navbar";
import Head from "next/head";

export default function Partners() {
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
        <FilterForm className="pt-10 pb-8 px-4 container mx-auto" />
      </main>
    </>
  );
}

import BestPartners from "@/components/organism/BestPartners";
import Categories from "@/components/organism/Categories";
import Footer from "@/components/organism/Footer";
import Hero from "@/components/organism/Hero";
import Navbar from "@/components/organism/Navbar";
import MaintenanceList from "@/components/organism/MaintenanceList";
import Step from "@/components/organism/Step";
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
        <MaintenanceList></MaintenanceList>
      </main>
    </>
  );
}

import Hero from "@/components/organism/Hero";
import Navbar from "@/components/organism/Navbar";
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
        <Navbar name="home" />
        <Hero className="pt-20 pb-8 px-4 container mx-auto" />
        <Step className="pt-20 pb-8 px-4 container mx-auto" />
      </main>
    </>
  );
}

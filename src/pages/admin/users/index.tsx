import BestPartners from "@/components/organism/BestPartners";
import Categories from "@/components/organism/Categories";
import Footer from "@/components/organism/Footer";
import Hero from "@/components/organism/Hero";
import Navbar from "@/components/organism/Navbar";
import UserList from "@/components/organism/UserList";
import Step from "@/components/organism/Step";
import Head from "next/head";

export default function Users() {
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
        <UserList></UserList>
      </main>
    </>
  );
}

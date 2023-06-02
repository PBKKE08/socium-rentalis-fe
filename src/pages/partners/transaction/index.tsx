import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import Head from "next/head";

export default function Transaction() {
  return (
    <>
      <Head>
        <title>Socium Rentalis | Transaction</title>
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar name="transaction" isPartner />
        <div className="bg-primary-400">
          <Footer className="pt-20 pb-20 px-4 container mx-auto" />
        </div>
      </main>
    </>
  );
}

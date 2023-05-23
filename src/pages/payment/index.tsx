import BookingPayment from "@/components/organism/BookingPayment";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import Head from "next/head";

export default function Payment() {
  return (
    <>
      <Head>
        <title>Socium Rentalis | Payment</title>
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar name="partners" />
        <BookingPayment className="pt-20 pb-20 px-4 container mx-auto" />
        <div className="bg-primary-400">
          <Footer className="pt-20 pb-20 px-4 container mx-auto" />
        </div>
      </main>
    </>
  );
}

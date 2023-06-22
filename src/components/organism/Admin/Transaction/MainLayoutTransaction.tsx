import Navbar from "@/components/organism/Navbar";
import Head from "next/head";
import Footer from "../../Footer";

export default function MainLayoutTransaction({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Socium Rentalis | Transaction</title>
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar name="transaction" />
        <div className="mt-10">{children}</div>
        <div className="bg-primary-400">
          <Footer className="pt-20 pb-20 px-4 container mx-auto" />
        </div>
      </main>
    </>
  );
}

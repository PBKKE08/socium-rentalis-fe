import BookingPayment from "@/components/organism/BookingPayment";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import { getTokenFromCookiesAndDecodeForServer } from "@/services/token";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import { toast } from "react-toastify";

export default function Payment() {
  const router = useRouter();
  useEffect(() => {
    const bookingData = localStorage.getItem("bookingData");
    if (!bookingData) {
      // toast.error("Please fill the booking form first in the detail page", {
      //   position: "top-center",
      //   theme: "colored",
      // });
      router.back();
      return;
    }
  }, []);

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

export async function getServerSideProps({ req }: { req: any }) {
  const { token } = req.cookies;
  const payload = getTokenFromCookiesAndDecodeForServer(token);

  if (!token || !payload) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

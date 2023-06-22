import BookingPayment from "@/components/organism/BookingPayment";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import {
  getTokenFromCookiesAndDecodeForServer,
  getTokenPartnerFromCookiesServer,
} from "@/services/token";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";

export default function Payment() {
  const [bookingData, setBookingData] = useState({});
  const [partnerData, setPartnerData] = useState({});
  const router = useRouter();
  useEffect(() => {
    const dataBooking = localStorage.getItem("bookingData");
    const dataPartner = localStorage.getItem("partnerData");
    if (!dataBooking || !dataPartner) router.back();
    else {
      setBookingData(JSON.parse(dataBooking));
      setPartnerData(JSON.parse(dataPartner));
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
  const { token, tokenPartner } = req.cookies;
  const payload = getTokenFromCookiesAndDecodeForServer(token);
  const payloadPartner = getTokenPartnerFromCookiesServer(tokenPartner);

  if ((!token || !payload) && (!tokenPartner || !payloadPartner)) {
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

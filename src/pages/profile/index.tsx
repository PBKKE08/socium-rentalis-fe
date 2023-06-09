import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import ProfileItem from "@/components/organism/ProfileItem";
import { getTokenPartnerFromCookiesServer } from "@/services/token";
import { getTokenFromCookiesAndDecodeForServer } from "@/services/token";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Socium Rentalis | Profile</title>
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar name="profile" />
        <h1 className="section-heading text-center pt-20 pb-20 px-4 container mx-auto">
          Profile
        </h1>
        <ProfileItem className="pt-10 pb-20 px-4 container mx-auto" />
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

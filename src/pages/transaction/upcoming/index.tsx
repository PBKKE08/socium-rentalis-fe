import MainLayoutTransaction from "@/components/organism/Transaction/MainLayoutTransaction";
import TabTransaction from "@/components/organism/Transaction/TabTransaction";
import Upcoming from "@/components/organism/Transaction/Upcoming";
import { getTokenFromCookiesAndDecodeForServer } from "@/services/token";

export default function TransactionUpcoming() {
  return (
    <MainLayoutTransaction>
      <TabTransaction name="upcoming" />
      <Upcoming className="pt-14 pb-8 px-4 lg:px-0 container mx-auto" />
    </MainLayoutTransaction>
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

import MainLayoutTransaction from "@/components/organism/Transaction/MainLayoutTransaction";
import TabTransaction from "@/components/organism/Transaction/TabTransaction";
import Upcoming from "@/components/organism/Transaction/Upcoming";
import {
  getTokenFromCookiesAndDecodeForServer,
  getTokenFromCookiesServer,
  getTokenPartnerFromCookiesAndDecodeForServer,
  getTokenPartnerFromCookiesServer,
} from "@/services/token";
import { getTransaction } from "@/services/users";
import { useState } from "react";

type TransactionUpcomingProps = {
  transactions: any;
};
export default function TransactionUpcoming({
  transactions,
}: TransactionUpcomingProps) {
  const [data, setData] = useState(
    transactions?.filter((item: any) => item.order_status === "3")
  );
  return (
    <MainLayoutTransaction>
      <TabTransaction name="upcoming" />
      <Upcoming
        className="pt-14 pb-8 px-4 lg:px-0 container mx-auto"
        histories={data}
      />
    </MainLayoutTransaction>
  );
}

export async function getServerSideProps({ req }: { req: any }) {
  const { token, tokenPartner } = req.cookies;
  const payload = getTokenFromCookiesAndDecodeForServer(token);
  const payloadPartner = getTokenPartnerFromCookiesServer(tokenPartner);
  const serverToken = getTokenFromCookiesServer(token);
  if ((!token || !payload) && (!tokenPartner || !payloadPartner)) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  if (!serverToken && !payloadPartner)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  const result: any = await getTransaction(
    serverToken ? serverToken! : payloadPartner!
  );

  if (result.error) console.log(result.message);
  else
    return {
      props: { transactions: result.data },
    };
}

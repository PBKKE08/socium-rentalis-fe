import History from "@/components/organism/Transaction/History";
import MainLayoutTransaction from "@/components/organism/Transaction/MainLayoutTransaction";
import TabTransaction from "@/components/organism/Transaction/TabTransaction";
import {
  getTokenFromCookiesAndDecodeForServer,
  getTokenFromCookiesServer,
} from "@/services/token";
import { getTransaction } from "@/services/users";
import { useEffect, useState } from "react";

type TransactionHistoryProps = {
  transactions: any;
};

export default function TransactionHistory({
  transactions,
}: TransactionHistoryProps) {
  const [data, setData] = useState(
    transactions.filter(
      (item: any) => item.order_status === "1" || item.order_status === "2"
    )
  );

  // console.log({ transactions });
  // console.log({ data });

  return (
    <MainLayoutTransaction>
      <TabTransaction name="history" />
      <History
        className="pt-14 pb-8 px-4 lg:px-0 container mx-auto"
        histories={data}
      />
    </MainLayoutTransaction>
  );
}

export async function getServerSideProps({ req }: { req: any }) {
  const { token } = req.cookies;
  const payload = getTokenFromCookiesAndDecodeForServer(token);
  const serverToken = getTokenFromCookiesServer(token);
  if (!token || !payload || !serverToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const result: any = await getTransaction(serverToken);

  if (result.error) console.log(result.message);
  else
    return {
      props: { transactions: result.data },
    };
}

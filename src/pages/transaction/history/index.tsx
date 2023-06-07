import History from "@/components/organism/Transaction/History";
import MainLayoutTransaction from "@/components/organism/Transaction/MainLayoutTransaction";
import TabTransaction from "@/components/organism/Transaction/TabTransaction";

export default function TransactionHistory() {
  return (
    <MainLayoutTransaction>
      <TabTransaction name="history" />
      <History className="pt-14 pb-8 px-4 lg:px-0 container mx-auto" />
    </MainLayoutTransaction>
  );
}

import MainLayoutTransaction from "@/components/organism/Admin/Transaction/MainLayoutTransaction";
import TabTransaction from "@/components/organism/Admin/Transaction/TabTransaction";
import Upcoming from "@/components/organism/Transaction/Upcoming";

export default function TransactionUpcoming() {
  return (
    <MainLayoutTransaction>
      <TabTransaction name="upcoming" />
      <Upcoming className="pt-14 pb-8 px-4 lg:px-0 container mx-auto" />
    </MainLayoutTransaction>
  );
}
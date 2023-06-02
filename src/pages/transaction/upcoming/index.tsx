import MainLayoutTransaction from "@/components/organism/Transaction/MainLayoutTransaction";
import TabTransaction from "@/components/organism/Transaction/TabTransaction";
import Upcoming from "@/components/organism/Transaction/Upcoming";

export default function Transaction() {
  return (
    <MainLayoutTransaction>
      <TabTransaction name="upcoming" />
      <Upcoming className="pt-14 pb-8 px-4 lg:px-0 container mx-auto" />
    </MainLayoutTransaction>
  );
}

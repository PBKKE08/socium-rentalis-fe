import MainLayoutTransaction from "@/components/organism/Transaction/MainLayoutTransaction";
import TabTransaction from "@/components/organism/Transaction/TabTransaction";

export default function Transaction() {
  return (
    <MainLayoutTransaction>
      <TabTransaction name="history" />
      History
    </MainLayoutTransaction>
  );
}

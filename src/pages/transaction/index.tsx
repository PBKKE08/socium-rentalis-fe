import History from "@/components/organism/Transaction/History";
import MainLayoutTransaction from "@/components/organism/Transaction/MainLayoutTransaction";
import TabTransaction from "@/components/organism/Transaction/TabTransaction";

export default function Transaction() {
  return (
    <MainLayoutTransaction>
      <TabTransaction name="history" />
      <div className="container mx-auto">
        <History />
      </div>
    </MainLayoutTransaction>
  );
}

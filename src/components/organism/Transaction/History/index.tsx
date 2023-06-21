import CardHistoryTransaction from "../../CardHistoryTransaction";
type HistoryProps = {
  className?: string;
  histories?: any;
};

export default function History({ className, histories }: HistoryProps) {
  return (
    <div className={className}>
      <div className="flex flex-col justify-center items-center gap-8">
        {histories.map((item: any) => (
          <CardHistoryTransaction key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

import CardHistoryTransaction from "../../CardHistoryTransaction";
type HistoryProps = {
  className?: string;
};

export default function History({ className }: HistoryProps) {
  return (
    <div className={className}>
      <div className="flex flex-col justify-center items-center gap-8">
        <CardHistoryTransaction />
        <CardHistoryTransaction />
        <CardHistoryTransaction />
        <CardHistoryTransaction />
      </div>
    </div>
  );
}

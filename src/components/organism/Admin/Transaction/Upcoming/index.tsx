import CardUpcomingTransaction from "../../CardUpcomingTransaction";
type UpcomingProps = {
  className?: string;
};

export default function Upcoming({ className }: UpcomingProps) {
  return (
    <div className={className}>
      <div className="flex flex-col justify-center items-center gap-8">
        <CardUpcomingTransaction />
        <CardUpcomingTransaction />
        <CardUpcomingTransaction />
        <CardUpcomingTransaction />
      </div>
    </div>
  );
}

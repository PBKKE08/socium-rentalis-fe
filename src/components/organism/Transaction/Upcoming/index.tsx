import CardUpcomingTransaction from "../../CardUpcomingTransaction";
type UpcomingProps = {
  className?: string;
  histories?: any;
};

export default function Upcoming({ className, histories }: UpcomingProps) {
  return (
    <div className={className}>
      <div className="flex flex-col justify-center items-center gap-8">
        {histories?.length > 0 ? (
          histories.map((item: any) => (
            <CardUpcomingTransaction key={item.order_id} data={item} />
          ))
        ) : (
          <div className="text-center text-2xl">No upcoming transaction</div>
        )}
      </div>
    </div>
  );
}

type BookingItemDetailProps = {
  title: string;
  value: string | number | JSX.Element | JSX.Element[];
};

export default function BookingItemDetail({
  title,
  value,
}: BookingItemDetailProps) {
  return (
    <div className="flex w-full justify-between items-center">
      <p className="text-font-primary-400">{title}</p>
      <p className="text-heading font-medium">{value}</p>
    </div>
  );
}

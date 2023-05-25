type BookingItemDetailProps = {
  title: string;
  value: string | number;
};

export default function PartnerRegisterItem({
  title,
  value,
}: BookingItemDetailProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-font-primary-400">{title}</p>
      <p className="text-heading">{value}</p>
    </div>
  );
}

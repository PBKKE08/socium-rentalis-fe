import { NumericFormat } from "react-number-format";

type BookingItemDetailProps = {
  title: string;
  value: number;
};

export default function BookingItemNominal({
  title,
  value,
}: BookingItemDetailProps) {
  return (
    <div className="flex w-full justify-between items-center">
      <p className="text-font-primary-400">{title}</p>
      <p className="text-heading font-medium">
        <NumericFormat
          value={value}
          displayType="text"
          prefix="IDR "
          decimalSeparator=","
          thousandSeparator="."
        />
      </p>
    </div>
  );
}

import { NumericFormat } from "react-number-format";

type BookingItemDetailProps = {
  title: string;
  value: number | string;
};

export default function BookingAccountDetail({
  title,
  value,
}: BookingItemDetailProps) {
  return (
    <div className="flex w-full justify-between items-center">
      <p className="text-font-primary-400">{title}</p>
      <p className="text-heading font-medium">
        {typeof value === "number" ? (
          <NumericFormat
            value={value}
            displayType="text"
            prefix="IDR "
            decimalSeparator=","
            thousandSeparator="."
          />
        ) : (
          value
        )}
      </p>
    </div>
  );
}

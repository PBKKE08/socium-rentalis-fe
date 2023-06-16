import PaymentItem from "./PaymentItem";

export default function BookingPaymentForm() {
  return (
    <div className="mb-10 flex flex-wrap gap-3 items-center justify-center w-full">
      <PaymentItem _id="gopay" />
      <PaymentItem _id="mandiri" />
    </div>
  );
}

import PaymentItem from "./PaymentItem";

export default function BookingPaymentForm() {
  return (
    <div className="mb-10 flex flex-wrap gap-7 items-center justify-center w-full">
      <PaymentItem _id="bca" name="bca" />
      <PaymentItem _id="mandiri" name="mandiri" />
    </div>
  );
}

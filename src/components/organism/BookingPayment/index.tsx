import BookingItemNominal from "./BookingItemNominal";
import BookingItemProfile from "./BookingItemProfile";
import BookingPaymentForm from "./BookingPaymentForm";

type BookingPaymentProps = {
  className?: string;
};

export default function BookingPayment({ className }: BookingPaymentProps) {
  return (
    <div className={`flex flex-col lg:flex-row ${className}`}>
      <div className="lg:border-r lg:border-primary-100 lg:pr-8 lg:mr-8 lg:w-3/5">
        <h1 className="section-heading mb-12">Booking Information</h1>
        <BookingItemProfile />
        <h1 className="section-heading mb-12">Payment Details</h1>
        <div className="flex flex-col gap-3 w-full mb-10">
          <BookingItemNominal title="Biaya Jasa" value={1000000} />
          <BookingItemNominal title="Biaya Transportasi" value={100000} />
          <BookingItemNominal title="Biaya Pajak (20%)" value={220000} />
          <BookingItemNominal title="Total Biaya" value={1320000} />
        </div>
      </div>
      <div className="lg:w-2/5">
        <h1 className="section-heading mb-12">Pay With</h1>
        <BookingPaymentForm />
      </div>
    </div>
  );
}

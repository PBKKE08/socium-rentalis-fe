import Button from "@/components/atoms/Button";
import BookingAccountDetail from "./BookingAccountDetail";
import BookingItemNominal from "./BookingItemNominal";
import BookingItemProfile from "./BookingItemProfile";

type BookingPaymentProps = {
  className?: string;
};

export default function BookingPayment({ className }: BookingPaymentProps) {
  return (
    <div className={`flex flex-col lg:flex-row ${className}`}>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
        <h1 className="section-heading mb-12">Booking Information</h1>
        <BookingItemProfile />
        <h1 className="section-heading mb-12">Payment Details</h1>
        <div className="flex flex-col gap-3 w-full mb-10">
          <BookingItemNominal title="Biaya Jasa" value={1000000} />
          <BookingItemNominal title="Biaya Transportasi" value={100000} />
          <BookingItemNominal title="Biaya Pajak (20%)" value={220000} />
          <BookingItemNominal title="Total Biaya" value={1320000} />
        </div>
        <h1 className="section-heading mb-12">Account Information</h1>
        <div className="flex flex-col gap-3 w-full mb-20">
          <BookingAccountDetail title="Bank" value="Bank Central Asia" />
          <BookingAccountDetail title="No. Rekening" value="1234567890" />
          <BookingAccountDetail title="Atas Nama" value="John Doe" />
        </div>

        <Button isPrimary>Confirm Payment</Button>
      </div>
    </div>
  );
}

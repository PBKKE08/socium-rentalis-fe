import Button from "@/components/atoms/Button";
import BookingAccountDetail from "./BookingAccountDetail";
import BookingItemNominal from "./BookingItemNominal";
import BookingItemProfile from "./BookingItemProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookingItemDetail from "./BookingItemDetail";
import { getDurationInHours } from "@/lib/validation";
import { postTransaction } from "@/services/users";

type BookingPaymentProps = {
  className?: string;
};

export default function BookingPayment({ className }: BookingPaymentProps) {
  const [partnerData, setPartnerData] = useState<any>({});
  const [bookingData, setBookingData] = useState<any>({});
  const [checked, setChecked] = useState(false);
  const [duration, setDuration] = useState<any>(0); // [hours
  const router = useRouter();

  useEffect(() => {
    const dataBooking = JSON.parse(localStorage.getItem("bookingData")!);
    const dataPartner = JSON.parse(localStorage.getItem("partnerData")!);
    if (!dataBooking || !dataPartner) router.back();
    else {
      setBookingData(dataBooking);
      setPartnerData(dataPartner);
      setDuration(
        getDurationInHours(dataBooking.bookingStart, dataBooking.bookingEnd)
      );
    }
  }, []);

  const paymentHandler = async () => {
    if (!checked) {
      alert("Please check the checkbox");
      return;
    }

    const data = {
      partner_id: partnerData.id,
      booking_date: bookingData.bookingDate,
      time_start: bookingData.bookingStart,
      time_end: bookingData.bookingEnd,
      payment_type: bookingData.paymentMethod,
      message: bookingData.message,
    };

    const result: any = await postTransaction(data);
    console.log({ result });
    if (result.error) alert(result.message);
    else {
      localStorage.removeItem("bookingData");
      localStorage.removeItem("partnerData");
      router.push("/payment-complete");
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row ${className}`}>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
        <h1 className="section-heading mb-12">Booking Information</h1>
        <BookingItemProfile partner={partnerData} bookingData={bookingData} />
        <h1 className="section-heading mb-12">Payment Details</h1>
        <div className="flex flex-col gap-3 w-full mb-10">
          <BookingItemNominal title="Biaya Jasa" value={partnerData.price} />
          {/* <BookingItemNominal title="Biaya Pajak (20%)" value={220000} /> */}
          <BookingItemDetail title="Durasi" value={`${duration} Jam`} />
          <BookingItemNominal
            title="Total Biaya"
            value={partnerData.price * duration}
          />
        </div>
        <h1 className="section-heading mb-12">Account Information</h1>
        <div className="flex flex-col gap-3 w-full mb-20">
          <BookingAccountDetail
            title="Bank"
            value={bookingData.paymentMethod}
          />
          <BookingAccountDetail title="No. Rekening" value="1234567890" />
          <BookingAccountDetail title="Atas Nama" value="John Doe" />
        </div>

        <div className="flex flex-col w-full mb-10">
          <h2 className="section-heading mb-12">Syarat dan Ketentuan</h2>
          <ul className="text-base text-font-primary-400 mt-3 mb-8 list-disc">
            <li>Berumur minimal 18 tahun</li>
            <li>
              Kerahasiaan data pribadi partner harus dijaga dengan baik. Jika
              ada data yang bocor, maka akun akan di ban secara permanen dan
              akan diselesaikan secara hukum
            </li>
          </ul>
          <div className="flex justify-between items-center">
            <label className="" htmlFor="agreeSK">
              Saya menyetujui semua syarat dan ketentuan yang berlaku
            </label>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              id="agreeSK"
            />
          </div>
        </div>

        <Button isPrimary onClick={paymentHandler}>
          Confirm Payment
        </Button>
      </div>
    </div>
  );
}

import Input from "@/components/atoms/Input";
import { useState } from "react";
import TextareaForm from "./TextareaForm";
import Button from "@/components/atoms/Button";
import BookingPaymentForm from "../BookingPayment/BookingPaymentForm";
import { useRouter } from "next/router";
import PaymentItem from "../BookingPayment/PaymentItem";

type BookingFormProps = {
  className?: string;
};

export default function BookingForm({ className }: BookingFormProps) {
  const [bookingDate, setBookingDate] = useState("");
  const [bookingStart, setBookingStart] = useState("");
  const [bookingEnd, setBookingEnd] = useState("");
  const [bookingNote, setBookingNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(""); // ["BCA", "Mandiri"

  const router = useRouter();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ bookingDate });
    // console.log({ bookingStart });
    // console.log({ bookingEnd });
    // console.log({ bookingNote });
    // console.log({ paymentMethod });

    const bookingData = {
      bookingDate,
      bookingStart,
      bookingEnd,
      bookingNote,
      paymentMethod,
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    router.push("/payment");
  };

  return (
    <div className={className}>
      <h1 className="section-heading mb-3 mt-10">Apply for New Appointment</h1>

      <form className="relative" onSubmit={submitHandler}>
        <div className="flex items-center gap-4 w-full mt-10 mb-6 flex-wrap md:flex-nowrap">
          <div className="w-full">
            <Input
              id="bookingDate"
              type="date"
              isLabel
              labelName="Booking Day"
              onChange={(e) => setBookingDate(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Input
              id="bookingStart"
              type="time"
              isLabel
              labelName="Time Start"
              onChange={(e) => setBookingStart(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Input
              id="bookingEnd"
              type="time"
              isLabel
              labelName="Time End"
              onChange={(e) => setBookingEnd(e.target.value)}
            />
          </div>
        </div>
        <TextareaForm onChange={(e) => setBookingNote(e.target.value)} />

        <h1 className="section-heading mb-3 mt-5">Pay With</h1>
        <div className="mb-10 flex flex-wrap gap-7 items-center justify-center w-full">
          <PaymentItem
            _id="BCA"
            name="BCA"
            value={"BCA"}
            onClick={() => setPaymentMethod("BCA")}
          />
          <PaymentItem
            _id="Mandiri"
            name="Mandiri"
            value={"Mandiri"}
            onClick={() => setPaymentMethod("Mandiri")}
          />
        </div>
        <Button isPrimary type="submit" className="mt-10">
          Continue Booking
        </Button>
      </form>
    </div>
  );
}

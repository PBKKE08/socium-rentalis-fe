import Button from "@/components/atoms/Button";
import PaymentItem from "./PaymentItem";
import { useState } from "react";

export default function BookingPaymentForm() {
  const [payment, setPayment] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ payment });
  };

  return (
    <form action="" className="w-full" onSubmit={submitHandler}>
      <div className="mb-10 flex flex-col gap-3 items-center justify-center w-full">
        <PaymentItem _id="gopay" onChange={() => setPayment("gopay")} />
        <PaymentItem _id="mandiri" onChange={() => setPayment("mandiri")} />
      </div>
      <Button isPrimary type="submit">
        Pay
      </Button>
    </form>
  );
}

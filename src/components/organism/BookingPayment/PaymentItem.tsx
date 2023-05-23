import Image from "next/image";

type PaymentItemProps = {
  _id: string;
  onChange?: () => void;
};

export default function PaymentItem({ _id, onChange }: PaymentItemProps) {
  return (
    <label className="" htmlFor={_id} onChange={onChange}>
      <input
        className="hidden"
        type="radio"
        id={_id}
        name="paymentMethod"
        value={_id}
      />
      <div className="booking-payment-card relative">
        <Image
          src={`/images/gopay-img.png`}
          width={243}
          height={137}
          alt="partner-img"
          className="object-cover object-center rounded-xl shadow-md"
          quality={100}
          loading="lazy"
        />
        <svg
          className="absolute z-10 top-2 right-2"
          id="icon-check"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="#FFDCED" />
          <path
            d="M5.83301 10L8.46459 12.5L14.1663 7.5"
            stroke="#FF007A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </label>
  );
}
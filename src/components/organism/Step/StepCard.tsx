import Image from "next/image";

type StepCardProps = {
  number: number;
  title: string;
  description: string;
};

export default function StepCard({
  number,
  title,
  description,
}: StepCardProps) {
  return (
    <div className="flex flex-col gap-4 w-72 md:w-full items-center justify-center h-full">
      <Image
        src={`/images/step-${number}.png`}
        width={300}
        height={200}
        alt={`step-${number}`}
        className="object-cover"
      />
      <div className="flex gap-4 items-start justify-start">
        <span className="flex items-center justify-center w-8 h-8 p-2 rounded-full border border-primary-200 text-primary-200 text-center mx-auto">
          {number}
        </span>
        <div className="flex flex-col">
          <p className="text-heading font-semibold text-xl">{title}</p>
          <p className="text-font-primary-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

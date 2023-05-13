import StepCard from "./StepCard";

type StepProps = {
  className?: string;
};

const stepData = [
  {
    title: "Choose Partner",
    description: "Choose your partner by your event.",
  },
  {
    title: "Fill in All Data",
    description: "Fill in all data needed to book our partner.",
  },
  {
    title: "Book your Partner",
    description: "Book your partner and wait for the confirmation.",
  },
];

export default function Step({ className }: StepProps) {
  return (
    <div id="step" className={`${className}`}>
      <h1 className="section-heading mb-10">How to Book Our Partners</h1>
      <div className="flex gap-4 md:flex-row flex-col justify-between items-center">
        {stepData.map((step, index) => (
          <StepCard
            key={step.title}
            number={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}

import Button from "@/components/atoms/Button";
import Feature from "./Feature";

const features = [
  {
    title: "Find Your Partner",
    description: "Our platform will help you to find your partner.",
  },
  {
    title: "Trusted & Professional",
    description: "We have a trusted and professional partner.",
  },
  {
    title: "24/7 Support",
    description: "We have a 24/7 support for you.",
  },
];

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-heading text-3xl md:text-5xl font-bold leading-[3rem] md:leading-[4rem] text-center md:text-start">
        Meet Your Partner. <br /> Trusted & Professional.
      </h1>
      <div className="flex justify-between items-start flex-col md:flex-row md:items-center gap-3 md:gap-1">
        {features.map((item) => (
          <Feature
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>
      <Button isPrimary href="#step" className="md:max-w-fit">
        Get Started
      </Button>
    </div>
  );
}

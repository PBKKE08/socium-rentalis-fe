import Button from "@/components/atoms/Button";
import Feature from "./Feature";

const features = [
  {
    title: "Dont forget to check the users account",
    description: "Missing out could leave hearts longing for romance",
  },
  {
    title: "Always check unsettled transaction!",
    description: "A moment's oversight could lead to love's gentle commotion",
  },
  {
    title: "Keep up the good love ❤️",
    description: "If you're running out of love, your work energy will be low",
  },
];

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-heading text-3xl md:text-5xl font-bold leading-[3rem] md:leading-[4rem] text-center lg:text-start">
        👋 Hello, Admin
        {/* <br /> Trusted & Professional. */}
      </h1>
      <div className="flex flex-col gap-3">
        {features.map((item) => (
          <Feature
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>
      {/* <Button isPrimary href="#step" className="lg:max-w-fit">
        Get Started
      </Button> */}
    </div>
  );
}

import Image from "next/image";

type FeatureProps = {
  title: string;
  description: string;
};

export default function Feature({ title, description }: FeatureProps) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/images/logo-point.svg"
        width={30}
        height={30}
        alt="point-ic"
        priority
        quality={100}
      />
      <div className="flex flex-col">
        <p className="text-heading font-medium">{title}</p>
        <p className="text-font-primary-400">{description}</p>
      </div>
    </div>
  );
}

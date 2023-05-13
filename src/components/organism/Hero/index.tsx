import Image from "next/image";
import HeroContent from "./HeroContent";
type HeroProps = {
  className?: string;
};

export default function Hero({ className }: HeroProps) {
  return (
    <div className={`${className} container mx-auto`}>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-7">
        <HeroContent />
        <Image
          alt="hero-img"
          src="/images/hero-img.png"
          width={500}
          height={500}
          quality={100}
          priority
        />
      </div>
    </div>
  );
}

import Image from "next/image";

interface LogoIconProps {
  isBig?: boolean;
}

export default function LogoIcon({ isBig }: LogoIconProps) {
  if (isBig)
    return (
      <div className="flex justify-center items-center mb-6">
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          alt="logo"
          priority
        />

        <p className="text-heading font-medium text-base">
          <span className="text-primary-200">Soc</span>ium
          <br />
          <span className="text-primary-200">Ren</span>talis
        </p>
      </div>
    );

  return (
    <div className="flex justify-center items-center mb-6">
      <Image
        src="/images/logo.svg"
        width={50}
        height={50}
        alt="logo"
        priority
      />

      <p className="text-heading font-medium text-base">
        <span className="text-primary-200 text-sm">Soc</span>ium
        <br />
        <span className="text-sm text-primary-200">Ren</span>talis
      </p>
    </div>
  );
}

import Image from "next/image";

export default function LogoIcon() {
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
}

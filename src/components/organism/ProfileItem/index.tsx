import Button from "@/components/atoms/Button";
import Image from "next/image";
import ProfileDetail from "./ProfileDetail";

type ProfileItemProps = { className?: string };

export default function ProfileItem({ className }: ProfileItemProps) {
  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <Image
          src={`https://source.unsplash.com/random/?male`}
          width={500}
          height={500}
          alt="partner-img"
          className="object-cover object-center rounded-xl shadow-md max-w-xs max-h-96"
          quality={100}
          loading="lazy"
        />
        <div className="flex flex-col w-full gap-8">
          <ProfileDetail />
          <Button isPrimary href="/partners/pre-register" className="w-1/2">
            Be Partner
          </Button>
        </div>
      </div>
    </div>
  );
}

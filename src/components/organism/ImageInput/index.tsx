import Input from "@/components/atoms/Input";
import Image from "next/image";

export default function ImageInput() {
  return (
    <>
      <label htmlFor="avatar">
        <Image
          src={`/images/register-photo.png`}
          alt="upload"
          width={120}
          height={120}
          priority
          quality={100}
          className="cursor-pointer object-cover rounded-full"
        />
      </label>
      <Input
        className="hidden w-0 h-0"
        id="avatar"
        type="file"
        name="avatar"
        accept="image/png, image/jpeg"
        // onChange
      />
    </>
  );
}

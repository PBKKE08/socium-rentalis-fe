import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import LogoIcon from "@/components/atoms/LogoIcon";
import Select from "@/components/atoms/Select";
import PartnerRegisterItem from "@/components/organism/PartnerRegisterItem";
import Link from "next/link";

export default function PartnerRegister() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16 w-full md:w-1/2 mx-auto">
      <Link href="/">
        <LogoIcon isBig />
      </Link>

      <h1 className="text-heading text-4xl font-semibold">Partner Register</h1>
      <p className="text-base text-font-primary-400 mt-3 mb-10">
        Register if you are not partner.
      </p>

      <div className="flex flex-col gap-3 w-full mb-10">
        <PartnerRegisterItem title="Nama" value="John Doe" />
        <PartnerRegisterItem title="Username" value="doejon" />
        <PartnerRegisterItem title="Phone Number" value="1234567890" />
        <PartnerRegisterItem title="Email Address" value="john@gmail.com" />
        <PartnerRegisterItem title="Jenis Kelamin" value="Male" />
        <PartnerRegisterItem title="Umur" value="20 tahun" />
      </div>

      <form className="w-full md:w-96 mt-8">
        <div className="mb-6">
          <Input
            id="price"
            type="number"
            isLabel={true}
            labelName="Price"
            placeholder="Enter your price"
            required
          />
        </div>
        <div className="mb-8">
          <Select isLabel={true} required labelName="Category">
            <option defaultValue="" disabled>
              Select your category
            </option>
            <option value="male">Cars</option>
            <option value="female">Motor</option>
          </Select>
        </div>
        <div className="mb-8"></div>
        <Button isPrimary type="submit" className="mb-3">
          Register
        </Button>
        <Button href="/">Back to Home</Button>
      </form>
    </div>
  );
}

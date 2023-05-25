import Button from "@/components/atoms/Button";
import LogoIcon from "@/components/atoms/LogoIcon";
import Link from "next/link";

export default function PreRegister() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16 w-full md:w-1/2 mx-auto">
      <Link href="/">
        <LogoIcon isBig />
      </Link>

      <h1 className="text-heading text-4xl font-semibold">Partner Register</h1>
      <p className="text-base text-font-primary-400 mt-3 mb-10">
        Register if you are not partner.
      </p>
      <div className="flex flex-col w-full">
        <h2 className="text-heading font-medium text-2xl mb-3 text-center">
          Syarat dan Ketentuan
        </h2>
        <ul className="text-base text-font-primary-400 mt-3 mb-10 list-disc">
          <li>Berumur minimal 18 tahun</li>
          <li>
            Jika membatalkan orderan lebih dari 3 kali, maka akun akan di ban
            secara permanen
          </li>
          <li>Upah diperoleh dengan potongan 10% pada setiap pemesanan</li>
        </ul>
      </div>

      <Button isPrimary href="/partners/register" className="mb-3">
        Continue to Register
      </Button>
      <Button href="/">Back to Home</Button>
    </div>
  );
}

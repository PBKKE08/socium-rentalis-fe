import Button from "@/components/atoms/Button";
import LogoIcon from "@/components/atoms/LogoIcon";
import Link from "next/link";

export default function PreRegister() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
      <Link href="/">
        <LogoIcon isBig />
      </Link>

      <h1 className="text-heading text-4xl font-semibold">Partner Register</h1>
      <p className="text-base text-font-primary-400 mt-3">
        Register if you are not partner.
      </p>

      <Button isPrimary href="/partners/register" className="mb-3">
        Continue to Register
      </Button>
      <Button href="/">Back to Home</Button>
    </div>
  );
}

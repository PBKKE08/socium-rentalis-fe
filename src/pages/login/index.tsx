import Form from "@/components/organism/Auth/Form";
import LogoIcon from "@/components/organism/Auth/LogoIcon";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <LogoIcon />

      <h1 className="text-heading text-4xl font-semibold">Login</h1>
      <p className="text-base text-font-primary-400 mt-3">
        Login before you place an order partner.
      </p>

      <Form />
    </div>
  );
}

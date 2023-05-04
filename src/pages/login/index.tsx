import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import LogoIcon from "@/components/atoms/LogoIcon";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
      <LogoIcon isBig />

      <h1 className="text-heading text-4xl font-semibold">Login</h1>
      <p className="text-base text-font-primary-400 mt-3">
        Login before you place an order partner.
      </p>

      <form className="w-96 mt-8">
        <div className="mb-6">
          <Input
            id="emailOrUsername"
            type="text"
            isLabel={true}
            labelName="Email or Username"
            placeholder="Enter your email or username"
            required
          />
        </div>
        <div className="mb-8">
          <Input
            id="password"
            type="password"
            isLabel={true}
            labelName="Password"
            placeholder="Enter your password"
            required
          />
        </div>
        <Button isPrimary type="submit" text="Login" className="mb-3" />
        <Button type="submit" text="Register" />
      </form>
    </div>
  );
}
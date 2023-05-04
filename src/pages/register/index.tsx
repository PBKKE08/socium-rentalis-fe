import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import LogoIcon from "@/components/atoms/LogoIcon";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
      <LogoIcon isBig />

      <h1 className="text-heading text-4xl font-semibold">Register</h1>
      <p className="text-base text-font-primary-400 mt-3">
        Register if you don't have an account yet.
      </p>

      <form className="w-96 mt-8">
        <div className="mb-6">
          <Input
            id="name"
            type="text"
            isLabel={true}
            labelName="Name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-6">
          <Input
            id="username"
            type="text"
            isLabel={true}
            labelName="Username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-6">
          <Input
            id="phone"
            type="tel"
            isLabel={true}
            labelName="Phone Number"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-6">
          <Input
            id="email"
            type="email"
            isLabel={true}
            labelName="Email Address"
            placeholder="Enter your email address"
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
        <Button isPrimary type="submit" text="Register" className="mb-3" />
        <Button type="submit" text="Login" />
      </form>
    </div>
  );
}

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import LogoIcon from "@/components/atoms/LogoIcon";
import Select from "@/components/atoms/Select";
import ImageInput from "@/components/organism/ImageInput";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
      <Link href="/">
        <LogoIcon isBig />
      </Link>

      <h1 className="text-heading text-4xl font-semibold">Register</h1>
      <p className="text-base text-font-primary-400 mt-3">
        Register if you don't have an account yet.
      </p>

      <form className="w-full md:w-96 mt-8">
        <div className="mb-6 flex flex-col items-center justify-center">
          <ImageInput />
        </div>
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
            id="dateOfBirth"
            type="date"
            isLabel={true}
            labelName="Date of Birth"
            placeholder="Enter your date of birth"
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
        <div className="mb-8">
          <Select isLabel={true} required labelName="Gender">
            <option defaultValue="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </div>
        <Button isPrimary type="submit" className="mb-3">
          Register
        </Button>
        <Button href="/login">Login</Button>
      </form>
    </div>
  );
}

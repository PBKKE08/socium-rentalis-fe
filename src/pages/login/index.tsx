import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import LogoIcon from "@/components/atoms/LogoIcon";
import { validateEmail, validatePassword } from "@/lib/validation";
import { postLogin } from "@/services/auth";
import { saveTokenToCookies } from "@/services/token";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });

    if (email === "" || password === "")
      return alert("Please fill all the fields");
    if (!validateEmail(email) || !validatePassword(password))
      return alert("Login failed");

    const data = {
      email,
      password,
    };

    console.log({ data });

    const result: any = await postLogin(data);

    if (result.error) {
      console.log(result);
      return alert(result.message);
    } else {
      // console.log(result.data.token);
      saveTokenToCookies(result.data.token);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
      <Link href="/">
        <LogoIcon isBig />
      </Link>

      <h1 className="text-heading text-4xl font-semibold">Login</h1>
      <p className="text-base text-font-primary-400 mt-3">
        Login before you place an order partner.
      </p>

      <form className="w-full md:w-96 mt-8" onSubmit={handleSubmit}>
        <div className="mb-6">
          <Input
            id="emailOrUsername"
            type="text"
            isLabel={true}
            labelName="Email or Username"
            placeholder="Enter your email or username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button isPrimary type="submit" className="mb-3">
          Login
        </Button>
        <Button href="/register">Register</Button>
      </form>
    </div>
  );
}

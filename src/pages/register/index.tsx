import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import LogoIcon from "@/components/atoms/LogoIcon";
import Select from "@/components/atoms/Select";
import ImageInput from "@/components/organism/ImageInput";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/lib/validation";
import { postSignUp } from "@/services/auth";
import { getPublicData } from "@/services/users";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function Register() {
  const [cities, setCities] = useState([]); // [{id: "", name: ""}
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("m");
  const [city, setCity] = useState("");

  const router = useRouter();

  const getCities = useCallback(async () => {
    const result: any = await getPublicData(true, false);
    setCities(result.data);
    setCity(result.data[0].id);
  }, [getPublicData]);

  useEffect(() => {
    getCities();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ name, phone, email, password, gender, city });
    if (
      name === "" ||
      phone === "" ||
      email === "" ||
      password === "" ||
      gender === "" ||
      city === ""
    )
      return alert("Please fill all the fields");
    if (!validateEmail(email))
      return alert("Please enter a valid email address");
    if (!validatePhone(phone))
      return alert("Please enter a valid phone number");
    if (!validatePassword(password))
      return alert("Password must be at least 8 characters long");

    //     {
    //     "name": "Samuel",
    //     "phone_number": "0123-12903",
    //     "email": "samuelhotang02@gmail.com",
    //     "gender": "m",
    //     "city_id": "03b8552d-7905-4ce6-93c0-7d49538e5e0b",
    //     "password": "test123"
    // }

    const data = {
      name,
      phone_number: phone,
      email,
      gender,
      city_id: city,
      password,
    };
    // console.log({ data });
    const result: any = await postSignUp(data);

    if (result.error) {
      // console.log(result);
      return alert(result.message);
    } else return router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
      <Link href="/">
        <LogoIcon isBig />
      </Link>

      <h1 className="text-heading text-4xl font-semibold">Register</h1>
      <p className="text-base text-font-primary-400 mt-3">
        Register if you don't have an account yet.
      </p>

      <form className="w-full md:w-96 mt-8" onSubmit={handleSubmit}>
        {/* <div className="mb-6 flex flex-col items-center justify-center">
          <ImageInput />
        </div> */}
        <div className="mb-6">
          <Input
            id="name"
            type="text"
            isLabel={true}
            labelName="Name"
            placeholder="Enter your name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
        <div className="mb-8">
          <Select
            isLabel={true}
            required
            labelName="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            id="gender"
          >
            <option defaultValue="m" disabled>
              Select your gender
            </option>
            <option value="m">Male</option>
            <option value="f">Female</option>
          </Select>
        </div>
        <div className="mb-8">
          <Select
            isLabel={true}
            required
            labelName="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            id="city"
          >
            <option defaultValue="" disabled>
              Select your City
            </option>
            {cities.map((city: any) => (
              <option value={city.id} key={city.id}>
                {city.name}
              </option>
            ))}
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

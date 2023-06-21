import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import LogoIcon from "@/components/atoms/LogoIcon";
import Select from "@/components/atoms/Select";
import TextareaForm from "@/components/organism/BookingForm/TextareaForm";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/lib/validation";
import { partnerSignUp } from "@/services/partners";
import { removeTokenFromCookies } from "@/services/token";
import { getPublicData } from "@/services/users";
// import PartnerRegisterItem from "@/components/organism/PartnerRegisterItem";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function PartnerRegister() {
  const [cities, setCities] = useState([]); // [{id: "", name: ""}
  const [categories, setCategories] = useState([]); // [{id: "", name: ""}
  const [category, setCategory] = useState(""); // [{id: "", name: ""}
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("m");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [textReview, setTextReview] = useState("");

  const router = useRouter();
  const getDataDropdown = useCallback(async () => {
    const result: any = await getPublicData(true, true);
    // console.log(result);
    setCities(result.data.cities);
    setCategories(result.data.categories);
    setCity(result.data.cities[0].id);
    setCategory(result.data.categories[0].id);
  }, [getPublicData, cities, categories]);

  useEffect(() => {
    removeTokenFromCookies();
    getDataDropdown();
  }, [cities, categories]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      name === "" ||
      phone === "" ||
      email === "" ||
      password === "" ||
      gender === "" ||
      city === "" ||
      category === "" ||
      textReview === "" ||
      price === ""
    )
      return alert("Please fill all the fields");
    if (!validateEmail(email))
      return alert("Please enter a valid email address");
    if (!validatePhone(phone))
      return alert("Please enter a valid phone number");
    if (!validatePassword(password))
      return alert("Password must be at least 8 characters long");

    const data = {
      name,
      email,
      password,
      telephone: phone,
      gender,
      category_id: category,
      price,
      city_id: city,
      description: textReview,
    };

    const result: any = await partnerSignUp(data);
    if (result.error) {
      // console.log(result);
      return alert(result.message);
    } else return router.push("/partners/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16 w-full md:w-1/2 mx-auto">
      <Link href="/">
        <LogoIcon isBig />
      </Link>

      <h1 className="text-heading text-4xl font-semibold">Partner Register</h1>
      <p className="text-base text-font-primary-400 mt-3 mb-10">
        Register if you are not partner.
      </p>

      <form className="w-full md:w-96 mt-8" onSubmit={handleSubmit}>
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
        <div className="mb-6">
          <Input
            id="price"
            type="number"
            isLabel={true}
            labelName="Price"
            placeholder="Enter your price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <Select
            isLabel={true}
            required
            labelName="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
          >
            <option defaultValue="" disabled>
              Select your Category
            </option>
            {categories.map((item: any) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
        </div>
        <div className="mb-8">
          <TextareaForm
            value={textReview}
            onChange={(e) => setTextReview(e.target.value)}
          />
        </div>
        <div className="mb-8"></div>
        <Button isPrimary type="submit" className="mb-3">
          Register
        </Button>
        <Button href="/partners/login">Back to Login</Button>
      </form>
    </div>
  );
}

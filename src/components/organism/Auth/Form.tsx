import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

export default function Form() {
  return (
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
  );
}

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";
import { useState } from "react";

type FilterFormProps = {
  className?: string;
};

export default function FilterForm({ className }: FilterFormProps) {
  const [inputValue, setInputValue] = useState("");
  const [selectGender, setSelectGender] = useState("all");
  const [selectCategory, setSelectCategory] = useState("all");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ inputValue });
    console.log({ selectGender });
    console.log({ selectCategory });
  };

  return (
    <div className={className}>
      <form
        action=""
        className={`bg-font-primary-50 w-full rounded-xl flex justify-center items-center gap-4 px-4 py-2 flex-wrap lg:flex-nowrap`}
        onSubmit={submitHandler}
      >
        <Input
          id="search"
          placeholder="Search Partner by Name"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Select
          value={selectGender}
          onChange={(e) => setSelectGender(e.target.value)}
        >
          <option defaultValue="all">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <Select
          value={selectCategory}
          onChange={(e) => setSelectCategory(e.target.value)}
        >
          <option defaultValue="all">Select Category</option>
          <option value="cars">Cars</option>
          <option value="bike">Bike</option>
        </Select>

        <Button type="submit" isPrimary>
          Apply Filters
        </Button>
      </form>
    </div>
  );
}

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";
import { useState } from "react";

type FilterFormProps = {
  className?: string;
  query: QueryFilter;
  setQuery: (query: any) => void;
};

export default function FilterForm({
  className,
  query,
  setQuery,
}: FilterFormProps) {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(query.area);
    console.log(query.gender);
    console.log(query.category);
  };

  return (
    <div className={className}>
      <form
        action=""
        className={`bg-font-primary-50 w-full rounded-xl flex justify-center items-center gap-4 px-4 py-2 flex-wrap lg:flex-nowrap`}
        onSubmit={submitHandler}
      >
        <Select
          value={query.area}
          onChange={(e) => setQuery({ ...query, area: e.target.value })}
        >
          <option value="all">Select Area</option>
          <option value="Bandung">Bandung</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Surabaya">Surabaya</option>
          <option value="Jogjakarta">Jogjakarta</option>
          <option value="Malang">Malang</option>
        </Select>
        <Select
          value={query.gender}
          onChange={(e) => setQuery({ ...query, gender: e.target.value })}
        >
          <option value="all">Select Gender</option>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </Select>

        <Select
          value={query.category}
          onChange={(e) => setQuery({ ...query, category: e.target.value })}
        >
          <option value="all">Select Category</option>
          <option value="Prom">Prom</option>
          <option value="Wedding">Wedding</option>
          <option value="Default">Default</option>
          <option value="Party">Party</option>
        </Select>

        <Button type="submit" isPrimary>
          Apply Filters
        </Button>
      </form>
      <p className="text-heading mt-8">
        Show search by {query.area !== "all" ? `area: ${query.area}` : ""}{" "}
        {query.gender !== "all" ? `gender: ${query.gender}` : ""}{" "}
        {query.category !== "all" ? `category: ${query.category}` : ""}
      </p>
    </div>
  );
}

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";
import { getPublicData } from "@/services/users";
import { useCallback, useEffect, useState } from "react";

type FilterFormProps = {
  className?: string;
  setQuery: (query: any) => void;
};

export default function FilterForm({ className, setQuery }: FilterFormProps) {
  const [categories, setCategories] = useState<any>([]);
  const [areas, setAreas] = useState<any>([]);
  const [categoryFilter, setCategoryFilter] = useState<any>("");
  const [areaFilter, setAreaFilter] = useState<any>("");
  const [genderFilter, setGenderFilter] = useState<any>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery({
      area: areaFilter,
      gender: genderFilter,
      category: categoryFilter,
    });
  };

  const getDataDropdown = useCallback(async () => {
    const result: any = await getPublicData(true, true);
    console.log(result);
    setAreas(result.data.cities);
    setCategories(result.data.categories);
  }, [getPublicData, areas, categories]);

  useEffect(() => {
    getDataDropdown();
  }, [areas, categories]);

  return (
    <div className={className}>
      <form
        action=""
        className={`bg-font-primary-50 w-full rounded-xl flex justify-center items-center gap-4 px-4 py-2 flex-wrap lg:flex-nowrap`}
        onSubmit={submitHandler}
      >
        {areas && (
          <Select
            value={areaFilter}
            onChange={(e) => setAreaFilter(e.target.value)}
          >
            <option value="all">Select Area</option>
            {areas.map((area: any) => (
              <option key={area.id} value={area.name}>
                {area.name}
              </option>
            ))}
          </Select>
        )}
        <Select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="all">Select Gender</option>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </Select>

        {categories && (
          <Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">Select Category</option>
            {categories.map((category: any) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </Select>
        )}

        <Button type="submit" isPrimary>
          Apply Filters
        </Button>
      </form>
      <p className="text-heading mt-8">
        Show search by {areaFilter !== "all" ? `area: ${areaFilter}, ` : ""}{" "}
        {genderFilter !== "all"
          ? `gender: ${genderFilter === "f" ? "female, " : "male, "} `
          : ""}{" "}
        {categoryFilter !== "all" ? `category: ${categoryFilter}` : ""}
      </p>
    </div>
  );
}

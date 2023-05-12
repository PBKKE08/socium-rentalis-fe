import Label from "./Label";
import styles from "@/styles/Select.module.css";

type SelectProps = {
  isLabel?: boolean;
  labelName?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  isLabel,
  labelName,
  id = "",
  name,
  ...props
}: SelectProps) {
  return (
    <>
      {isLabel && <Label htmlFor={id} labelName={labelName} />}
      <select
        id={id}
        name={name}
        className={
          "border border-font-primary-300 text-heading rounded-full focus:ring-primary-200 focus:border-primary-200 block w-full px-4 py-3 text-base transition duration-500 outline-none " +
          styles.select
        }
        aria-label={name}
        {...props}
      >
        <option value="" disabled selected>
          Select your gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </>
  );
}

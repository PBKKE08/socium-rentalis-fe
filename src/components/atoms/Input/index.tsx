import Label from "./Label";

interface InputProps {
  type: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  isLabel?: boolean;
  labelName?: string;
}

export default function Input({
  type,
  id,
  placeholder,
  required = false,
  isLabel,
  labelName,
}: InputProps) {
  return (
    <>
      {isLabel && <Label htmlFor={id} labelName={labelName} />}
      <input
        type={type}
        id={id}
        className="border border-font-primary-300 text-heading rounded-full focus:ring-primary-200 focus:border-primary-200 block w-full px-4 py-3 text-base transition duration-300 outline-none"
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}
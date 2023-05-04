interface LabelProps {
  htmlFor: string;
  labelName?: string;
}

export default function Label({ htmlFor, labelName }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="block mb-4 font-medium text-heading">
      {labelName}
    </label>
  );
}

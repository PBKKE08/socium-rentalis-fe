interface ButtonProps {
  type?: "submit" | "button" | "reset";
  isPrimary?: boolean;
  text: string;
  className?: string;
}

export default function Button({
  type,
  isPrimary,
  text,
  className,
}: ButtonProps) {
  if (isPrimary)
    return (
      <button
        {...(type && { type })}
        className={`text-white bg-primary-200 hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-primary-200 rounded-full w-full block px-5 py-3 text-center transition duration-300 ${className}`}
      >
        {text}
      </button>
    );

  return (
    <button
      {...(type && { type })}
      className={`text-heading bg-primary-100 hover:bg-pink-200 focus:ring-4 focus:outline-none focus:ring-primary-100 rounded-full w-full block px-5 py-3 text-center transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
}

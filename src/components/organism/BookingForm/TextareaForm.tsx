type TextareaFormProps = {} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextareaForm({ ...props }: TextareaFormProps) {
  return (
    <>
      <label
        htmlFor="bookingMessage"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your message
      </label>
      <textarea
        {...props}
        id="bookingMessage"
        className="border border-font-primary-300 text-heading rounded-xl focus:ring-primary-200 focus:border-primary-200 block w-full px-4 py-3 text-base transition duration-500 outline-none"
        placeholder="Write your message here..."
      ></textarea>
    </>
  );
}

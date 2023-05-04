export default function Input() {
  return (
    <>
      <label
        htmlFor="emailOrUsername"
        className="block mb-4 font-medium text-heading"
      >
        Email or Username
      </label>
      <input
        type="text"
        id="emailOrUsername"
        className="border border-font-primary-300 text-heading rounded-full focus:ring-primary-200 focus:border-primary-200 block w-full px-4 py-3 text-base"
        placeholder="Enter your email or username"
        required
      />
    </>
  );
}

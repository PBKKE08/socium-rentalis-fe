import CardTransaction from "../../CardTransaction";

export default function History() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 pb-8 px-4 container mx-auto">
      <CardTransaction />
      <CardTransaction />
      <CardTransaction />
      <CardTransaction />
    </div>
  );
}

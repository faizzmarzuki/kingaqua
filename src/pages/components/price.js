import CardPrice from "./priceCard";

export default function Prices() {
  return (
    <div className="bg-blue-700">
      <h1 className="text-center font-bold text-5xl py-48 text-white">Prices</h1>
      <div class="flex flex-row">
        <CardPrice/>
        <CardPrice/>
        <CardPrice/>
      </div>
    </div>
  );
}

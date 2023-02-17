import ServicesCard from "./servicesCard";

export default function Services() {
  return (
    <div className="bg-blue-700 py-10">
      <h1 className="font-bold text-5xl pb-10 text-center text-white">
        Services
      </h1>
      <div className="flex flex-row gap-5 justify-center">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  );
}

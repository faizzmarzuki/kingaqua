import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-row ml-48">
      <div className="py-48 basis-1/2">
        <h1 className="text-gray-900 font-bold text-5xl mb-5">Make a Splash with Us - Dive into the Best Swimming Academy!</h1>
        <h2 className=" text-gray-500 text-justify font-medium text-2xl">
        We provide personal and group swimming class, autisme water therapeia, also lifesaver and basic lifeguard.
        </h2>
        <button className="mt-5 bg-blue-700 py-3 px-6 rounded-lg hover:bg-blue-900">
            <span className="font-semibold text-lg text-white">Register</span>
        </button>
      </div>
      <div className="basis-1/2 flex justify-center">
            <Image src="https://images.unsplash.com/photo-1622979857654-9363bb0a1243?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80" width={480} height={720} className="mx-auto my-10  rounded-lg"/>
      </div>
    </div>
  );
}

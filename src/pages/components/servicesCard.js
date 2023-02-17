import Image from "next/image";
import React from "react";

export default function ServicesCard() {
  return (
    <div class="w-[434px]">
      <div class="bg-white rounded-lg shadow-lg p-4">
        <Image
          src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          width={434}
          height={289}
          class="object-cover rounded-lg"
        />
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
        Lorem ipsum dolor sit amet
        </h2>
        <p class="text-lg sm:text-xl md:text-2xl mt-4">Fusce vehicula, dui sit amet dignissim varius, mauris nulla vestibulum purus, vitae commodo orci lorem a ipsum. Vestibulum vel lacus vitae ipsum commodo iaculis. Sed sit amet nisl sed nunc ullamcorper rhoncus. Morbi eget pharetra enim. Nullam vitae mauris at sem ultrices malesuada.</p>
      </div>
    </div>
  );
}

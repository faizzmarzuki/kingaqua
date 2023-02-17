import React from "react";

function CardPrice() {
  return (
    <div class="max-w-sm w-full md:max-w-lg">
      <div class="flex justify-center">
        <div class="px-6 py-8 bg-white rounded-lg shadow-md">
          <div class="mb-4">
            <h2 class="text-2xl font-semibold text-gray-700">Basic</h2>
            <p class="text-gray-600 mt-2">$10/month</p>
          </div>
          <ul class="text-sm">
            <li class="mb-2">
              <span class="text-gray-700">1 User</span>
            </li>
            <li class="mb-2">
              <span class="text-gray-700">10 Projects</span>
            </li>
            <li class="mb-2">
              <span class="text-gray-700">2 GB Storage</span>
            </li>
          </ul>
          <button class="block w-full text-center py-4 px-2 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 transition duration-150 ease-in-out mt-4">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPrice;

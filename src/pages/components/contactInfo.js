import React from "react";

export default function ContactInfo() {
  return (
    <div class="bg-white">
      <div class="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="max-w-md">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p class="text-gray-600 mb-4">
              We'd love to hear from you. Get in touch with us using the contact
              information below or by filling out the form.
            </p>
            <ul class="text-gray-600">
              <li class="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 13a5 5 0 110-10 5 5 0 010 10z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>123 Main Street</span>
              </li>
              <li class="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.031 5.858c-.232.112-.43.31-.543.542a2.063 2.063 0 00-.263 1.012v5.162c0 .7.337 1.346.903 1.74l4.596 3.155c.155.107.333.162.506.162.192 0 .385-.053.558-.162l4.596-3.155a2.08 2.08 0 00.904-1.74V7.413c0-.363-.142-.708-.393-.96-.251-.25-.596-.392-.96-.392H2.031zm3.032 1.032h9.874l-4.937 3.39-4.937-3.39zM3.94 7.513l3.816 2.624L3.94 12.76v-5.248zM16 7.857a.571.571 0 100-1.143.571.571 0 000 1.143zM16 10a.571.571 0 100-1.143.571.571 0 000 1.143zM16 12.143a.571.571 0 100-1.143.571.571 0 000 1.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>(555) 555-5555</span>
              </li>
              <li class="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.788 4.175c-.255.18-.464.389-.644.644l-2.565 2.565a2.004 2.004 0 000 2.829l4.322 4.322a2.004 2.004 0 002.829 0l2.565-2.565a2.004 2.004 0 000-2.829l-4.322-4.322a2.002 2.002 0 00-2.184-.446 1.989 1.989 0 00-1.176 1.176c-.235.557-.22 1.186.057 1.712l1.759-1.76a.571.571 0 01.809 0 .571.571 0 010 .809l-1.76 1.759a2.004 2.004 0 00.586 3.28 2.005 2.005 0 002.694-.693l4.322-4.322a2.005 2.005 0 000-2.829l-2.565-2.565a2.004 2.004 0 00-2.829 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
            </ul>
          </div>
          <div class="max-w-md">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              Send us a message
            </h2>
            <form action="#" method="POST">
              <div class="mb-4">
                <label for="name" class="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-input w-full bg-gray-200 rounded-md"
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-input w-full bg-gray-200 rounded-md"
                />
              </div>
              <div class="mb-4">
                <label
                  for="message"
                  class="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="form-textarea w-full  bg-gray-200 rounded-md"
                  rows="4"
                ></textarea>
              </div>
              <div class="text-right">
                <button
                  type="submit"
                  class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 transition duration-150 ease-in-out"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

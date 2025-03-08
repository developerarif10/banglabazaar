"use client";

import Link from "next/link";
import { useState } from "react";

// Dummy address data (replace with actual data fetching)
const addresses = [
  { id: 1, name: "Default", address: "123 Main St, Anytown, CA 91234" },
  { id: 2, name: "Work", address: "456 Oak Ave, Somecity, CA 98765" },
];

const countries = [
  "United States",
  "Canada",
  "Mexico",
  // Add more countries as needed
];

const states = {
  "United States": ["California", "Oregon", "Washington", "Texas"],
  Canada: ["British Columbia", "Alberta", "Ontario", "Quebec"],
  Mexico: ["Jalisco", "Mexico City", "Nuevo León", "Veracruz"],
  // Add more states as needed
};

export default function MyAccountAddresses() {
  const [newAddress, setNewAddress] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    city: "",
    country: "United States",
    state: "California",
    zip: "",
    phone: "",
    isDefault: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewAddress((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call to save address)
    console.log("New address:", newAddress);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Addresses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Existing Addresses</h2>
          <ul>
            {addresses.map((address) => (
              <li key={address.id} className="mb-2">
                <div>{address.name}</div>
                <div>{address.address}</div>
                <Link
                  href={`/my-account/addresses/${address.id}/edit`}
                  className="text-primary underline"
                >
                  Edit
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Add New Address</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={newAddress.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={newAddress.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="company">Company (Optional)</label>
              <input
                type="text"
                id="company"
                name="company"
                value={newAddress.company}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address1">Address</label>
              <input
                type="text"
                id="address1"
                name="address1"
                value={newAddress.address1}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={newAddress.city}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={newAddress.country}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="state">State/Province</label>
              <select
                id="state"
                name="state"
                value={newAddress.state}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              >
                {states[newAddress.country].map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="zip">Zip/Postal Code</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={newAddress.zip}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={newAddress.phone}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <input
                type="checkbox"
                id="isDefault"
                name="isDefault"
                checked={newAddress.isDefault}
                onChange={handleInputChange}
              />
              <label htmlFor="isDefault">Set as default address</label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Address
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

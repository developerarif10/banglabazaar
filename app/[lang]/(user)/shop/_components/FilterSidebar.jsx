"use client";

import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function FilterSidebar({
  filters,
  onFilterChange,
  onClearAll,
  onClose,
}) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    availability: true,
    price: true,
    brand: true,
    color: true,
    size: true,
  });

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  // Price range state
  const [priceRange, setPriceRange] = useState(filters.priceRange);

  // Update price range when filters change
  useEffect(() => {
    setPriceRange(filters.priceRange);
  }, [filters.priceRange]);

  // Handle price range change
  const handlePriceRangeChange = (min, max) => {
    const newRange = [min, max];
    setPriceRange(newRange);
    onFilterChange("priceRange", newRange);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 h-full md:sticky md:top-4 overflow-y-auto scrollbar-hide">
      <div className="flex items-center justify-between mb-6 md:hidden">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span className="inline-block w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </span>
          Filter
        </h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer mb-3"
          onClick={() => toggleSection("categories")}
        >
          <h3 className="font-semibold">Product categories</h3>
          {expandedSections.categories ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>

        {expandedSections.categories && (
          <ul className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide pr-2">
            <li className="text-primary font-medium">
              <a href="#" className="hover:underline">
                Fashion
              </a>
            </li>
            <li className="text-gray-600 hover:text-gray-900">
              <a href="#" className="hover:underline">
                Men
              </a>
            </li>
            <li className="text-gray-600 hover:text-gray-900">
              <a href="#" className="hover:underline">
                Women
              </a>
            </li>
            <li className="text-gray-600 hover:text-gray-900">
              <a href="#" className="hover:underline">
                Denim
              </a>
            </li>
            <li className="text-gray-600 hover:text-gray-900">
              <a href="#" className="hover:underline">
                Dress
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* Availability */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer mb-3"
          onClick={() => toggleSection("availability")}
        >
          <h3 className="font-semibold">Availability</h3>
          {expandedSections.availability ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>

        {expandedSections.availability && (
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <input
                type="radio"
                id="inStock"
                name="availability"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded-full"
                checked={filters.availability === "In stock"}
                onChange={() => onFilterChange("availability", "In stock")}
              />
              <label htmlFor="inStock" className="text-gray-700">
                In stock <span className="text-gray-500">(14)</span>
              </label>
            </li>
            <li className="flex items-center gap-3">
              <input
                type="radio"
                id="outStock"
                name="availability"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded-full"
                checked={filters.availability === "Out of stock"}
                onChange={() => onFilterChange("availability", "Out of stock")}
              />
              <label htmlFor="outStock" className="text-gray-700">
                Out of stock <span className="text-gray-500">(2)</span>
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Price */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer mb-3"
          onClick={() => toggleSection("price")}
        >
          <h3 className="font-semibold">Price</h3>
          {expandedSections.price ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>

        {expandedSections.price && (
          <div>
            <div className="relative h-2 bg-gray-200 rounded-full mb-6">
              <div
                className="absolute h-full bg-primary rounded-full"
                style={{
                  left: `${(priceRange[0] / 500) * 100}%`,
                  right: `${100 - (priceRange[1] / 500) * 100}%`,
                }}
              ></div>
              <div
                className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -mt-1 cursor-pointer"
                style={{ left: `${(priceRange[0] / 500) * 100}%` }}
              ></div>
              <div
                className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -mt-1 cursor-pointer"
                style={{ left: `${(priceRange[1] / 500) * 100}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                Price: <span className="font-medium">${priceRange[0]}</span> -{" "}
                <span className="font-medium">${priceRange[1]}</span>
              </div>
              <button
                className="text-xs text-primary hover:underline"
                onClick={() => handlePriceRangeChange(0, 500)}
              >
                Reset
              </button>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="w-1/2">
                <input
                  type="number"
                  min="0"
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={(e) =>
                    handlePriceRangeChange(
                      Number(e.target.value),
                      priceRange[1]
                    )
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="number"
                  min={priceRange[0]}
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) =>
                    handlePriceRangeChange(
                      priceRange[0],
                      Number(e.target.value)
                    )
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Brand */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer mb-3"
          onClick={() => toggleSection("brand")}
        >
          <h3 className="font-semibold">Brand</h3>
          {expandedSections.brand ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>

        {expandedSections.brand && (
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <input
                type="radio"
                id="brandEcomus"
                name="brand"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded-full"
                checked={filters.brand === "Ecomus"}
                onChange={() => onFilterChange("brand", "Ecomus")}
              />
              <label htmlFor="brandEcomus" className="text-gray-700">
                Ecomus <span className="text-gray-500">(8)</span>
              </label>
            </li>
            <li className="flex items-center gap-3">
              <input
                type="radio"
                id="brandMH"
                name="brand"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded-full"
                checked={filters.brand === "M&H"}
                onChange={() => onFilterChange("brand", "M&H")}
              />
              <label htmlFor="brandMH" className="text-gray-700">
                M&H <span className="text-gray-500">(8)</span>
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Color */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer mb-3"
          onClick={() => toggleSection("color")}
        >
          <h3 className="font-semibold">Color</h3>
          {expandedSections.color ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>

        {expandedSections.color && (
          <ul className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide pr-2">
            {[
              { name: "Beige", value: "bg-[#F5F5DC]" },
              { name: "Black", value: "bg-black" },
              { name: "Blue", value: "bg-blue-500" },
              { name: "Brown", value: "bg-[#964B00]" },
              { name: "Cream", value: "bg-[#FFFDD0]" },
              { name: "Dark Beige", value: "bg-[#D2B48C]" },
              { name: "Dark Blue", value: "bg-blue-900" },
              { name: "Dark Green", value: "bg-green-800" },
              { name: "Dark Grey", value: "bg-gray-700" },
              { name: "Grey", value: "bg-gray-500" },
              { name: "Light Blue", value: "bg-blue-300" },
              { name: "Light Green", value: "bg-green-300" },
              { name: "Light Grey", value: "bg-gray-300" },
              { name: "Light Pink", value: "bg-pink-200" },
              { name: "Light Purple", value: "bg-purple-300" },
              { name: "Light Yellow", value: "bg-yellow-200" },
              { name: "Orange", value: "bg-orange-500" },
              { name: "Pink", value: "bg-pink-500" },
              { name: "White", value: "bg-white" },
              { name: "Yellow", value: "bg-yellow-400" },
            ].map((color) => (
              <li key={color.name} className="flex items-center gap-3">
                <input
                  type="radio"
                  id={`color${color.name}`}
                  name="color"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded-full"
                  checked={filters.color === color.name}
                  onChange={() => onFilterChange("color", color.name)}
                />
                <label
                  htmlFor={`color${color.name}`}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span
                    className={`inline-block w-5 h-5 rounded-full ${color.value} border border-gray-200`}
                  ></span>
                  {color.name}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Size */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer mb-3"
          onClick={() => toggleSection("size")}
        >
          <h3 className="font-semibold">Size</h3>
          {expandedSections.size ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>

        {expandedSections.size && (
          <ul className="space-y-2">
            {["S", "M", "L", "XL"].map((size) => (
              <li key={size} className="flex items-center gap-3">
                <input
                  type="radio"
                  id={`size${size}`}
                  name="size"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded-full"
                  checked={filters.size === size}
                  onChange={() => onFilterChange("size", size)}
                />
                <label htmlFor={`size${size}`} className="text-gray-700">
                  {size}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Clear All Button */}
      <button
        onClick={onClearAll}
        className="w-full py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors mt-4"
      >
        Clear All Filters
      </button>
    </div>
  );
}

"use client";

import {
  ChevronDown,
  ChevronUp,
  Filter,
  Grid2X2,
  Grid3X3,
  Grid2x2XIcon as Grid4X4,
  List,
} from "lucide-react";
import { useEffect, useState } from "react";
import FilterSidebar from "./FilterSidebar";
import ProductCard from "./ProductCard";

export default function ShopClient({ products }) {
  const [layout, setLayout] = useState("grid-3");
  const [sortBy, setSortBy] = useState("Featured");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    availability: "",
    priceRange: [0, 500],
    brand: "",
    color: "",
    size: "",
  });

  // Prevent body scroll when filter sidebar is open on mobile
  useEffect(() => {
    if (showFilterSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showFilterSidebar]);

  // Handle layout change
  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  // Handle sort change
  const handleSortChange = (option) => {
    setSortBy(option);
    setShowSortDropdown(false);

    // Sort products based on selected option
    let sortedProducts = [...filteredProducts];

    switch (option) {
      case "Best selling":
        // In a real app, you would sort by sales data
        break;
      case "Alphabetically, A-Z":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Alphabetically, Z-A":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Price, low to high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "Price, high to low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // Featured - default order
        sortedProducts = [...products];
    }

    setFilteredProducts(sortedProducts);
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    // Apply filters
    let result = [...products];

    if (newFilters.availability) {
      result = result.filter(
        (product) => product.availability === newFilters.availability
      );
    }

    if (newFilters.brand) {
      result = result.filter((product) => product.brand === newFilters.brand);
    }

    if (newFilters.color) {
      result = result.filter(
        (product) =>
          product.colors &&
          product.colors.some((color) => color.name === newFilters.color)
      );
    }

    if (newFilters.size) {
      result = result.filter(
        (product) => product.sizes && product.sizes.includes(newFilters.size)
      );
    }

    // Price range filter
    result = result.filter(
      (product) =>
        product.price >= newFilters.priceRange[0] &&
        product.price <= newFilters.priceRange[1]
    );

    setFilteredProducts(result);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      availability: "",
      priceRange: [0, 500],
      brand: "",
      color: "",
      size: "",
    });
    setFilteredProducts(products);
  };

  // Toggle filter sidebar on mobile
  const toggleFilterSidebar = () => {
    setShowFilterSidebar(!showFilterSidebar);
  };

  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Shop Controls */}
          <div className="grid grid-cols-3 items-center mb-8">
            <div></div>
            <div className="flex justify-center">
              <ul className="flex border border-gray-200 rounded-md">
                <li
                  className={`cursor-pointer p-2 ${
                    layout === "list"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleLayoutChange("list")}
                >
                  <List className="h-5 w-5" />
                </li>
                <li
                  className={`cursor-pointer p-2 ${
                    layout === "grid-2"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleLayoutChange("grid-2")}
                >
                  <Grid2X2 className="h-5 w-5" />
                </li>
                <li
                  className={`cursor-pointer p-2 ${
                    layout === "grid-3"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleLayoutChange("grid-3")}
                >
                  <Grid3X3 className="h-5 w-5" />
                </li>
                <li
                  className={`cursor-pointer p-2 ${
                    layout === "grid-4"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleLayoutChange("grid-4")}
                >
                  <Grid4X4 className="h-5 w-5" />
                </li>
              </ul>
            </div>
            <div className="flex justify-end">
              <div className="relative">
                <button
                  className="flex items-center gap-2 border border-gray-200 rounded-md px-4 py-2"
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                >
                  <span>{sortBy}</span>
                  {showSortDropdown ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {showSortDropdown && (
                  <div className="absolute right-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {[
                      "Featured",
                      "Best selling",
                      "Alphabetically, A-Z",
                      "Alphabetically, Z-A",
                      "Price, low to high",
                      "Price, high to low",
                      "Date, old to new",
                      "Date, new to old",
                    ].map((option) => (
                      <div
                        key={option}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                          sortBy === option ? "font-semibold" : ""
                        }`}
                        onClick={() => handleSortChange(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter Sidebar */}
            <div
              className={`md:w-1/4 lg:w-1/5 ${
                showFilterSidebar
                  ? "block fixed inset-0 z-40 md:static md:z-auto"
                  : "hidden md:block"
              }`}
            >
              <div className="h-full md:min-h-[calc(100vh-120px)]">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearAll={clearAllFilters}
                  onClose={() => setShowFilterSidebar(false)}
                />
              </div>
            </div>

            {/* Product Grid/List */}
            <div className="md:w-3/4 lg:w-4/5">
              {/* Applied Filters */}
              {Object.values(filters).some(
                (value) =>
                  value !== "" &&
                  (Array.isArray(value)
                    ? value[0] !== 0 || value[1] !== 500
                    : true)
              ) && (
                <div className="flex flex-wrap items-center gap-2 mb-6 p-4 bg-gray-50 rounded-md">
                  <span className="text-sm text-gray-600">
                    Applied filters:
                  </span>
                  {filters.availability && (
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm border">
                      <span>Availability: {filters.availability}</span>
                      <button
                        onClick={() => handleFilterChange("availability", "")}
                      >
                        ×
                      </button>
                    </div>
                  )}
                  {filters.brand && (
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm border">
                      <span>Brand: {filters.brand}</span>
                      <button onClick={() => handleFilterChange("brand", "")}>
                        ×
                      </button>
                    </div>
                  )}
                  {filters.color && (
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm border">
                      <span>Color: {filters.color}</span>
                      <button onClick={() => handleFilterChange("color", "")}>
                        ×
                      </button>
                    </div>
                  )}
                  {filters.size && (
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm border">
                      <span>Size: {filters.size}</span>
                      <button onClick={() => handleFilterChange("size", "")}>
                        ×
                      </button>
                    </div>
                  )}
                  {(filters.priceRange[0] !== 0 ||
                    filters.priceRange[1] !== 500) && (
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm border">
                      <span>
                        Price: ${filters.priceRange[0]} - $
                        {filters.priceRange[1]}
                      </span>
                      <button
                        onClick={() =>
                          handleFilterChange("priceRange", [0, 500])
                        }
                      >
                        ×
                      </button>
                    </div>
                  )}
                  <button
                    onClick={clearAllFilters}
                    className="ml-auto text-sm text-primary hover:underline"
                  >
                    Remove All ×
                  </button>
                </div>
              )}

              {/* Product Count */}
              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                </p>
              </div>

              {/* Products */}
              {layout === "list" ? (
                <div className="space-y-6 overflow-hidden">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      layout="list"
                    />
                  ))}
                </div>
              ) : (
                <div
                  className={`grid ${
                    layout === "grid-2"
                      ? "grid-cols-1 sm:grid-cols-2"
                      : layout === "grid-3"
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  } gap-6 overflow-hidden`}
                >
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      layout="grid"
                    />
                  ))}
                </div>
              )}

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl font-medium mb-4">No products found</p>
                  <p className="text-gray-500 mb-6">
                    Try changing your filters or search criteria
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Button */}
      <div className="fixed bottom-20 left-4 md:hidden z-40">
        <button
          onClick={toggleFilterSidebar}
          className="flex items-center gap-2 bg-white border border-gray-200 shadow-lg rounded-full px-4 py-2"
        >
          <Filter className="h-5 w-5" />
          <span className="font-medium">Filter</span>
        </button>
      </div>

      {/* Overlay for mobile filter */}
      {showFilterSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setShowFilterSidebar(false)}
        ></div>
      )}
    </>
  );
}

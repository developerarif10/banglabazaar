"use client";

export default function Error({ reset, error }) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">
          Something Went Wrong!
        </h2>
        <p className="text-lg text-gray-700">
          An unexpected error has occurred. Please try again later.
        </p>
        <p className="text-red-500 my-4 font-medium">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

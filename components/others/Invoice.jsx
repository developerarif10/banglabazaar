"use client";
import { Printer } from "lucide-react";
import Image from "next/image";

export default function Invoice() {
  return (
    <section className="invoice-section">
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Print Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Printer className="w-5 h-5 mr-2" />
              Print this invoice
            </button>
          </div>

          {/* Invoice Box */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header Section */}
            <div className="p-8 lg:p-12">
              {/* Logo and Invoice Number */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
                <div className="mb-4 sm:mb-0">
                  <Image src="/logo.svg" alt="logo" width={100} height={80} />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-gray-500">Invoice #</span>
                  <span className="text-xl font-semibold text-gray-900">
                    0043128641
                  </span>
                </div>
              </div>

              {/* Dates */}
              <div className="flex flex-col sm:flex-row justify-between mb-12">
                <div>
                  <label className="block text-sm text-gray-500">
                    Invoice date:
                  </label>
                  <span className="text-gray-900">03/10/2024</span>
                </div>
                <div className="mt-4 sm:mt-0">
                  <label className="block text-sm text-gray-500">
                    Due date:
                  </label>
                  <span className="text-gray-900">03/10/2024</span>
                </div>
              </div>

              {/* Supplier and Customer Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Supplier
                  </h2>
                  <div className="text-gray-900 font-medium mb-1">
                    Jobio LLC
                  </div>
                  <p className="text-gray-600">
                    2301 Ravenswood Rd Madison,
                    <br />
                    WI 53711
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Customer
                  </h2>
                  <div className="text-gray-900 font-medium mb-1">John Doe</div>
                  <p className="text-gray-600">
                    329 Queensberry Street, North Melbourne
                    <br />
                    VIC 3051, Australia.
                  </p>
                </div>
              </div>

              {/* Invoice Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 rounded-l-lg">
                        Description
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                        Price
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                        VAT (20%)
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 rounded-r-lg">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        Standard Plan
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">
                        $443.00
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">
                        $921.80
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">
                        $9,243
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        Extra Plan
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">
                        $413.00
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">
                        $912.80
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">
                        $5,943
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        Total Due
                      </td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">
                        $9,750
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-8 py-6">
              <ul className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
                <li className="text-blue-600">www.ecomus.com</li>
                <li>invoice@ecomus.com</li>
                <li>(123) 123-456</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

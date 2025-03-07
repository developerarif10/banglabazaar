import { Calendar, Check, CreditCard, Mail, Phone, X } from "lucide-react";
const paymentDetails = {
  date: "01/01/2024",
  method: "Visa",
  cardNumber: "**** **** **** 9999",
  cardholderName: "Themesflat",
  email: "info@fashionshop.com",
  phone: "(212) 555-1234",
  subtotal: "$188.00 USD",
};
export default function PaymentConfirmation() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-900">
              Payment confirmation
            </h1>
          </div>

          {/* Payment Details */}
          <div className="px-6 py-6 space-y-4">
            {/* Date */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Date</span>
              </div>
              <span className="text-gray-900">{paymentDetails.date}</span>
            </div>

            {/* Payment Method */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <CreditCard className="w-5 h-5" />
                <span className="font-medium">Payment method</span>
              </div>
              <span className="text-gray-900">{paymentDetails.method}</span>
            </div>

            {/* Card Number */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <span className="font-medium">Card number</span>
              </div>
              <span className="text-gray-900 font-mono">
                {paymentDetails.cardNumber}
              </span>
            </div>

            {/* Cardholder Name */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <span className="font-medium">Cardholder name</span>
              </div>
              <span className="text-gray-900">
                {paymentDetails.cardholderName}
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email</span>
              </div>
              <span className="text-gray-900">{paymentDetails.email}</span>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5" />
                <span className="font-medium">Phone</span>
              </div>
              <span className="text-gray-900">{paymentDetails.phone}</span>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">
                Subtotal
              </span>
              <span className="text-lg font-semibold text-gray-900">
                {paymentDetails.subtotal}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <button
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => console.log("Cancel payment")}
              >
                <X className="w-4 h-4" />
                <span>Cancel Payment</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                onClick={() => console.log("Confirm payment")}
              >
                <Check className="w-4 h-4" />
                <span>Confirm Payment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

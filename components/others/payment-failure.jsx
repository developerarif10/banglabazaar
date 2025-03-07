import { AlertOctagon, ArrowRight } from "lucide-react";
const paymentDetails = {
  date: "01/01/2024",
  method: "Visa",
  cardNumber: "**** **** **** 9999",
  cardholderName: "Themesflat",
  email: "info@fashionshop.com",
  phone: "(212) 555-1234",
  subtotal: "$188.00 USD",
};

export default function PaymentFailure() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0">
                <AlertOctagon className="w-12 h-12 text-red-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Payment Failure
              </h2>
            </div>

            {/* Message */}
            <p className="text-gray-600 mb-8">
              Hey there. We tried to charge your card but something went wrong.
              Please update your payment method below to continue.
            </p>

            {/* Actions */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <span>Update Payment Method</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-gray-600">
                Have a question?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

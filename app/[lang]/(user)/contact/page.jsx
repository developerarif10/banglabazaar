"use client";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Store Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Visit Our Store
            </h2>

            {/* Address */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <p className="font-semibold text-gray-900">Address</p>
              </div>
              <p className="text-gray-600 ml-7">
                66 Mott St, New York, New York, Zip Code: 10006, AS
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <p className="font-semibold text-gray-900">Phone</p>
              </div>
              <p className="text-gray-600 ml-7">(623) 934-2400</p>
            </div>

            {/* Email */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <p className="font-semibold text-gray-900">Email</p>
              </div>
              <p className="text-gray-600 ml-7">EComposer@example.com</p>
            </div>

            {/* Open Time */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <p className="font-semibold text-gray-900">Open Time</p>
              </div>
              <div className="text-gray-600 ml-7">
                <p className="mb-2">Our store has re-opened for shopping,</p>
                <p>Every day 11am to 7pm</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-gray-600 hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5 text-gray-600 hover:text-blue-600" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              If you've got great products you're making or looking to work with
              us then drop us a line.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

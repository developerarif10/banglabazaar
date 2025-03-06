"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function SizeGuideModal() {
  const [isOpen, setIsOpen] = useState(false);

  // This would be connected to a global state or context in a real app
  // For demo purposes, we'll use window.sizeGuideModal to open it
  if (typeof window !== "undefined") {
    window.sizeGuideModal = {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h2 className="text-lg font-medium">Size chart</h2>
          <button onClick={() => setIsOpen(false)} className="p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">Size guide</h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary">
                  <th className="border border-border p-2 text-left">Size</th>
                  <th className="border border-border p-2 text-left">US</th>
                  <th className="border border-border p-2 text-left">Bust</th>
                  <th className="border border-border p-2 text-left">Waist</th>
                  <th className="border border-border p-2 text-left">
                    Low Hip
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2">XS</td>
                  <td className="border border-border p-2">2</td>
                  <td className="border border-border p-2">32</td>
                  <td className="border border-border p-2">24 - 25</td>
                  <td className="border border-border p-2">33 - 34</td>
                </tr>
                <tr className="bg-secondary/30">
                  <td className="border border-border p-2">S</td>
                  <td className="border border-border p-2">4</td>
                  <td className="border border-border p-2">34 - 35</td>
                  <td className="border border-border p-2">26 - 27</td>
                  <td className="border border-border p-2">35 - 26</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">M</td>
                  <td className="border border-border p-2">6</td>
                  <td className="border border-border p-2">36 - 37</td>
                  <td className="border border-border p-2">28 - 29</td>
                  <td className="border border-border p-2">38 - 40</td>
                </tr>
                <tr className="bg-secondary/30">
                  <td className="border border-border p-2">L</td>
                  <td className="border border-border p-2">8</td>
                  <td className="border border-border p-2">38 - 29</td>
                  <td className="border border-border p-2">30 - 31</td>
                  <td className="border border-border p-2">42 - 44</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">XL</td>
                  <td className="border border-border p-2">10</td>
                  <td className="border border-border p-2">40 - 41</td>
                  <td className="border border-border p-2">32 - 33</td>
                  <td className="border border-border p-2">45 - 47</td>
                </tr>
                <tr className="bg-secondary/30">
                  <td className="border border-border p-2">XXL</td>
                  <td className="border border-border p-2">12</td>
                  <td className="border border-border p-2">42 - 43</td>
                  <td className="border border-border p-2">34 - 35</td>
                  <td className="border border-border p-2">48 - 50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Measuring Tips</h3>

              <div className="mb-4">
                <h4 className="font-medium mb-1">Bust</h4>
                <p className="text-muted-foreground">
                  Measure around the fullest part of your bust.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-1">Waist</h4>
                <p className="text-muted-foreground">
                  Measure around the narrowest part of your torso.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">Low Hip</h4>
                <p className="text-muted-foreground">
                  With your feet together measure around the fullest part of
                  your hips/rear.
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/images/shop/products/size_chart2.jpg"
                alt="Size chart"
                width={400}
                height={400}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

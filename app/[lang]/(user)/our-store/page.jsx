"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const stores = [
  {
    id: 1,
    name: "Ecomus Paris",
    address: "93 Rue du Chevalier de la Barre, 961821 Paris, France",
    phone: "(+33) 936-1234",
    email: "Ecomus.paris@example.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d158969.55657176184!2d-0.176367!3d51.496715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760542e6182f3f%3A0x7bb7e385c39764c4!2zQuG6o28gdMOgbmcgTOG7i2NoIHPhu60gVOG7sSBuaGnDqm4gTHXDom4gxJDDtG4!5e0!3m2!1svi!2sus!4v1719308620173!5m2!1svi!2sus",
  },
  {
    id: 2,
    name: "Ecomus London",
    address: "Cromwell Rd, South Kensington, London SW1 6BD, UK",
    phone: "(+44) 20 4942 6789",
    email: "Ecomus.london@example.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d158969.55657176184!2d-0.176367!3d51.496715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760542e6182f3f%3A0x7bb7e385c39764c4!2zQuG6o28gdMOgbmcgTOG7i2NoIHPhu60gVOG7sSBuaGnDqm4gTHXDom4gxJDDtG4!5e0!3m2!1svi!2sus!4v1719308885091!5m2!1svi!2sus",
  },
  {
    id: 3,
    name: "Ecomus Madrid",
    address: "C. de Ferraz, 1, 150596 Madrid, Spain",
    phone: "(+48) 321-2468",
    email: "Ecomus.madrid@example.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d194388.1638384037!2d-3.717769!3d40.424022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42286e8bea1259%3A0x1d6ad9c64a7706ab!2sTemple%20of%20Debod!5e0!3m2!1svi!2sus!4v1719308938883!5m2!1svi!2sus",
  },
  {
    id: 4,
    name: "Ecomus Tokyo",
    address: "152-0035 Tokyo, Meguro City, Jiyugaoka, Japan",
    phone: "(623) 934-2400",
    email: "Ecomus.tokyo@example.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51856.75050320975!2d139.768121!3d35.675847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2zVMO0a3nDtCwgTmjhuq10IELhuqNu!5e0!3m2!1svi!2sus!4v1719308962873!5m2!1svi!2sus",
  },
];

export default function OurStore() {
  const [activeStore, setActiveStore] = useState(stores[0]);
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Store List */}
          <div className="md:col-span-4">
            <div className="space-y-4">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className={`p-6 rounded-lg border transition-all cursor-pointer hover:shadow-md ${
                    activeStore.id === store.id
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white border-gray-200 hover:border-blue-600"
                  }`}
                  onClick={() => setActiveStore(store)}
                >
                  {/* Store Title */}
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5" />
                    <h2 className="text-lg font-semibold">{store.name}</h2>
                  </div>

                  {/* Store Info */}
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium block mb-1">Address</span>
                      <p className="text-sm">{store.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{store.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{store.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-8 h-[600px] lg:h-[800px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={activeStore.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing ${activeStore.name} location`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

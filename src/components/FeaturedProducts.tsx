'use client';
import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  { id: 1, name: "Panou Canadian Solar 450W Hi-Ku", price: "850 RON", type: "Panouri", image: "/imagini/panou solar.jpg" },
  { id: 2, name: "Inverter Huawei SUN2000 5kW", price: "4.200 RON", type: "Invertoare", image: "/imagini/invertor.jpg" },
  { id: 3, name: "Baterie Luna2000 5kWh", price: "12.500 RON", type: "Stocare", image: "/imagini/baterii.jpg" },
  { id: 4, name: "Kit off-grid cabană 3kW", price: "14.200 RON", type: "Kit-uri", image: "/imagini/kit.jpg" },
];

const tabs = ["Toate", "Panouri", "Invertoare", "Kit-uri"];

export default function FeaturedProducts() {
  const [active, setActive] = useState("Toate");

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header + Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <h2 className="text-3xl font-bold text-slate-900">Produse recomandate</h2>
          
          <div className="flex p-1 bg-white rounded-full border border-slate-200 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === tab 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl">
              {/* Imagine */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-100 text-xs font-bold text-slate-700">
                  {product.type}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs text-slate-400 font-medium ml-1">4.9 (120 reviews)</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-emerald-600">{product.price}</span>
                  <button className="bg-emerald-50 hover:bg-emerald-500 text-emerald-600 hover:text-white p-3 rounded-xl transition-colors duration-300">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

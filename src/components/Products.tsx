'use client';
import { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const allProducts = [
  { id: 1, name: "Panou Canadian Solar 450W", cat: "Panouri", price: "850 RON", image: "/imagini/panou solar.jpg" },
  { id: 2, name: "Inverter Huawei 5kW", cat: "Invertoare", price: "4.200 RON", image: "/imagini/invertor.jpg" },
  { id: 3, name: "Baterie Luna2000 5kWh", cat: "Stocare", price: "12.500 RON", image: "/imagini/baterii.jpg" },
  { id: 4, name: "Kit off-grid cabană", cat: "Kit-uri", price: "14.200 RON", image: "/imagini/kit.jpg" },
];

const tabs = ["Toate", "Panouri", "Invertoare", "Stocare", "Kit-uri"];

export default function Products() {
  const [activeTab, setActiveTab] = useState("Toate");

  // Filtrare simplă (mockup)
  const displayProducts = activeTab === "Toate" 
    ? allProducts 
    : allProducts.filter(p => p.cat === activeTab);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h2 className="text-3xl font-bold text-slate-900">Recomandate</h2>
          
          <div className="flex flex-wrap justify-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
            {tabs.map(tab => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === tab ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
               >
                 {tab}
               </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayProducts.map((product) => (
             <div key={product.id} className="group bg-white rounded-3xl p-4 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
                <div className="relative h-56 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                   <button className="absolute bottom-3 right-3 bg-white text-slate-900 p-2.5 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-emerald-600 hover:text-white">
                      <ShoppingCart size={18} />
                   </button>
                </div>
                <div className="px-2">
                   <p className="text-xs font-bold text-emerald-600 uppercase mb-1">{product.cat}</p>
                   <h3 className="font-bold text-slate-900 text-lg mb-2">{product.name}</h3>
                   <div className="flex items-center gap-1 mb-3">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-slate-400 font-medium">4.9 (50 rev)</span>
                   </div>
                   <p className="text-xl font-bold text-slate-900">{product.price}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

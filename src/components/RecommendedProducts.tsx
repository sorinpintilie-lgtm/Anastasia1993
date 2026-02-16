'use client';
import { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: "Panou Canadian Solar 450w", price: "850 RON", type: "Panouri", tag: "Cel mai vândut", img: "bg-gray-200" },
  { id: 2, name: "Invertor Huawei 5kw monofazat", price: "4.200 RON", type: "Invertoare", tag: "Stoc limitat", img: "bg-gray-200" },
  { id: 3, name: "Baterie Pylontech US2000", price: "5.600 RON", type: "Baterii", tag: "Premium", img: "bg-gray-200" },
  { id: 4, name: "Kit off-grid cabană mică", price: "12.500 RON", type: "Kit-uri", tag: "Promoție", img: "bg-gray-200" },
];

const tabs = ["Toate", "Panouri", "Invertoare", "Kit-uri"];

export default function RecommendedProducts() {
  const [activeTab, setActiveTab] = useState("Toate");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
                <h2 className="text-3xl font-bold text-solar-green-900">Recomandările specialiștilor</h2>
                <p className="text-warm-gray mt-2">Cele mai fiabile echipamente testate de noi.</p>
            </div>
            
            <div className="flex gap-2 bg-stone-100 p-1 rounded-2xl">
                {tabs.map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === tab ? 'bg-white text-solar-green-700 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
                <div key={product.id} className="group relative bg-white border border-stone-100 rounded-3xl p-4 hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-4 left-4 z-10 bg-sun-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {product.tag}
                    </div>

                    <div className={`h-48 ${product.img} rounded-2xl mb-4 flex items-center justify-center text-stone-400`}>
                        [Imagine produs]
                    </div>

                    <div>
                        <div className="flex text-yellow-400 mb-2 gap-1">
                            {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                            <span className="text-xs text-stone-400 ml-1">(24 recenzii)</span>
                        </div>
                        <h3 className="font-bold text-stone-800 text-lg leading-tight mb-2 group-hover:text-solar-green-700 transition">
                            {product.name}
                        </h3>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-xl font-bold text-solar-green-900">{product.price}</span>
                            <button className="bg-solar-green-50 text-solar-green-700 p-3 rounded-xl hover:bg-solar-green-500 hover:text-white transition-colors shadow-sm">
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

import React from 'react';
import Link from 'next/link';
import { Sun, Zap, Battery, Box, Wind, Home } from 'lucide-react';

// Am adăugat imagini specifice pentru fundaluri
const categories = [
  { name: 'Panouri solare', icon: Sun, count: 'Monocristaline', slug: 'panouri', img: '/imagini/panou solar.jpg' },
  { name: 'Invertoare', icon: Zap, count: 'Hibrid și on-grid', slug: 'invertoare', img: '/imagini/invertor.jpg' },
  { name: 'Baterii', icon: Battery, count: 'Stocare LiFePO4', slug: 'baterii', img: '/imagini/baterii.jpg' },
  { name: 'Kit-uri', icon: Home, count: 'Sisteme complete', slug: 'kit-uri', img: '/imagini/kit.jpg' },
  { name: 'Eoliene', icon: Wind, count: 'Turbine mici', slug: 'eoliene', img: '/imagini/eoliene.jpg' },
  { name: 'Accesorii', icon: Box, count: 'Cabluri și șine', slug: 'accesorii', img: '/imagini/accesorii.jpg' },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Categorii populare</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <Link href={`/shop/${cat.slug}`} key={idx} className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              
              {/* 1. Imagine Fundal */}
              <div className="absolute inset-0">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {/* Overlay întunecat (Gradient) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:via-black/60 transition-colors"></div>
              </div>

              {/* 2. Conținut (Icon + Text) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/30 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-300">
                  <cat.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-bold text-white text-lg mb-1 leading-tight group-hover:text-emerald-300 transition-colors">
                    {cat.name}
                </h3>
                <p className="text-xs text-slate-300 font-medium opacity-80 group-hover:opacity-100">
                    {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

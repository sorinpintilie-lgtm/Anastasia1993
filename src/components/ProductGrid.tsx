'use client';
import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { LayoutGrid, List, Check, ShoppingCart, Truck } from 'lucide-react';
import { Product } from '@/data/products';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';

// --- CARDUL STIL EMAG (LIST VIEW) ---
const ProductListCard = ({ product }: { product: Product }) => {
  const { addToCart } = useShop();

  return (
    <Link href={`/shop/${product.category}/${product.id}`} className="block">
      <div className="group bg-white border border-slate-200 rounded-xl p-4 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 relative">
        
        {/* 1. ZONA IMAGINE (Stânga) */}
        <div className="relative w-full md:w-56 shrink-0 bg-white rounded-lg flex items-center justify-center p-2">
           <img 
            src={product.image} 
            alt={product.name} 
            className="w-auto h-40 md:h-48 object-contain mix-blend-multiply group-hover:scale-105 transition duration-500" 
           />
           {product.badge && (
            <span className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm uppercase tracking-wide">
              {product.badge}
            </span>
          )}
        </div>

        {/* 2. ZONA INFORMAȚII (Mijloc) */}
        <div className="flex-1 flex flex-col justify-center">
           <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-3 leading-tight group-hover:text-emerald-700 transition">
             {product.name}
           </h3>
           
           {/* Specificații (Stil listă cu puncte) */}
           <div className="text-sm text-slate-500 mb-4">
              <ul className="space-y-1.5">
                 {product.specs?.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                       <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0"></span>
                       <span>{spec}</span>
                    </li>
                 ))}
                 {/* Item dummy pentru aspect */}
                 <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0"></span>
                    <span>Garanție producător inclusă</span>
                 </li>
              </ul>
           </div>

           {/* Rating / Review placeholder */}
           <div className="flex items-center gap-1 text-xs text-slate-400 mt-auto">
              <div className="flex text-yellow-400">★★★★★</div>
              <span>(Review-uri clienți)</span>
           </div>
        </div>

        {/* 3. ZONA ACȚIUNE (Dreapta) - Separator vertical pe desktop */}
        <div className="w-full md:w-72 md:border-l md:border-slate-100 md:pl-6 flex flex-col justify-between shrink-0">
           
           {/* Preț și Livrare */}
           <div className="mb-4 md:mb-0">
              <div className="text-right md:text-left">
                  {product.oldPrice && (
                    <span className="text-sm text-slate-400 line-through block mb-1">
                        {product.oldPrice} RON
                    </span>
                  )}
                  <span className="text-2xl font-bold text-red-600 block">
                    {product.price} RON
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">
                    Prețul include TVA
                  </span>
              </div>

              {/* Status Stoc */}
              <div className="mt-4 flex flex-col gap-1 items-end md:items-start">
                  <span className="text-emerald-600 text-xs font-bold flex items-center gap-1">
                    <Check size={14} strokeWidth={3} /> În stoc
                  </span>
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <Truck size={14} /> Livrare gratuită
                  </span>
              </div>
           </div>

           {/* Buton Adaugă (Jos de tot) */}
           <button 
                onClick={(e) => { e.preventDefault(); addToCart(product); }}
                className="w-full mt-4 bg-emerald-600 text-white py-3 rounded-lg font-bold text-sm hover:bg-emerald-700 shadow-sm flex items-center justify-center gap-2 transition active:scale-95"
           >
                <ShoppingCart size={18} />
                Adaugă în coș
           </button>
        </div>

      </div>
    </Link>
  );
};

// --- GRID PRINCIPAL ---
interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

export default function ProductGrid({ products, viewMode, setViewMode }: ProductGridProps) {
  return (
    <div>
      {/* Header cu butoane (Vizibil doar pe Desktop, pe mobil avem bara sticky) */}
      <div className="hidden lg:flex sticky top-[96px] z-40 bg-white border-b justify-between items-center mb-6 py-3 -mx-6 px-6">
         <p className="text-slate-500 text-sm">
            Am găsit <span className="font-bold text-slate-900">{products.length}</span> produse
         </p>

         <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500 mr-2">Vizualizare:</span>
            <div className="flex bg-slate-100 p-1 rounded-lg">
                <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition flex items-center gap-2 text-sm font-medium ${viewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                <LayoutGrid size={18} /> Grid
                </button>
                <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition flex items-center gap-2 text-sm font-medium ${viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                <List size={18} /> Listă
                </button>
            </div>
         </div>
      </div>

      {/* Grid-ul propriu-zis */}
      {viewMode === 'grid' ? (
        // MOD GRID: 2 coloane mobil, 3 desktop
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
           {products.map(product => (
              <ProductCard key={product.id} product={product} />
           ))}
        </div>
      ) : (
        // MOD LISTĂ: eMAG Style
        <div className="flex flex-col gap-4">
           {products.map(product => (
              <ProductListCard key={product.id} product={product} />
           ))}
        </div>
      )}
    </div>
  );
}

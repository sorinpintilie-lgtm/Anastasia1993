import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductActions from '@/components/ProductActions';
import ProductCard from '@/components/ProductCard';
import { productsData } from '@/data/products';
import { CreditCard, Truck, RotateCcw, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default async function ProductPage({ params }: { params: Promise<{ category: string, id: string }> }) {
  const { id } = await params;
  const product = productsData.find(p => p.id === id);
  
  // Produse recomandate
  const recommended = productsData
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  if (!product) return <div className="pt-32 text-center">Produsul nu a fost găsit.</div>;

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-12">
        {/* Breadcrumbs - Mici și discrete */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-emerald-600 transition">Acasă</Link> / 
          <Link href={`/shop/${product.category}`} className="capitalize hover:text-emerald-600 transition">{product.category}</Link> / 
          <span className="text-slate-800 font-medium truncate max-w-[200px]">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* COLOANA STÂNGA: IMAGINE (5 coloane) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 relative">
               {/* Badge Stoc */}
              <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wide z-10">
                În stoc
              </span>
              <img src={product.image} alt={product.name} className="w-full h-full object-contain p-6" />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-slate-50 rounded-lg border border-slate-100 cursor-pointer hover:border-emerald-500 transition" />
              ))}
            </div>
          </div>

          {/* COLOANA DREAPTA: DETALII (7 coloane) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-end gap-3 mt-4 border-b border-slate-100 pb-6">
                <span className="text-3xl font-bold text-emerald-600">{product.price} RON</span>
                {product.oldPrice && <span className="text-lg text-slate-400 line-through mb-1">{product.oldPrice} RON</span>}
                <span className="text-xs text-slate-400 mb-2 ml-auto">Cod produs: #{product.id.toUpperCase()}</span>
              </div>
            </div>

            {/* Butoane Acțiune */}
            <ProductActions product={product} />

            {/* LISTA BENEFICII */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-3 mt-6">
               
               {/* 1. Plata */}
               <div className="flex items-center gap-3">
                  <CreditCard size={18} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">Plata online 100% în siguranță</span>
               </div>

               {/* 2. Livrare */}
               <div className="flex items-center gap-3">
                  <Truck size={18} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">Livrare în 24-48 ore</span>
               </div>

               {/* 3. Retur */}
               <div className="flex items-center gap-3">
                  <RotateCcw size={18} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">Retur în 14 zile</span>
               </div>

               {/* 4. Transport Gratuit */}
               <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">Transport gratuit pentru comenzi de peste 300 RON</span>
               </div>

            </div>

            {/* Scurtă Descriere */}
            <div className="pt-4">
               <h3 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">Despre produs</h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Acest echipament premium este proiectat pentru eficiență maximă în sistemele fotovoltaice rezidențiale. 
                 Oferă durabilitate ridicată și performanță garantată de producător.
               </p>
               
               {/* Specificații listă */}
               <div className="mt-4 grid grid-cols-2 gap-2">
                  {product.specs.map((spec, i) => (
                     <div key={i} className="text-xs bg-white border border-slate-200 px-3 py-2 rounded-lg text-slate-600 font-medium">
                        • {spec}
                     </div>
                  ))}
               </div>
            </div>

          </div>
        </div>

        {/* PRODUSE RECOMANDATE */}
        <div className="border-t border-slate-100 pt-16">
          <h2 className="text-xl font-bold text-slate-900 mb-8">Produse similare</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommended.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
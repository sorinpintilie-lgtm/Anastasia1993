'use client'; // Client component pentru a citi parametrii din URL (searchParams)
import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { productsData } from '@/data/products';
import { SearchX } from 'lucide-react';
import Link from 'next/link';

// În Next.js 15, searchParams este un Promise
export default function SearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  // Despachetăm parametrii (folosind React.use sau await dacă era async server component)
  const params = use(searchParams);
  const query = params.q || '';
  
  // Logica de căutare (case insensitive)
  const results = productsData.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) || 
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">
                Rezultate căutare pentru: "<span className="text-emerald-600">{query}</span>"
            </h1>
            <p className="text-slate-500 text-sm mt-1">{results.length} produse găsite</p>
        </div>

        {results.length > 0 ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {results.map(product => (
                 <ProductCard key={product.id} product={product} />
              ))}
           </div>
        ) : (
           <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <SearchX size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Nu am găsit rezultate</h2>
              <p className="text-slate-500 mt-2 mb-6">Încearcă să cauți "panouri", "Huawei" sau "5kW".</p>
              <Link href="/" className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition">
                Înapoi la magazin
              </Link>
           </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
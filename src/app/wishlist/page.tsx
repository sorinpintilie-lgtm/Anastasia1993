'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useShop } from '@/context/ShopContext';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlistItems } = useShop();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex items-center gap-3 mb-8">
            <Heart className="text-red-500 fill-red-500" size={32} />
            <h1 className="text-3xl font-bold text-slate-900">Produse favorite</h1>
        </div>

        {wishlistItems.length === 0 ? (
           <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
             <h2 className="text-xl font-bold text-slate-900">Lista ta este goală</h2>
             <p className="text-slate-500 mt-2 mb-8">Salvează produsele favorite pentru a le găsi mai ușor.</p>
             <Link href="/" className="text-emerald-600 font-bold hover:underline">Înapoi la cumpărături</Link>
           </div>
        ) : (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlistItems.map(product => (
                 <ProductCard key={product.id} product={product} />
              ))}
           </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
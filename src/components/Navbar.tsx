'use client';
import React, { useState } from 'react';
import { Search, ShoppingBag, Zap, User, Heart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useShop } from '@/context/ShopContext';

export default function Navbar() {
  const { cartCount, wishlistItems } = useShop();
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <nav className="header sticky z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4 md:gap-8">
        
        <Link href="/" className="flex items-center gap-2 cursor-pointer flex-shrink-0">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
            <Zap size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
            Anastasia<span className="text-emerald-600">1993</span>
          </span>
          <span className="text-xl font-bold tracking-tight text-slate-900 sm:hidden">
            A<span className="text-emerald-600">93</span>
          </span>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-2xl relative">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Caută produse..." 
            className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-slate-50 border border-slate-200 rounded-full text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition"
          />
          <button type="submit" className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600">
            <Search size={18} />
          </button>
        </form>

        <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
          <div className="p-2 text-slate-400 cursor-default" title="Contul meu">
            <User size={24} />
          </div>

          <Link href="/wishlist" className="relative p-2 text-slate-600 hover:bg-slate-50 hover:text-red-500 rounded-full transition">
            <Heart size={24} className={wishlistItems.length > 0 ? "text-red-500 fill-red-500" : ""} />
             {wishlistItems.length > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold border-2 border-white">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          
          <Link href="/cart" className="relative p-2 text-slate-900 bg-white border border-slate-200 rounded-full hover:border-emerald-500 hover:text-emerald-600 transition shadow-sm">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white font-bold border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

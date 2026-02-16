'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useShop } from '@/context/ShopContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useShop();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Coșul tău de cumpărături</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <ShoppingBag size={32} className="text-emerald-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Coșul este gol</h2>
            <p className="text-slate-500 mt-2 mb-8">Nu ai adăugat încă produse.</p>
            <Link href="/shop/panouri" className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition">
              Mergi la magazin
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Lista Produse */}
            <div className="flex-1 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  {/* Imagine */}
                  <div className="w-24 h-24 bg-slate-50 rounded-xl flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Detalii */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                    <p className="text-emerald-600 font-bold">{item.price} RON</p>
                  </div>

                  {/* Cantitate */}
                  <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-white rounded-md shadow-sm transition">
                      <Minus size={16} />
                    </button>
                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-white rounded-md shadow-sm transition">
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Ștergere */}
                  <button onClick={() => removeFromCart(item.id)} className="p-2 text-slate-400 hover:text-red-500 transition">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Sumar Comandă */}
            <div className="w-full lg:w-96">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg sticky top-28">
                <h3 className="font-bold text-lg mb-6">Sumar comandă</h3>
                
                <div className="space-y-3 text-sm border-b border-slate-100 pb-6 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="font-bold">{cartTotal} RON</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Livrare</span>
                    <span className="text-emerald-600 font-bold">Gratuită</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">TVA (19%)</span>
                    <span className="text-slate-900">Inclus</span>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-black text-slate-900 mb-8">
                  <span>Total</span>
                  <span>{cartTotal} RON</span>
                </div>

                <button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 shadow-xl shadow-emerald-200 transition flex items-center justify-center gap-2">
                  Finalizează comanda <ArrowRight size={20} />
                </button>
                <p className="text-xs text-center text-slate-400 mt-4">Plata se face ramburs sau prin OP.</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
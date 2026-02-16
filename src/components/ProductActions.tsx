'use client';
import { ShoppingCart, Heart } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { Product } from '@/data/products';

export default function ProductActions({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const isFav = isInWishlist(product.id);

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button 
        onClick={() => addToCart(product)}
        className="flex-1 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 shadow-md transition-all flex items-center justify-center gap-2"
      >
        <ShoppingCart size={18} /> Adaugă în coș
      </button>
      <button 
        onClick={() => toggleWishlist(product)}
        className={`flex-1 py-3 border rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${isFav ? 'border-red-200 bg-red-50 text-red-600' : 'border-slate-200 text-slate-900 hover:bg-slate-50'}`}
      >
        <Heart size={18} fill={isFav ? "currentColor" : "none"} /> {isFav ? 'În favorite' : 'Adaugă la favorite'}
      </button>
    </div>
  );
}
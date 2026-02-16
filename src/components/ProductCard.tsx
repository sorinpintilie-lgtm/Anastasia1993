'use client';
import { ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';
import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const isFav = isInWishlist(product.id);

  // Prevenim navigarea când dăm click pe butoane
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); 
    addToCart(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  return (
    <Link href={`/shop/${product.category}/${product.id}`}>
      <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 h-full cursor-pointer">
        <div className="relative h-48 overflow-hidden bg-slate-50">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-700" />
          
          {product.badge && (
            <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md uppercase">
              {product.badge}
            </span>
          )}

          {/* Buton Inimioară */}
          <button 
            onClick={handleWishlist}
            className={`absolute top-3 right-3 p-2 bg-white rounded-full shadow-md transition z-10 ${isFav ? 'text-red-500' : 'text-slate-300 hover:text-red-500'}`}
          >
            <Heart size={16} fill={isFav ? "currentColor" : "none"} />
          </button>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          {/* Specificații mici */}
          <div className="flex gap-2 mb-2">
            {product.specs.map((spec, i) => (
              <span key={i} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                {spec}
              </span>
            ))}
          </div>
          
          <h3 className="font-bold text-slate-900 text-base leading-tight mb-auto mt-2 group-hover:text-emerald-700 transition-colors">
            {product.name}
          </h3>

          <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
            <div>
               {product.oldPrice && <span className="text-xs text-slate-400 line-through block">{product.oldPrice} RON</span>}
               <span className="text-lg font-black text-slate-900">{product.price} RON</span>
            </div>
            
            {/* Buton Adaugă în Coș */}
            <button 
              onClick={handleAddToCart}
              className="bg-emerald-600 text-white p-2.5 rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-transform active:scale-95"
            >
               <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
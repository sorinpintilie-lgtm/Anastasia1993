'use client';
import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import ShopFilters from '@/components/ShopFilters';
import MobileControlBar from '@/components/MobileControlBar';
import { Product } from '@/data/products';

interface CategoryContentProps {
  products: Product[];
}

export default function CategoryContent({ products }: CategoryContentProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <>
      {/* Mobile Control Bar - Sticky sub header */}
      <MobileControlBar 
        viewMode={viewMode} 
        setViewMode={setViewMode} 
        onOpenFilters={() => setFiltersOpen(true)} 
      />

      {/* Conținut Principal (Filtre + Produse) */}
      <section className="py-12 container mx-auto px-6 flex-grow relative z-0">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Componenta Filtre (Sidebar Desktop + Drawer Mobil) */}
          <ShopFilters 
            externalOpen={filtersOpen} 
            onExternalClose={() => setFiltersOpen(false)} 
          />

          {/* Grid Produse */}
          <div className="flex-1 w-full">
             {products.length > 0 ? (
               <div className={`grid gap-6 pb-20 lg:pb-0 ${
                 viewMode === 'grid' 
                   ? 'grid-cols-2 sm:grid-cols-2 xl:grid-cols-3' 
                   : 'grid-cols-1'
               }`}> 
                  {products.map(product => (
                     <ProductCard key={product.id} product={product} />
                  ))}
               </div>
             ) : (
               <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200 shadow-sm">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Nu există produse momentan</h3>
                  <p className="text-slate-500 font-medium">Această categorie este în curs de actualizare.</p>
               </div>
             )}
          </div>

        </div>
      </section>
    </>
  );
}
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryContent from '@/components/CategoryContent';
import PromoBar from '@/components/PromoBar';
import { productsData } from '@/data/products';

// 1. Definim imaginile pentru fiecare categorie (imagini locale)
const categoryImages: { [key: string]: string } = {
  'panouri': '/imagini/panou solar.jpg',
  'invertoare': '/imagini/invertor.jpg',
  'baterii': '/imagini/baterii.jpg',
  'kit-uri': '/imagini/kit.jpg',
  'eoliene': '/imagini/eoliene.jpg',
  'accesorii': '/imagini/accesorii.jpg',
};

// Imagine fallback (dacă nu găsim categoria)
const defaultImage = '/imagini/kit.jpg';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cleanSlug = decodeURIComponent(category);
  const products = productsData.filter(p => p.category === cleanSlug);
  
  // Alegem imaginea corectă
  const bgImage = categoryImages[cleanSlug] || defaultImage;

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Sticky Header Stack */}
      <div className="sticky top-0 z-50">
        <PromoBar />
        <Navbar />
      </div>
      
      {/* Mini Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden shadow-lg">
        
        {/* Imaginea de fundal */}
        <div className="absolute inset-0">
          <img 
            src={bgImage} 
            alt={cleanSlug} 
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient (Negru jos -> Transparent sus) pentru lizibilitate */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/30"></div>
        </div>

        {/* Conținutul (Text Alb) */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-start gap-4">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              Magazin / {cleanSlug}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-white capitalize drop-shadow-lg">
              {cleanSlug}
            </h1>
            
            <p className="text-slate-200 text-lg max-w-xl drop-shadow-md">
              Echipamente profesionale selectate pentru eficiență maximă.
              <span className="ml-3 text-white font-bold bg-white/10 px-2 py-1 rounded-lg border border-white/20 text-sm">
                 {products.length} Produse
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Conținut Principal cu MobileControlBar integrat */}
      <CategoryContent products={products} />

      <Footer />
    </main>
  );
}

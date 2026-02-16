'use client';
import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    tag: "Programul Casa Verde",
    title: "Panouri & Dosar Inclus",
    desc: "Obții finanțarea de 30.000 RON. Ne ocupăm de documentație, livrare și montaj autorizat.",
    cta: "Verifică Eligibilitatea",
    link: "/shop/panouri",
    image: "/imagini/hero1.jpg"
  },
  {
    id: 2,
    tag: "Independență Totală",
    title: "Sisteme Off-Grid cu Baterii",
    desc: "Uită de facturi și pene de curent. Soluții complete cu stocare LiFePO4 pentru cabana ta.",
    cta: "Vezi Pachetele",
    link: "/shop/kit-uri",
    image: "/imagini/hero2.jpg"
  },
  {
    id: 3,
    tag: "Oferta Lunii",
    title: "Invertoare Hibride Huawei",
    desc: "Eficiență maximă și monitorizare inteligentă pe telefon. Reduceri de până la 15% săptămâna aceasta.",
    cta: "Vezi Promoțiile",
    link: "/shop/invertoare",
    image: "/imagini/hero3.jpg"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto-skip la fiecare 6 secunde
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] lg:h-[750px] overflow-hidden bg-slate-900">
      
      {/* Sãgeþi Navigare - ACUM ASCUNSE PE MOBIL (hidden lg:block) */}
      <button 
        onClick={prevSlide} 
        className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft size={32} strokeWidth={1.5} />
      </button>

      <button 
        onClick={nextSlide} 
        className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight size={32} strokeWidth={1.5} />
      </button>

      {/* Slider Content */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* 1. IMAGINEA DE FUNDAL (FULL) */}
            <div className="absolute inset-0">
               <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
               />
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
            </div>

            {/* 2. TEXTUL (Suprapus) */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-start">
                <div className="max-w-3xl text-white pt-10 md:pt-0">
                    <span className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/30 backdrop-blur-sm">
                        {slide.tag}
                    </span>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] drop-shadow-xl tracking-tight">
                        {slide.title}
                    </h1>
                    
                    <p className="text-lg lg:text-xl text-slate-200 mb-10 leading-relaxed max-w-lg drop-shadow-md opacity-90">
                        {slide.desc}
                    </p>
                    <Link href={slide.link}>
                        <button className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transform hover:-translate-y-1">
                            {slide.cta} 
                            <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      
      {/* Fundal decorativ subtil (Blur verde pal) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Partea de Text (Stânga) */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Stocuri 2026 actualizate
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Investește în <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                soare și economie.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Soluții fotovoltaice complete pentru casa ta. De la panouri premium la invertoare inteligente, totul livrat rapid din stoc propriu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-600/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Vezi produse <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                <PlayCircle size={20} className="text-emerald-600"/> Cum funcționează
              </button>
            </div>
          </div>

          {/* Partea de Imagine (Dreapta) - Curată, fără fundal negru */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
             <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/imagini/hero1.jpg" 
                  alt="Casa cu panouri fotovoltaice" 
                  className="w-full h-full object-cover"
                />
                
                {/* Un mic card flotant alb pentru credibilitate */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-xs border border-white">
                    <p className="text-sm text-slate-500 font-bold uppercase mb-1">Economie estimată</p>
                    <p className="text-3xl font-bold text-emerald-600">-90%</p>
                    <p className="text-xs text-slate-400 mt-1">La factura de energie</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

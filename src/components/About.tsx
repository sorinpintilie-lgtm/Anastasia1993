import React from 'react';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           
           {/* Text Stânga */}
           <div>
              <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-4 block">De ce Anastasia1993?</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Partenerul tău pentru <br />
                <span className="text-emerald-600">independență energetică.</span>
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Nu suntem doar un magazin online. Suntem o echipă de ingineri care proiectează sistemul tău de la zero. Livrăm echipamente testate, nu promisiuni goale.
              </p>

              <div className="space-y-4">
                 {[
                    "Consultanță tehnică gratuită înainte de achiziție",
                    "Livrare asigurată direct pe șantier",
                    "Garanție reală și service în România"
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 transition-colors">
                       <div className="bg-emerald-600/10 p-2 rounded-full text-emerald-600">
                          <Check size={18} strokeWidth={3} />
                       </div>
                       <span className="font-bold text-slate-700">{item}</span>
                    </div>
                 ))}
              </div>
           </div>

           {/* Imagine Dreapta (Fără Cutie Stats, doar imagine curată cu colțuri rotunjite) */}
           <div className="relative h-[500px] w-full">
              <div className="absolute inset-0 bg-emerald-100 rounded-[3rem] rotate-3 transform"></div>
               <img 
                  src="/imagini/about.jpg" 
                  alt="Inginer Anastasia1993" 
                  className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white"
               />
           </div>

        </div>
      </div>
    </section>
  );
}

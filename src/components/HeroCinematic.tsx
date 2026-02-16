import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function HeroCinematic() {
  return (
    <section className="relative h-screen w-full overflow-hidden font-sans">
      {/* 1. FUNDAL COMPLET (IMAGINE) */}
      {/* Folosim o imagine de fundal reală cu un panou solar în apus sau o casă modernă */}
      <div className="absolute inset-0">
        <img 
          src="/imagini/hero1.jpg" 
          alt="Solar Roof Sunset" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient negru pentru a face textul lizibil */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* 2. NAVIGATIA (Sticlă) */}
      <nav className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-center border-b border-white/10 backdrop-blur-sm">
        <div className="text-2xl font-bold text-white tracking-wider">
          ECO<span className="text-emerald-400">CASA</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition">Produse</a>
          <a href="#" className="hover:text-white transition">Soluții</a>
          <a href="#" className="hover:text-white transition">Proiecte</a>
        </div>
        <button className="px-6 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white hover:text-black transition duration-300">
          Contact
        </button>
      </nav>

      {/* 3. CONȚINUT CENTRAL (Fără cutii, doar text și sticlă) */}
      <div className="relative z-10 container mx-auto px-8 h-full flex flex-col justify-center">
        
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-emerald-400"></span>
            <span className="text-emerald-400 uppercase tracking-[0.2em] text-sm font-bold">
              Viitorul este aici
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8">
            Energie <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              nelimitată.
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 font-light max-w-xl leading-relaxed">
            Nu mai depinde de rețea. Transformă-ți acoperișul într-o sursă de venit pasiv cu sistemele noastre premiate de eficiență.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Buton Principal - Solid */}
            <button className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-lg transition shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2">
              Configurează kit <ArrowRight size={20} />
            </button>
            
            {/* Buton Secundar - Glass Effect */}
            <button className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white rounded-full font-bold text-lg transition flex items-center justify-center gap-2 group">
              <PlayCircle size={20} className="group-hover:text-emerald-400 transition" /> 
              Cum funcționează
            </button>
          </div>
        </div>

        {/* 4. CARDURI FLOTANTE JOS (Glassmorphism pur) */}
        <div className="absolute bottom-10 right-0 md:right-10 flex gap-4 overflow-x-auto pb-4 md:pb-0 max-w-full px-8 md:px-0">
          {[
            { label: "Economie", value: "-90%", desc: "La factura de energie" },
            { label: "Garanție", value: "25 ani", desc: "Performanță liniară" },
            { label: "Investiție", value: "2-3 ani", desc: "Amortizare rapidă" }
          ].map((item, idx) => (
            <div key={idx} className="min-w-[200px] bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-black/60 transition cursor-default">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-3xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-emerald-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

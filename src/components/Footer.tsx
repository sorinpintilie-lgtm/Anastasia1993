import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* BRANDING */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Anastasia<span className="text-emerald-500">1993</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Partenerul tău de încredere pentru soluții energetice sustenabile. 
            Construim infrastructura viitorului, panou cu panou.
          </p>
        </div>

        {/* LINK-URI UTILE */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest">Informații</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-emerald-400 transition">Despre noi</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
            <li><Link href="/terms" className="hover:text-emerald-400 transition">Termeni și condiții</Link></li>
            <li><Link href="/politica" className="hover:text-emerald-400 transition">Politica de confidențialitate</Link></li>
          </ul>
        </div>

        {/* CATEGORII (TOATE) */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest">Magazin</h4>
          <ul className="space-y-2 text-sm grid grid-cols-1 gap-1">
            <li><Link href="/shop/panouri" className="hover:text-emerald-400 transition">Panouri fotovoltaice</Link></li>
            <li><Link href="/shop/invertoare" className="hover:text-emerald-400 transition">Invertoare</Link></li>
            <li><Link href="/shop/baterii" className="hover:text-emerald-400 transition">Baterii și stocare</Link></li>
            <li><Link href="/shop/kit-uri" className="hover:text-emerald-400 transition">Kit-uri complete</Link></li>
            <li><Link href="/shop/eoliene" className="hover:text-emerald-400 transition">Eoliene</Link></li>
            <li><Link href="/shop/accesorii" className="hover:text-emerald-400 transition">Accesorii montaj</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-center group">
                <div className="p-2 bg-slate-900 rounded-full group-hover:text-emerald-500 transition">
                    <Phone size={16} /> 
                </div>
                <span className="text-white">0720 088 880</span>
            </li>
            <li className="flex gap-3 items-center group">
                <div className="p-2 bg-slate-900 rounded-full group-hover:text-emerald-500 transition">
                    <Mail size={16} /> 
                </div>
                <span>contact@anastasia1993.ro</span>
            </li>
            <li className="flex gap-3 items-start group">
                <div className="p-2 bg-slate-900 rounded-full group-hover:text-emerald-500 transition mt-[-2px]">
                    <MapPin size={16} /> 
                </div>
                <span>Hunedoara, România</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex flex-col items-center justify-center gap-6 text-xs">
        <p>© 2026 Anastasia1993. Toate drepturile rezervate.</p>
        
        <a 
          href="https://sky.ro" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center gap-2 hover:text-slate-300 transition-colors duration-300"
        >
          <span className="text-slate-500">Crafted in the clouds by</span>
          <img 
            src="/skyro.png" 
            alt="Sky.ro logo" 
            className="h-5 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
          />
        </a>
      </div>
    </footer>
  );
}

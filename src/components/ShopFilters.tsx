'use client';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Search, Check } from 'lucide-react';

interface ShopFiltersProps {
  externalOpen?: boolean;
  onExternalClose?: () => void;
  viewMode?: 'grid' | 'list';
  setViewMode?: (mode: 'grid' | 'list') => void;
}

export default function ShopFilters({ externalOpen, onExternalClose }: ShopFiltersProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Use external control if provided, otherwise use internal state
  const isOpen = externalOpen !== undefined ? externalOpen : internalOpen;
  const setIsOpen = onExternalClose ? () => onExternalClose() : () => setInternalOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Căutare */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Caută în categorie..." 
          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base focus:ring-2 focus:ring-emerald-500 outline-none" 
        />
      </div>

      <div>
        <h3 className="font-bold text-slate-900 text-base mb-4">Preț (RON)</h3>
        <div className="flex items-center gap-3 text-sm">
          <input type="number" placeholder="Min" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-500" />
          <span className="text-slate-400 font-bold">-</span>
          <input type="number" placeholder="Max" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-500" />
        </div>
      </div>

      <div>
        <h3 className="font-bold text-slate-900 text-base mb-4">Brand</h3>
        <div className="space-y-3">
          {['Huawei', 'Canadian Solar', 'Victron', 'Longi', 'Fronius'].map(brand => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group p-2 hover:bg-slate-50 rounded-lg -ml-2">
              <div className="relative flex items-center justify-center w-6 h-6">
                <input type="checkbox" className="peer appearance-none w-6 h-6 border-2 border-slate-300 rounded-md checked:bg-emerald-600 checked:border-emerald-600 transition" />
                <Check size={14} className="absolute text-white pointer-events-none opacity-0 peer-checked:opacity-100" strokeWidth={3} />
              </div>
              <span className="text-base text-slate-700 font-medium group-hover:text-emerald-700 transition">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-4 pb-20"> 
        <button 
            onClick={() => setIsOpen()}
            className="w-full py-4 bg-emerald-600 text-white rounded-2xl text-lg font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition active:scale-95 flex items-center justify-center gap-2"
        >
            Vezi rezultatele
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. SIDEBAR DESKTOP */}
      <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-[96px] h-fit z-30">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
           <div className="space-y-6">
              <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="Caută..." className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none" />
               </div>
               <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-3">Preț</h3>
                  <div className="flex gap-2"><input className="w-full bg-slate-50 border rounded p-2 text-sm" placeholder="Min" /><input className="w-full bg-slate-50 border rounded p-2 text-sm" placeholder="Max" /></div>
               </div>
               <button className="w-full py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold">Aplică</button>
           </div>
        </div>
      </aside>

      {/* 2. MOBILE DRAWER - FOLOSIND PORTAL */}
      {mounted && isOpen && createPortal(
        <div 
            className="fixed inset-0 w-full h-full bg-white flex flex-col animate-in slide-in-from-bottom duration-300"
            style={{ zIndex: 9999999 }}
        >
            {/* Header Sertar */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white safe-top pt-12 md:pt-4 shadow-sm relative z-10">
                <h2 className="text-xl font-bold text-slate-900">Filtre</h2>
                <button 
                    onClick={() => setIsOpen()} 
                    className="p-2 -mr-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition"
                >
                    <X size={28} />
                </button>
            </div>
            
            {/* Conținut Scrollabil */}
            <div className="flex-1 overflow-y-auto p-6 bg-white pb-32">
                <FilterContent />
            </div>
        </div>,
        document.body
      )}
    </>
  );
}

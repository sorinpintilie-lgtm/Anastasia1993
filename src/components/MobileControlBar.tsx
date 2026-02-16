'use client';
import React from 'react';
import { SlidersHorizontal, ArrowUpDown, LayoutGrid, List } from 'lucide-react';

interface MobileControlBarProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  onOpenFilters: () => void;
}

export default function MobileControlBar({ viewMode, setViewMode, onOpenFilters }: MobileControlBarProps) {
  return (
    <div className="lg:hidden sticky top-[96px] z-40 bg-white border-b border-slate-100 shadow-sm">
      <div className="grid grid-cols-3 divide-x divide-slate-100">
        {/* Sortare */}
        <button className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-slate-700 active:bg-slate-50">
          <ArrowUpDown size={16} />
          Sortare
        </button>

        {/* Filtre (deschide portalul existent) */}
        <button 
          onClick={onOpenFilters}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-slate-700 active:bg-slate-50"
        >
          <SlidersHorizontal size={16} />
          Filtre
        </button>

        {/* View Toggle */}
        <button 
          onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-emerald-600 active:bg-slate-50"
        >
          {viewMode === 'grid' ? <List size={18} /> : <LayoutGrid size={18} />}
          {viewMode === 'grid' ? 'Listă' : 'Grid'}
        </button>
      </div>
    </div>
  );
}
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import Categories from '@/components/Categories';
import Products from '@/components/Products';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { Truck, ShieldCheck, PhoneCall } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans text-[#1F2933]">
      
      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-white">
        <Navbar />
        <HeroSlider />
      
      {/* Mini bandă de încredere */}
      <div className="bg-slate-50 py-16">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-slate-800">
            <div className="flex items-center gap-5 justify-center md:justify-start border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
               <div className="p-3 bg-emerald-100 rounded-full">
                 <Truck className="text-emerald-600" size={32} />
               </div>
               <div>
                  <h4 className="font-bold text-lg">Transport paletizat</h4>
                  <p className="text-sm text-slate-500">Livrăm în siguranță, fără daune.</p>
               </div>
            </div>
            <div className="flex items-center gap-5 justify-center md:justify-start border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
               <div className="p-3 bg-emerald-100 rounded-full">
                 <ShieldCheck className="text-emerald-600" size={32} />
               </div>
               <div>
                  <h4 className="font-bold text-lg">Garanție 25 ani</h4>
                  <p className="text-sm text-slate-500">Performanță garantată contractual.</p>
               </div>
            </div>
            <div className="flex items-center gap-5 justify-center md:justify-start">
               <div className="p-3 bg-emerald-100 rounded-full">
                 <PhoneCall className="text-emerald-600" size={32} />
               </div>
               <div>
                  <h4 className="font-bold text-lg">Suport tehnic</h4>
                  <p className="text-sm text-slate-500">Ingineri disponibili luni-vineri.</p>
               </div>
            </div>
         </div>
      </div>

      <Categories />
      <Products />
      <About />
      
      <Footer />
      </main>

    </div>
  );
}

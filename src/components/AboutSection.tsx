import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-solar-green-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-sun-orange-600 font-bold tracking-wider text-sm uppercase">Despre noi</span>
                    <h2 className="text-4xl font-extrabold text-solar-green-900 mt-2 mb-6">
                        Nu vindem doar cutii.<br />Oferim energie pentru acasă.
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed mb-8">
                        Suntem o echipă de ingineri pasionați, nu doar un magazin online. Înțelegem că investiția în panouri fotovoltaice este una majoră pentru familia ta. De aceea, suntem aici să te ghidăm de la primul click până la primul kwh produs.
                    </p>

                    <div className="space-y-4">
                        {[
                            "Consultanță tehnică gratuită înainte de achiziție",
                            "Parteneri oficiali Huawei, Victron, Fronius",
                            "Livrare paletizată asigurată (fără panouri sparte)",
                            "Suport pentru dosarul Casa Verde"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="text-solar-green-600 flex-shrink-0" size={24} />
                                <span className="font-bold text-stone-700">{item}</span>
                            </div>
                        ))}
                    </div>

                    <button className="mt-10 border-2 border-solar-green-700 text-solar-green-800 px-8 py-3 rounded-2xl font-bold hover:bg-solar-green-700 hover:text-white transition-all">
                        Discută cu un inginer
                    </button>
                </div>

                <div className="relative">
                     <div className="bg-white p-4 rounded-[2rem] shadow-xl rotate-2 hover:rotate-0 transition duration-500">
                        <div className="h-96 bg-stone-200 rounded-[1.5rem] flex items-center justify-center text-stone-500">
                            [Imagine echipă / instalare reală]
                        </div>
                     </div>
                     <div className="absolute -bottom-6 -left-6 bg-sun-orange-500 text-white p-6 rounded-3xl shadow-lg max-w-xs">
                        <p className="text-2xl font-bold">1500+</p>
                        <p className="text-sm opacity-90">Case independente energetic în toată România</p>
                     </div>
                </div>
            </div>
        </div>
    </section>
  );
}

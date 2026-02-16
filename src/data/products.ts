// src/data/products.ts

export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  badge?: string; // ex: "Nou", "Stoc epuizat", "-15%"
  specs: string[]; // ex: ["450w", "Monocristalin"]
};

export const productsData: Product[] = [
  // --- Panouri fotovoltaice (8 buc) ---
  {
    id: 'p1', category: 'panouri', name: 'Canadian Solar 450w hi-ku', price: 850, image: '/imagini/panou solar.jpg',
    specs: ['450w', 'Monocristalin'], badge: 'Cel mai vândut'
  },
  {
    id: 'p2', category: 'panouri', name: 'Longi Solar 540w bifacial', price: 1100, image: '/imagini/panou solar.jpg',
    specs: ['540w', 'Bifacial'], badge: 'Nou'
  },
  {
    id: 'p3', category: 'panouri', name: 'Jinko Solar Tiger Pro 415w', price: 780, image: '/imagini/panou solar.jpg',
    specs: ['415w', 'Full black']
  },
  {
    id: 'p4', category: 'panouri', name: 'Trina Solar Vertex S 400w', price: 720, oldPrice: 800, image: '/imagini/panou solar.jpg',
    specs: ['400w', 'Eficiență 21%'], badge: '-10%'
  },
  {
    id: 'p5', category: 'panouri', name: 'REC Alpha Pure 420w', price: 1450, image: '/imagini/panou solar.jpg',
    specs: ['420w', 'Fără plumb']
  },
  {
    id: 'p6', category: 'panouri', name: 'Q Cells Q.PEAK DUO 395w', price: 900, image: '/imagini/panou solar.jpg',
    specs: ['395w', 'Garanție 25 ani']
  },
  {
    id: 'p7', category: 'panouri', name: 'FuturaSun 380w silk', price: 650, image: '/imagini/panou solar.jpg',
    specs: ['380w', 'Policristalin'], badge: 'Lichidare'
  },
  {
    id: 'p8', category: 'panouri', name: 'Canadian Solar 600w bihi', price: 1300, image: '/imagini/panou solar.jpg',
    specs: ['600w', 'Industrial']
  },

  // --- Invertoare (8 buc) ---
  {
    id: 'i1', category: 'invertoare', name: 'Huawei SUN2000-5KTL-L1', price: 4200, image: '/imagini/invertor.jpg',
    specs: ['5kw', 'Hibrid monofazat'], badge: 'Top vânzări'
  },
  {
    id: 'i2', category: 'invertoare', name: 'Fronius Primo 6.0-1', price: 5800, image: '/imagini/invertor.jpg',
    specs: ['6kw', 'WLAN integrat']
  },
  {
    id: 'i3', category: 'invertoare', name: 'Growatt MIN 3000TL-XH', price: 2800, image: '/imagini/invertor.jpg',
    specs: ['3kw', 'Pregătit pentru baterie']
  },
  {
    id: 'i4', category: 'invertoare', name: 'Victron MultiPlus-II 48/3000', price: 6200, image: '/imagini/invertor.jpg',
    specs: ['Off-grid', '48v']
  },
  {
    id: 'i5', category: 'invertoare', name: 'Huawei SUN2000-10KTL-M1', price: 8500, image: '/imagini/invertor.jpg',
    specs: ['10kw', 'Trifazat']
  },
  {
    id: 'i6', category: 'invertoare', name: 'Sungrow SG5.0RS', price: 3900, oldPrice: 4500, image: '/imagini/invertor.jpg',
    specs: ['5kw', 'Display led'], badge: 'Promoție'
  },
  {
    id: 'i7', category: 'invertoare', name: 'SMA Sunny Boy 3.0', price: 4100, image: '/imagini/invertor.jpg',
    specs: ['3kw', 'Tehnologie germană']
  },
  {
    id: 'i8', category: 'invertoare', name: 'Deye SUN-8K-SG01', price: 9800, image: '/imagini/invertor.jpg',
    specs: ['8kw', 'Hibrid joasă tensiune']
  },

  // --- Baterii (8 buc) ---
  {
    id: 'b1', category: 'baterii', name: 'Huawei Luna2000 5kwh', price: 12500, image: '/imagini/baterii.jpg',
    specs: ['5kwh', 'LiFePO4'], badge: 'Modulară'
  },
  {
    id: 'b2', category: 'baterii', name: 'Pylontech US2000C', price: 5600, image: '/imagini/baterii.jpg',
    specs: ['2.4kwh', '48v']
  },
  {
    id: 'b3', category: 'baterii', name: 'Pylontech US3000C', price: 7200, image: '/imagini/baterii.jpg',
    specs: ['3.5kwh', '48v']
  },
  {
    id: 'b4', category: 'baterii', name: 'BYD Battery-Box Premium hvs', price: 14000, image: '/imagini/baterii.jpg',
    specs: ['5.1kwh', 'Înaltă tensiune']
  },
  {
    id: 'b5', category: 'baterii', name: 'Victron AGM Super Cycle', price: 2100, image: '/imagini/baterii.jpg',
    specs: ['170ah', '12v'], badge: 'Buget'
  },
  {
    id: 'b6', category: 'baterii', name: 'Dyness A48100', price: 9500, image: '/imagini/baterii.jpg',
    specs: ['4.8kwh', 'Montaj rack']
  },
  {
    id: 'b7', category: 'baterii', name: 'LG Chem RESU 10h', price: 24000, image: '/imagini/baterii.jpg',
    specs: ['9.8kwh', 'Compactă']
  },
  {
    id: 'b8', category: 'baterii', name: 'Sunwoda SunESS', price: 11000, image: '/imagini/baterii.jpg',
    specs: ['5kwh', 'Scalabilă']
  },

  // --- Kit-uri (8 buc) ---
  {
    id: 'k1', category: 'kit-uri', name: 'Kit off-grid cabană mică', price: 12500, image: '/imagini/kit.jpg',
    specs: ['3kw', 'Baterii gel'], badge: 'Popular'
  },
  {
    id: 'k2', category: 'kit-uri', name: 'Kit prosumator Huawei 5kw', price: 18000, image: '/imagini/kit.jpg',
    specs: ['5kw', 'On-grid']
  },
  {
    id: 'k3', category: 'kit-uri', name: 'Kit hibrid premium 6kw', price: 35000, image: '/imagini/kit.jpg',
    specs: ['6kw', 'LiFePO4 5kwh']
  },
  {
    id: 'k4', category: 'kit-uri', name: 'Kit Casa Verde 3kw', price: 20000, oldPrice: 22000, image: '/imagini/kit.jpg',
    specs: ['Dosar inclus', 'Montaj inclus'], badge: 'Eligibil'
  },
  {
    id: 'k5', category: 'kit-uri', name: 'Kit industrial 50kw', price: 150000, image: '/imagini/kit.jpg',
    specs: ['Trifazat', 'Fără montaj']
  },
  {
    id: 'k6', category: 'kit-uri', name: 'Kit rulotă / camper', price: 4500, image: '/imagini/kit.jpg',
    specs: ['400w', 'Victron']
  },
  {
    id: 'k7', category: 'kit-uri', name: 'Kit backup pană curent', price: 8900, image: '/imagini/kit.jpg',
    specs: ['Victron', 'Pylontech']
  },
  {
    id: 'k8', category: 'kit-uri', name: 'Kit pompă apă solară', price: 3200, image: '/imagini/kit.jpg',
    specs: ['Acționare directă', 'Fără baterii']
  },

  // --- Eoliene ---
  {
    id: 'e1', category: 'eoliene', name: 'Turbina eoliană Ista Breeze 500w', price: 1800, image: '/imagini/eoliene.jpg',
    specs: ['500w', '12v/24v'], badge: 'Cel mai vândut'
  },
  {
    id: 'e2', category: 'eoliene', name: 'Generator eolian vertical 1kw', price: 4500, image: '/imagini/eoliene.jpg',
    specs: ['1000w', 'Vertical'], badge: 'Silențios'
  },
  {
    id: 'e8', category: 'eoliene', name: 'Turbina verticală Maglev 600w', price: 3400, image: '/imagini/eoliene.jpg',
    specs: ['600w', 'Pornire la 2m/s']
  },

  // --- Accesorii montaj ---
  {
    id: 'a1', category: 'accesorii', name: 'Cablu solar 6mm roșu/negru', price: 8, image: '/imagini/accesorii.jpg',
    specs: ['Preț per metru', 'TUV'], badge: 'Stoc limitat'
  },
  {
    id: 'a7', category: 'accesorii', name: 'Tablou protecție AC/DC 1 string', price: 450, image: '/imagini/accesorii.jpg',
    specs: ['Gata cablat', 'Siguranțe incluse']
  }
];
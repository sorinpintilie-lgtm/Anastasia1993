import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShopProvider } from '@/context/ShopContext';
import PromoBar from '@/components/PromoBar';
import WhatsAppButton from '@/components/WhatsAppButton';

// Configurare font cu suport pentru Română (latin-ext)
const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anastasia1993 - energie verde",
  description: "Magazin online panouri fotovoltaice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>
        <ShopProvider>
          <PromoBar />
          {children}
          <WhatsAppButton />
        </ShopProvider>
      </body>
    </html>
  );
}

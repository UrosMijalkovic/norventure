import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Norventure Services | Accounting, Tax & Corporate Services",
    template: "%s | Norventure Services",
  },
  description: "Accounting, tax, and corporate services for international businesses operating in Southeast Europe. Supporting multinational groups with local expertise and international standards.",
  keywords: "accounting services, tax advisory, payroll, corporate services, Serbia, Southeast Europe, international accounting, transfer pricing",
  openGraph: {
    title: "Norventure Services",
    description: "Accounting, tax, and corporate services for international businesses in Southeast Europe.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
          <Navigation />
          <main className="pt-[80px]">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

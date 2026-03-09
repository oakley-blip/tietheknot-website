import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tie the Knot Cyprus - Luxury Wedding Planning in Paphos",
  description: "Award-winning bespoke wedding planning and photography services in Paphos, Cyprus. Creating weddings as unique as your love story since 1989.",
  keywords: "Cyprus wedding planner, Paphos weddings, destination wedding Cyprus, wedding photographer Cyprus, luxury wedding planning, Mediterranean wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

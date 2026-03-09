import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Tie the Knot Cyprus - Luxury Wedding Planning in Paphos",
  description: "Award-winning bespoke wedding planning and photography services in Paphos, Cyprus. Vicki and Lee create unforgettable Mediterranean weddings with 35 years of experience.",
  keywords: "Cyprus wedding planner, Paphos weddings, destination wedding Cyprus, wedding photographer Cyprus, luxury wedding planning",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}

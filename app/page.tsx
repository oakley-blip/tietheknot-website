import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tie the Knot Cyprus - Luxury Wedding Planning in Paphos",
  description: "Award-winning bespoke wedding planning and photography in Paphos, Cyprus. Let Vicki and Lee create your dream Mediterranean wedding.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 font-light tracking-wide animate-fade-in"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Your Dream Wedding in Paradise
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 font-light tracking-wide max-w-3xl mx-auto animate-fade-in-delay">
            Bespoke wedding planning in the heart of Paphos, Cyprus
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300 animate-fade-in-delay-2"
          >
            Start Planning
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 text-[#2C2C2C] max-w-[90vw] mx-auto" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Welcome to Tie the Knot Cyprus
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#2C2C2C]/80 mb-4 md:mb-6 max-w-[90vw] mx-auto">
            We are Vicki and Lee, your dedicated wedding planning team in beautiful Paphos. With over 35 years of combined experience,
            we specialize in creating bespoke, unforgettable weddings that reflect your unique love story against the stunning backdrop
            of the Mediterranean.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#2C2C2C]/80 max-w-[90vw] mx-auto">
            From intimate beach ceremonies to grand celebrations at historic venues, we handle every detail with care,
            creativity, and professionalism.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24 px-6 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-12 md:mb-16 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Bespoke Planning */}
            <div className="bg-white p-8 md:p-10 text-center border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 mx-auto mb-6">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#C4956A]">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M12 12L15 18H9L12 12Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-2xl mb-4 text-[#4A6741]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Bespoke Planning
              </h3>
              <p className="text-[#2C2C2C]/70 leading-relaxed text-sm md:text-base">Complete wedding design and coordination tailored to your vision, from concept to execution.</p>
            </div>

            {/* Venue Finding */}
            <div className="bg-white p-8 md:p-10 text-center border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 mx-auto mb-6">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#C4956A]">
                  <path d="M3 21V9L12 3L21 9V21" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M12 3C12 3 14 5 16 5C18 5 19 4 19 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-2xl mb-4 text-[#4A6741]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Venue Finding
              </h3>
              <p className="text-[#2C2C2C]/70 leading-relaxed text-sm md:text-base">Access to the most stunning wedding venues across Paphos, from beachfront to historic estates.</p>
            </div>

            {/* Award-Winning Photography */}
            <div className="bg-white p-8 md:p-10 text-center border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 mx-auto mb-6">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#C4956A]">
                  <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M16 6L17 4H7L8 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-2xl mb-4 text-[#4A6741]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Award-Winning Photography
              </h3>
              <p className="text-[#2C2C2C]/70 leading-relaxed text-sm md:text-base">Capture every moment with Lee's expert eye, preserving your memories in timeless imagery.</p>
            </div>
          </div>
          <div className="text-center mt-10 md:mt-12">
            <Link
              href="/services"
              className="inline-block border-2 border-[#4A6741] text-[#4A6741] hover:bg-[#4A6741] hover:text-white px-8 md:px-10 py-3 text-sm uppercase tracking-widest transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 px-6 bg-[#4A6741] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 font-light leading-relaxed max-w-[90vw] mx-auto" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            "Vicki and Lee made our dream wedding a reality. Every detail was perfect, from the stunning venue
            to the breathtaking photos. We couldn't have asked for a better team to guide us through our special day."
          </p>
          <p className="text-xs md:text-sm uppercase tracking-widest text-white/80">— Sarah & Michael, 2025</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 text-[#2C2C2C] max-w-[90vw] mx-auto" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Let's Create Your Perfect Day
          </h2>
          <p className="text-base md:text-lg mb-8 md:mb-10 text-[#2C2C2C]/80 leading-relaxed max-w-[90vw] mx-auto">
            Ready to start planning your Cyprus wedding? Get in touch with us today for a complimentary consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#C4956A] hover:bg-[#B38558] text-white px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm uppercase tracking-widest transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/venues"
              className="inline-block border-2 border-[#4A6741] text-[#4A6741] hover:bg-[#4A6741] hover:text-white px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm uppercase tracking-widest transition-all duration-300"
            >
              Explore Venues
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

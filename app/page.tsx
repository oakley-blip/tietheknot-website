import Image from "next/image";
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
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Cyprus wedding ceremony by the sea"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 font-light tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Your Dream Wedding<br />in Paradise
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light tracking-wide">
            Bespoke wedding planning in the heart of Paphos, Cyprus
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C4956A] hover:bg-[#B38558] text-white px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300"
          >
            Start Planning
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-8 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Welcome to Tie the Knot Cyprus
          </h2>
          <p className="text-lg leading-relaxed text-[#2C2C2C]/80 mb-6">
            We are Vicki and Lee, your dedicated wedding planning team in beautiful Paphos. With over 35 years of combined experience,
            we specialize in creating bespoke, unforgettable weddings that reflect your unique love story against the stunning backdrop
            of the Mediterranean.
          </p>
          <p className="text-lg leading-relaxed text-[#2C2C2C]/80">
            From intimate beach ceremonies to grand celebrations at historic venues, we handle every detail with care,
            creativity, and professionalism.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center mb-16 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bespoke Planning',
                description: 'Complete wedding design and coordination tailored to your vision, from concept to execution.',
                icon: '✨',
              },
              {
                title: 'Venue Finding',
                description: 'Access to the most stunning wedding venues across Paphos, from beachfront to historic estates.',
                icon: '🏛️',
              },
              {
                title: 'Award-Winning Photography',
                description: "Capture every moment with Lee's expert eye, preserving your memories in timeless imagery.",
                icon: '📸',
              },
            ].map((service) => (
              <div key={service.title} className="bg-white p-10 text-center transition-all duration-300 hover:shadow-xl">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl mb-4 text-[#4A6741]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {service.title}
                </h3>
                <p className="text-[#2C2C2C]/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border-2 border-[#4A6741] text-[#4A6741] hover:bg-[#4A6741] hover:text-white px-10 py-3 text-sm uppercase tracking-widest transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-[#4A6741] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl mb-8 font-light leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            "Vicki and Lee made our dream wedding a reality. Every detail was perfect, from the stunning venue
            to the breathtaking photos. We couldn't have asked for a better team to guide us through our special day."
          </p>
          <p className="text-sm uppercase tracking-widest text-white/80">— Sarah & Michael, 2025</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-8 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Let's Create Your Perfect Day
          </h2>
          <p className="text-lg mb-10 text-[#2C2C2C]/80 leading-relaxed">
            Ready to start planning your Cyprus wedding? Get in touch with us today for a complimentary consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#C4956A] hover:bg-[#B38558] text-white px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/venues"
              className="inline-block border-2 border-[#4A6741] text-[#4A6741] hover:bg-[#4A6741] hover:text-white px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300"
            >
              Explore Venues
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

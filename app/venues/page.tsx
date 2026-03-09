import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Venues - Tie the Knot Cyprus",
  description: "Explore stunning wedding venues in Paphos, Cyprus. From beachfront ceremonies to historic estates, find your perfect location.",
};

export default function Venues() {
  const venues = [
    {
      name: 'Coral Beach Hotel & Resort',
      location: 'Coral Bay, Paphos',
      description: 'Luxury beachfront resort with stunning Mediterranean views, perfect for both intimate and grand celebrations.',
      features: ['Beach ceremony', 'Indoor/outdoor options', 'Luxury accommodation', 'Full catering'],
      image: 'https://images.unsplash.com/photo-1520483601560-73e345e7f23e?w=1200&q=80',
    },
    {
      name: 'Aphrodite Hills Resort',
      location: 'Kouklia, Paphos',
      description: 'Spectacular clifftop resort overlooking the mythical birthplace of Aphrodite, offering breathtaking sunset views.',
      features: ['Panoramic views', 'Championship golf course', 'Multiple venues', 'Villa accommodation'],
      image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80',
    },
    {
      name: 'Annabelle Hotel',
      location: 'Paphos Harbor',
      description: 'Award-winning boutique hotel with lush gardens and elegant spaces, ideal for sophisticated celebrations.',
      features: ['Tropical gardens', 'Waterfront location', 'Gourmet dining', 'Exclusive service'],
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80',
    },
    {
      name: 'Kamares Village',
      location: 'Tala, Paphos',
      description: 'Traditional stone village with authentic Cypriot charm, perfect for rustic and intimate weddings.',
      features: ['Authentic Cyprus style', 'Cobblestone courtyards', 'Mountain views', 'Traditional taverna'],
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2d0?w=1200&q=80',
    },
    {
      name: 'Elysium Hotel',
      location: 'Paphos Seafront',
      description: 'Elegant five-star hotel with classical architecture and direct beach access, offering timeless sophistication.',
      features: ['Private beach', 'Byzantine architecture', 'Rooftop terrace', 'Spa facilities'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    },
    {
      name: 'Private Villas & Estates',
      location: 'Throughout Paphos',
      description: 'Exclusive private properties with pools, gardens, and stunning views for intimate, personalized celebrations.',
      features: ['Complete privacy', 'Customizable setup', 'Pool & gardens', 'Flexible arrangements'],
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80"
          alt="Cyprus wedding venue"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl mb-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Paphos Venues
          </h1>
          <p className="text-xl font-light tracking-wide">Discover your perfect wedding location</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-[#2C2C2C]/80">
            Paphos offers an incredible variety of wedding venues, each with its own unique character and charm.
            From five-star resorts with pristine beaches to intimate hillside villas with panoramic views, we'll help
            you find the perfect setting for your special day.
          </p>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-16 px-6 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <div
                key={venue.name}
                className="bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl mb-2 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {venue.name}
                  </h3>
                  <p className="text-sm uppercase tracking-wider text-[#C4956A] mb-4">{venue.location}</p>
                  <p className="text-[#2C2C2C]/80 leading-relaxed mb-6">{venue.description}</p>
                  <ul className="space-y-2">
                    {venue.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#2C2C2C]/70">
                        <span className="text-[#4A6741]">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Info */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl mb-8 text-center text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Getting Married in Cyprus
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[#2C2C2C]/80">
            <p>
              Cyprus is one of the most popular destinations for weddings in Europe, offering a straightforward legal
              process and stunning locations. We guide you through every step of the paperwork and requirements.
            </p>
            <p>
              Whether you're planning a legal ceremony, a blessing, or a symbolic celebration, we ensure everything
              is handled smoothly and professionally. Our experience with local authorities and venues means your
              wedding planning is stress-free.
            </p>
            <p>
              Most venues require booking 12-18 months in advance for peak season (May-October), though last-minute
              arrangements are sometimes possible. We recommend contacting us as early as possible to secure your
              preferred date and location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#4A6741] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Let's Find Your Perfect Venue
          </h2>
          <p className="text-lg mb-10 text-white/90 leading-relaxed">
            Schedule a consultation to discuss your vision, and we'll recommend the ideal venues for your celebration.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#4A6741] hover:bg-[#FAF7F2] px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

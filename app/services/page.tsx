import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Tie the Knot Cyprus",
  description: "Comprehensive wedding planning services in Paphos: bespoke planning, venue finding, award-winning photography, and day coordination.",
};

export default function Services() {
  const services = [
    {
      title: 'Bespoke Wedding Planning',
      description: 'Our signature service covers every aspect of your wedding from initial concept to final execution.',
      features: [
        'Personalized consultation and vision development',
        'Complete design concept and styling',
        'Vendor selection and coordination',
        'Budget management and timeline creation',
        'Unlimited planning meetings',
        'On-site coordination on your wedding day',
      ],
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
    },
    {
      title: 'Venue Finding',
      description: 'Access our exclusive network of the most spectacular wedding venues across Paphos and Cyprus.',
      features: [
        'Curated venue recommendations based on your style',
        'Site visits and tours with expert guidance',
        'Contract negotiation and review',
        'Coordination with venue management',
        'Layout planning and design consultation',
        'Logistics coordination for venue access',
      ],
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2d0?w=1200&q=80',
    },
    {
      title: 'Award-Winning Photography',
      description: 'Lee captures every precious moment with his distinctive artistic style and storytelling approach.',
      features: [
        'Full-day coverage from preparation to reception',
        'Pre-wedding consultation and location scouting',
        'Natural, editorial-style photography',
        'High-resolution digital images',
        'Online gallery with sharing capabilities',
        'Print-ready files and custom albums available',
      ],
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
    },
    {
      title: 'Day Coordination',
      description: 'Perfect for couples who prefer to plan themselves but want expert coordination on the big day.',
      features: [
        'Final planning meeting 30 days before',
        'Timeline creation and vendor coordination',
        'Rehearsal attendance and direction',
        'Full-day coordination and management',
        'Problem-solving and last-minute adjustments',
        'Family and wedding party assistance',
      ],
      image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=1200&q=80',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80"
          alt="Wedding table setting"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl mb-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Our Services
          </h1>
          <p className="text-xl font-light tracking-wide">Comprehensive wedding planning tailored to you</p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.title}
          className={`py-24 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F2]'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {service.title}
                </h2>
                <p className="text-lg leading-relaxed text-[#2C2C2C]/80 mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[#2C2C2C]/80">
                      <span className="text-[#4A6741] text-xl mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative h-[500px] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Packages */}
      <section className="py-24 px-6 bg-[#4A6741] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Flexible Packages
          </h2>
          <p className="text-lg mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            We understand that every couple is unique. Our services can be customized and combined to create the
            perfect package for your needs and budget. Whether you need full planning or just day-of coordination,
            we're here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Essentials',
                description: 'Perfect for intimate weddings',
                includes: 'Day coordination + venue finding',
              },
              {
                name: 'Complete',
                description: 'Our most popular package',
                includes: 'Full planning + photography',
              },
              {
                name: 'Ultimate',
                description: 'The complete experience',
                includes: 'Everything included + extras',
              },
            ].map((pkg) => (
              <div key={pkg.name} className="border-2 border-white/30 p-8 hover:border-white/60 transition-all">
                <h3 className="text-3xl mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {pkg.name}
                </h3>
                <p className="text-white/80 mb-4">{pkg.description}</p>
                <p className="text-sm text-white/70">{pkg.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl mb-8 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Let's Discuss Your Wedding
          </h2>
          <p className="text-lg mb-10 text-[#2C2C2C]/80 leading-relaxed">
            Schedule a complimentary consultation to discuss which services are right for you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#C4956A] hover:bg-[#B38558] text-white px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
}

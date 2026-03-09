import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Tie the Knot Cyprus",
  description: "Meet Vicki and Lee, your award-winning wedding planning team in Paphos. 35 years of experience creating unforgettable Cyprus weddings.",
};

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&q=80"
          alt="Beautiful Cyprus coastline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl mb-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            About Us
          </h1>
          <p className="text-xl font-light tracking-wide">Creating dream weddings in Paphos since 2010</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl mb-8 text-center text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Our Story
          </h2>
          <p className="text-lg leading-relaxed text-[#2C2C2C]/80 mb-6">
            Tie the Knot Cyprus was born from a passion for creating magical moments and a deep love for the beauty of Paphos.
            What started as a small dream has blossomed into one of Cyprus's most trusted wedding planning services.
          </p>
          <p className="text-lg leading-relaxed text-[#2C2C2C]/80 mb-6">
            We believe every couple deserves a wedding that reflects their unique story. Whether you envision an intimate
            beach ceremony at sunset or a grand celebration in a historic venue, we bring your vision to life with meticulous
            attention to detail and genuine care.
          </p>
          <p className="text-lg leading-relaxed text-[#2C2C2C]/80">
            Our approach combines creative design, flawless execution, and personalized service. We work closely with the finest
            vendors across Cyprus to ensure every element of your wedding is nothing short of extraordinary.
          </p>
        </div>
      </section>

      {/* Vicki's Bio */}
      <section className="py-24 px-6 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Vicki - Wedding Planner"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-5xl mb-6 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Meet Vicki
              </h2>
              <p className="text-sm uppercase tracking-widest text-[#C4956A] mb-4">Award-Winning Wedding Planner</p>
              <p className="text-lg leading-relaxed text-[#2C2C2C]/80 mb-6">
                With over 35 years of experience in the wedding industry, Vicki has orchestrated hundreds of unforgettable
                celebrations across Cyprus. Her expertise spans every aspect of wedding planning, from intimate elopements
                to grand destination weddings.
              </p>
              <p className="text-lg leading-relaxed text-[#2C2C2C]/80 mb-6">
                Vicki's award-winning approach combines creativity, organization, and a genuine passion for bringing couples'
                dreams to life. Her attention to detail and ability to anticipate every need has earned her recognition as
                one of Cyprus's premier wedding planners.
              </p>
              <p className="text-lg leading-relaxed text-[#2C2C2C]/80">
                What sets Vicki apart is her warm, personal approach. She takes the time to truly understand each couple,
                creating weddings that are authentic reflections of their love story and personality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lee's Bio */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl mb-6 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Meet Lee
              </h2>
              <p className="text-sm uppercase tracking-widest text-[#C4956A] mb-4">Award-Winning Photographer</p>
              <p className="text-lg leading-relaxed text-[#2C2C2C]/80 mb-6">
                Lee is an internationally acclaimed photographer whose work has been featured in prestigious wedding publications
                worldwide. His distinctive style captures the raw emotion and authentic beauty of each wedding day.
              </p>
              <p className="text-lg leading-relaxed text-[#2C2C2C]/80 mb-6">
                With an artist's eye and a storyteller's heart, Lee creates stunning visual narratives that couples treasure
                for a lifetime. His ability to capture fleeting moments of joy, love, and celebration is unmatched, making
                him one of the most sought-after wedding photographers in Cyprus.
              </p>
              <p className="text-lg leading-relaxed text-[#2C2C2C]/80 mb-6">
                Lee's approach is unobtrusive yet comprehensive, ensuring every important moment is documented while allowing
                couples to remain fully present in their celebration.
              </p>
              <a
                href="https://leesquirrell.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#4A6741] text-[#4A6741] hover:bg-[#4A6741] hover:text-white px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
            <div className="relative h-[500px] order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Lee - Wedding Photographer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 px-6 bg-[#4A6741] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl mb-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: '2024',
                award: 'Best Wedding Planner',
                org: 'Cyprus Wedding Awards',
              },
              {
                year: '2023',
                award: 'Excellence in Photography',
                org: 'International Wedding Association',
              },
              {
                year: '2022',
                award: 'Top Destination Wedding Service',
                org: 'Mediterranean Bride Magazine',
              },
            ].map((award) => (
              <div key={award.award} className="border border-white/30 p-8">
                <p className="text-4xl mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {award.year}
                </p>
                <p className="text-xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {award.award}
                </p>
                <p className="text-sm text-white/70">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl mb-8 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Ready to Start Planning?
          </h2>
          <p className="text-lg mb-10 text-[#2C2C2C]/80 leading-relaxed">
            Let's discuss your vision and create something truly extraordinary together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#C4956A] hover:bg-[#B38558] text-white px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}

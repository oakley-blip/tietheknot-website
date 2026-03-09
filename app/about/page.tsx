'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: '400px',
          backgroundImage: 'url("https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            width: '100%',
            padding: '0 24px',
          }}
        >
          <div className="eyebrow" style={{ color: 'white', marginBottom: '16px' }}>
            MEET THE TEAM
          </div>
          <h1 style={{ color: 'white' }}>Vicki & Lee</h1>
        </div>
      </section>

      {/* VICKI SECTION */}
      <section className="section" style={{ background: '#FEFCF8' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            maxWidth: '1280px',
            margin: '0 auto',
            gap: '80px',
            alignItems: 'center',
          }}
          className="about-row"
        >
          {/* Image Left */}
          <div style={{ position: 'relative', height: '600px' }}>
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
              alt="Vicki - Wedding Planner"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Text Right */}
          <div style={{ padding: '0 40px' }}>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>WEDDING PLANNER</div>
            <h2 style={{ marginBottom: '24px' }}>Vicki</h2>
            <p style={{ marginBottom: '20px' }}>
              With over 20 years of experience in the events industry, Vicki brings passion, creativity, and meticulous attention to detail to every wedding she plans.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Having relocated to Cyprus in 2010, she fell in love with the island's natural beauty and knew it was the perfect place to create unforgettable wedding experiences. As an independent planner, Vicki works exclusively for her couples — offering unbiased venue recommendations and tailored service.
            </p>
            <p style={{ marginBottom: '20px' }}>
              From intimate beach ceremonies to grand celebrations, Vicki's warm, calm approach ensures every couple feels supported and excited throughout their planning journey.
            </p>
            <div className="decorative-line" />
            <p style={{ fontStyle: 'italic', color: '#7D9B76' }}>
              "Every wedding is unique. My job is to bring your vision to life."
            </p>
          </div>
        </div>
      </section>

      {/* LEE SECTION */}
      <section className="section" style={{ background: '#F5F2EE' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            maxWidth: '1280px',
            margin: '0 auto',
            gap: '80px',
            alignItems: 'center',
          }}
          className="about-row-reverse"
        >
          {/* Text Left */}
          <div style={{ padding: '0 40px' }}>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>PHOTOGRAPHER</div>
            <h2 style={{ marginBottom: '24px' }}>Lee</h2>
            <p style={{ marginBottom: '20px' }}>
              Lee is a multi-award-winning wedding photographer with an instinctive eye for capturing raw emotion and authentic moments.
            </p>
            <p style={{ marginBottom: '20px' }}>
              With over 15 years of experience shooting weddings across Cyprus and Europe, Lee's work has been featured in international wedding publications and earned numerous industry accolades.
            </p>
            <p style={{ marginBottom: '20px' }}>
              His documentary-style approach blends beautifully composed portraits with candid storytelling, creating timeless imagery that couples treasure for a lifetime.
            </p>
            <p style={{ marginBottom: '20px' }}>
              View Lee's full portfolio at{' '}
              <a href="https://leesquirrell.net" target="_blank" rel="noopener noreferrer" className="link-sage">
                leesquirrell.net
              </a>
            </p>
            <div className="decorative-line" />
            <p style={{ fontStyle: 'italic', color: '#7D9B76' }}>
              "I don't just photograph weddings. I tell love stories."
            </p>
          </div>

          {/* Image Right */}
          <div style={{ position: 'relative', height: '600px' }}>
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Lee - Wedding Photographer"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section className="section" style={{ background: '#FEFCF8', textAlign: 'center' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '16px' }}>RECOGNITION</div>
          <h2 style={{ marginBottom: '60px' }}>Awards & Accolades</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                border: '1px solid #7D9B76',
                padding: '40px 30px',
                background: 'white',
              }}
            >
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#7D9B76' }}>
                Best Wedding Photographer
              </h3>
              <p style={{ fontSize: '14px', color: '#8A8A8A' }}>Cyprus Wedding Awards 2023</p>
            </div>

            <div
              style={{
                border: '1px solid #7D9B76',
                padding: '40px 30px',
                background: 'white',
              }}
            >
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#7D9B76' }}>
                Top Wedding Planner
              </h3>
              <p style={{ fontSize: '14px', color: '#8A8A8A' }}>Mediterranean Weddings 2024</p>
            </div>

            <div
              style={{
                border: '1px solid #7D9B76',
                padding: '40px 30px',
                background: 'white',
              }}
            >
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#7D9B76' }}>
                Featured in Weddings Abroad
              </h3>
              <p style={{ fontSize: '14px', color: '#8A8A8A' }}>Multiple Publications</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: '#7D9B76',
          padding: '100px 24px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ color: 'white', marginBottom: '24px' }}>Ready to Start Planning?</h2>
          <p style={{ marginBottom: '32px', color: 'white', opacity: 0.95 }}>
            Let's create something beautiful together. Get in touch for a complimentary consultation.
          </p>
          <Link href="/contact">
            <button className="btn-white">Contact Us</button>
          </Link>
        </div>
      </section>

      {/* RESPONSIVE STYLES */}
      <style jsx>{`
        @media (max-width: 768px) {
          .about-row,
          .about-row-reverse {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-row > div:first-child {
            order: 2;
          }
          .about-row > div:last-child {
            order: 1;
            padding: 0 24px !important;
          }
          .about-row-reverse > div {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </main>
  );
}

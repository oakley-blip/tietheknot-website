'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* SECTION 1: HERO */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.45) 100%)',
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
          <div
            className="animate-fade-in-up"
            style={{
              fontFamily: 'var(--font-raleway)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            PAPHOS, CYPRUS
          </div>
          <h1
            className="display-heading animate-fade-in-up animate-delay-100"
            style={{
              color: 'white',
              marginBottom: '20px',
            }}
          >
            Your Love Story,<br />Beautifully Told.
          </h1>
          <p
            className="animate-fade-in-up animate-delay-200"
            style={{
              fontFamily: 'var(--font-raleway)',
              fontSize: '16px',
              fontWeight: 300,
              letterSpacing: '0.05em',
              opacity: 0.9,
              marginBottom: '32px',
            }}
          >
            Award-winning wedding planning in the heart of the Mediterranean
          </p>
          <Link href="/contact">
            <button className="btn-white animate-fade-in-up animate-delay-300">
              Begin Your Journey
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 2: INTRO */}
      <section className="section" style={{ background: '#FEFCF8' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            {/* Left Column */}
            <div>
              <div
                style={{
                  fontSize: '120px',
                  fontFamily: 'var(--font-cormorant)',
                  color: '#C4956A',
                  lineHeight: '1',
                  marginBottom: '20px',
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontStyle: 'italic',
                  fontSize: '32px',
                  lineHeight: '1.4',
                  color: '#1C1C1C',
                }}
              >
                Creating weddings as unique as your love story — since 1989.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p style={{ marginBottom: '24px' }}>
                Tie the Knot Cyprus is Vicki and Lee — a husband and wife team with a collective 35 years in the events industry. Based in beautiful Paphos, we bring together award-winning wedding planning and world-class photography to create your perfect day.
              </p>
              <div className="decorative-line" />
              <p>
                Every wedding we plan is bespoke, personal, and unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      {/* Service 1: Bespoke Wedding Planning */}
      <section style={{ background: '#FEFCF8' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
          className="service-row"
        >
          {/* Image Left */}
          <div style={{ position: 'relative', height: '520px' }} className="service-image">
            <Image
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80"
              alt="Bespoke Wedding Planning"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Text Right */}
          <div style={{ padding: '80px' }} className="service-content">
            <div className="caption" style={{ marginBottom: '16px' }}>01 / PLANNING</div>
            <h2 style={{ marginBottom: '24px' }}>Bespoke Wedding Planning</h2>
            <p style={{ marginBottom: '24px' }}>
              Regardless of size or budget, we guide you through every detail of planning your perfect Paphos wedding. As an independent planner, we work exclusively for you — no venue bias, no pressure, just your dream day brought to life.
            </p>
            <Link href="/services" className="link-sage">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* Service 2: Wedding Photography */}
      <section style={{ background: '#F5F2EE' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
          className="service-row"
        >
          {/* Text Left */}
          <div style={{ padding: '80px' }} className="service-content">
            <div className="caption" style={{ marginBottom: '16px' }}>02 / PHOTOGRAPHY</div>
            <h2 style={{ marginBottom: '24px' }}>Award-Winning Photography</h2>
            <p style={{ marginBottom: '24px' }}>
              Lee is a multi award-winning Cyprus wedding photographer, capturing raw emotion and timeless moments. With an instinctive eye and decades of experience, he creates images you will treasure forever. View his full portfolio at leesquirrell.net.
            </p>
            <a href="https://leesquirrell.net" target="_blank" rel="noopener noreferrer" className="link-sage">
              View Portfolio →
            </a>
          </div>
          {/* Image Right */}
          <div style={{ position: 'relative', height: '520px' }} className="service-image">
            <Image
              src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80"
              alt="Award-Winning Photography"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Service 3: Elopements & Ceremonies */}
      <section style={{ background: '#FEFCF8' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
          className="service-row"
        >
          {/* Image Left */}
          <div style={{ position: 'relative', height: '520px' }} className="service-image">
            <Image
              src="https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&q=80"
              alt="Elopements & Ceremonies"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Text Right */}
          <div style={{ padding: '80px' }} className="service-content">
            <div className="caption" style={{ marginBottom: '16px' }}>03 / CEREMONIES</div>
            <h2 style={{ marginBottom: '24px' }}>Elopements & Symbolic Ceremonies</h2>
            <p style={{ marginBottom: '24px' }}>
              From intimate beach elopements to civil ceremonies and symbolic vow renewals — we create deeply personal celebrations for every couple, including same-sex marriages. Our English celebrant ensures every word resonates.
            </p>
            <Link href="/services" className="link-sage">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: GALLERY STRIP */}
      <section style={{ overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
          className="gallery-strip"
        >
          <div style={{ position: 'relative', width: '20%', height: '380px', flexShrink: 0 }} className="gallery-item">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
              alt="Gallery 1"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ position: 'relative', width: '20%', height: '380px', flexShrink: 0 }} className="gallery-item">
            <Image
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80"
              alt="Gallery 2"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ position: 'relative', width: '20%', height: '380px', flexShrink: 0 }} className="gallery-item">
            <Image
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80"
              alt="Gallery 3"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ position: 'relative', width: '20%', height: '380px', flexShrink: 0 }} className="gallery-item">
            <Image
              src="https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80"
              alt="Gallery 4"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ position: 'relative', width: '20%', height: '380px', flexShrink: 0 }} className="gallery-item">
            <Image
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80"
              alt="Gallery 5"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="section" style={{ background: '#1C1C1C', color: 'white' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div className="caption" style={{ color: 'white', marginBottom: '40px' }}>
            WHAT OUR COUPLES SAY
          </div>
          <div
            style={{
              fontSize: '80px',
              fontFamily: 'var(--font-cormorant)',
              color: '#C4956A',
              lineHeight: '1',
              marginBottom: '24px',
            }}
          >
            &ldquo;
          </div>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: '26px',
              lineHeight: '1.6',
              marginBottom: '24px',
            }}
          >
            Having Vicki plan your wedding is a no brainer! From the very beginning she was so informative and had everything under control. She took all the stress out of the day — I wish I could do it all over again.
          </p>
          <p
            className="caption"
            style={{
              color: 'white',
              marginBottom: '60px',
            }}
          >
            — SIAN & JACK, 2024
          </p>

          <div className="decorative-line" style={{ margin: '60px auto' }} />

          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: '26px',
              lineHeight: '1.6',
              marginBottom: '24px',
            }}
          >
            We always wanted to get married abroad, but didn't know where to start. Thanks to Vicki, she made our dream come true!
          </p>
          <p className="caption" style={{ color: 'white' }}>
            — LEANNE & FRANKIE, 2024
          </p>
        </div>
      </section>

      {/* SECTION 6: WHY PAPHOS */}
      <section className="section" style={{ background: '#FEFCF8' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '3fr 2fr',
              gap: '80px',
              alignItems: 'center',
            }}
            className="why-paphos"
          >
            {/* Left Column - Text */}
            <div>
              <div className="eyebrow" style={{ marginBottom: '16px' }}>THE DESTINATION</div>
              <h2 style={{ marginBottom: '32px' }}>Why Paphos?</h2>
              <p style={{ marginBottom: '32px' }}>
                A UNESCO World Heritage Site with over 300 days of sunshine annually. From golden sandy beaches and rugged coastlines to elegant beachfront resorts and historic landmarks — Paphos offers the most breathtaking backdrop for your wedding day.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7D9B76', marginRight: '12px' }} />
                  <span>300+ days of sunshine annually</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7D9B76', marginRight: '12px' }} />
                  <span>UNESCO World Heritage Site</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7D9B76', marginRight: '12px' }} />
                  <span>Stunning venues: beach, vineyard, historic</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7D9B76', marginRight: '12px' }} />
                  <span>Easy access from across Europe</span>
                </li>
              </ul>
            </div>

            {/* Right Column - Image */}
            <div style={{ position: 'relative', height: '500px' }}>
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Paphos Cyprus"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA BANNER */}
      <section
        style={{
          position: 'relative',
          backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '140px 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.55)',
          }}
        />
        <div className="container" style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
          <h2 style={{ color: 'white', marginBottom: '24px' }}>Let's Plan Your Perfect Day</h2>
          <p style={{ marginBottom: '32px', fontSize: '17px', color: 'white', opacity: 0.95 }}>
            Schedule a free, no-pressure consultation with Vicki. We would love to hear your story.
          </p>
          <Link href="/contact">
            <button className="btn-white">Get in Touch</button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1C1C1C', color: 'white', padding: '80px 0 40px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              marginBottom: '60px',
            }}
            className="footer-grid"
          >
            {/* Left Column */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '22px',
                  color: 'white',
                  marginBottom: '8px',
                }}
              >
                Tie the Knot Cyprus
              </h3>
              <p style={{ fontFamily: 'var(--font-raleway)', fontSize: '13px', color: '#8A8A8A' }}>
                Bespoke Wedding Planning, Paphos
              </p>
            </div>

            {/* Right Column */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-raleway)',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    fontWeight: 500,
                  }}
                >
                  Navigation
                </h4>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <Link href="/" style={{ fontFamily: 'var(--font-raleway)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Home
                  </Link>
                  <Link href="/about" style={{ fontFamily: 'var(--font-raleway)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    About
                  </Link>
                  <Link href="/services" style={{ fontFamily: 'var(--font-raleway)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Services
                  </Link>
                  <Link href="/venues" style={{ fontFamily: 'var(--font-raleway)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Venues
                  </Link>
                  <Link href="/contact" style={{ fontFamily: 'var(--font-raleway)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Contact
                  </Link>
                </div>
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-raleway)',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    fontWeight: 500,
                  }}
                >
                  Contact
                </h4>
                <p style={{ fontFamily: 'var(--font-raleway)', fontSize: '13px', color: '#8A8A8A', lineHeight: '1.8' }}>
                  info@tietheknotcyprus.net<br />
                  +357 99 123456<br />
                  Paphos, Cyprus
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontFamily: 'var(--font-raleway)', fontSize: '12px', color: '#8A8A8A' }}>
              © 2025 Tie the Knot Cyprus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* RESPONSIVE STYLES */}
      <style jsx>{`
        @media (max-width: 768px) {
          .service-row {
            grid-template-columns: 1fr !important;
          }
          .service-image {
            height: 300px !important;
          }
          .service-content {
            padding: 40px 24px !important;
          }
          .gallery-strip {
            overflow-x: scroll;
          }
          .gallery-item {
            width: 80vw !important;
          }
          .why-paphos {
            grid-template-columns: 1fr !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </main>
  );
}

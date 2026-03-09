'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Venues() {
  const venues = [
    {
      name: 'Aphrodite Hills Resort',
      location: 'Kouklia',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c0c0?w=800&q=80',
      description: 'Luxury hilltop resort with panoramic Mediterranean views',
    },
    {
      name: 'Almyra Hotel',
      location: 'Paphos',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      description: 'Contemporary beachfront hotel with elegant gardens',
    },
    {
      name: 'Annabelle Hotel',
      location: 'Paphos',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
      description: 'Five-star elegance with stunning tropical gardens',
    },
    {
      name: 'St. George Hotel',
      location: 'Chloraka',
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
      description: 'Clifftop location overlooking the Mediterranean',
    },
    {
      name: 'Columbia Beach Resort',
      location: 'Pissouri',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
      description: 'Boutique beachfront resort with romantic ambiance',
    },
    {
      name: 'Secret Valley Golf Club',
      location: 'Petra tou Romiou',
      image: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?w=800&q=80',
      description: 'Hidden vineyard venue with panoramic countryside views',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: '400px',
          backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f29da8c0c0?w=1920&q=80")',
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
            DISCOVER
          </div>
          <h1 style={{ color: 'white' }}>Paphos Wedding Venues</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="section" style={{ background: '#FEFCF8', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '19px', lineHeight: '1.8', marginBottom: '24px' }}>
            Paphos offers some of the Mediterranean's most stunning wedding venues — from elegant beachfront resorts to historic estates and hidden vineyard settings.
          </p>
          <div className="decorative-line" style={{ margin: '32px auto' }} />
          <p>
            As an independent planner, we work with venues across Paphos to find the perfect match for your vision and budget — with no bias, no commissions, just honest recommendations.
          </p>
        </div>
      </section>

      {/* VENUES GRID */}
      <section style={{ background: '#F5F2EE', padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
            }}
            className="venues-grid"
          >
            {venues.map((venue, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'white',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                className="venue-card"
              >
                <div style={{ position: 'relative', height: '400px' }}>
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                      padding: '60px 24px 24px',
                      color: 'white',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '24px',
                        color: 'white',
                        marginBottom: '8px',
                      }}
                    >
                      {venue.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-raleway)',
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#C4956A',
                        marginBottom: '8px',
                      }}
                    >
                      {venue.location}
                    </p>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: '1.6',
                      }}
                    >
                      {venue.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="section" style={{ background: '#FEFCF8' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>OUR APPROACH</div>
          <h2 style={{ marginBottom: '40px' }}>Why Work With an Independent Planner?</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
              textAlign: 'left',
              marginTop: '60px',
            }}
          >
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: '#7D9B76' }}>
                No Venue Bias
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
                We don't receive commissions from venues, so our recommendations are based solely on what's right for you.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: '#7D9B76' }}>
                Full Transparency
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
                Clear pricing, honest advice, and complete transparency throughout your planning journey.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: '#7D9B76' }}>
                Exclusive Access
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
                Our relationships across Paphos unlock venues and suppliers you might not find on your own.
              </p>
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
          <h2 style={{ color: 'white', marginBottom: '24px' }}>Ready to Find Your Perfect Venue?</h2>
          <p style={{ marginBottom: '32px', color: 'white', opacity: 0.95 }}>
            Let's discuss your vision and explore the best venue options for your Cyprus wedding.
          </p>
          <Link href="/contact">
            <button className="btn-white">Get in Touch</button>
          </Link>
        </div>
      </section>

      {/* RESPONSIVE STYLES */}
      <style jsx>{`
        @media (max-width: 768px) {
          .venues-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .venue-card:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </main>
  );
}

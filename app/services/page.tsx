'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: '400px',
          backgroundImage: 'url("https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80")',
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
            WHAT WE OFFER
          </div>
          <h1 style={{ color: 'white' }}>Our Services</h1>
        </div>
      </section>

      {/* SERVICE 1: BESPOKE PLANNING */}
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
          <div style={{ position: 'relative', height: '600px' }} className="service-image">
            <Image
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80"
              alt="Bespoke Wedding Planning"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ padding: '80px' }} className="service-content">
            <div className="caption" style={{ marginBottom: '16px' }}>01 / PLANNING</div>
            <h2 style={{ marginBottom: '24px' }}>Bespoke Wedding Planning</h2>
            <p style={{ marginBottom: '20px' }}>
              Every wedding we plan is completely bespoke — designed around you, your vision, and your budget. As an independent planner, Vicki works exclusively for you with no venue bias or hidden commissions.
            </p>
            <p style={{ marginBottom: '20px' }}>
              From initial consultation to your send-off, we handle every detail: venue sourcing, supplier coordination, timeline management, design concept, budget tracking, and on-the-day coordination.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Whether you're planning an intimate gathering of 20 or a grand celebration of 200, we bring the same level of care, creativity, and professionalism.
            </p>
            <div className="decorative-line" />
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Full planning service from start to finish</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Independent, unbiased venue recommendations</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Vetted supplier network across Cyprus</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>On-the-day coordination and timeline management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICE 2: PHOTOGRAPHY */}
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
          <div style={{ padding: '80px' }} className="service-content">
            <div className="caption" style={{ marginBottom: '16px' }}>02 / PHOTOGRAPHY</div>
            <h2 style={{ marginBottom: '24px' }}>Award-Winning Photography</h2>
            <p style={{ marginBottom: '20px' }}>
              Lee's photography is all about capturing authentic moments — the stolen glances, the uncontrollable laughter, the quiet tears of joy.
            </p>
            <p style={{ marginBottom: '20px' }}>
              With a documentary-style approach combined with beautifully composed portraits, Lee creates a visual story of your day that feels both timeless and true to life.
            </p>
            <p style={{ marginBottom: '20px' }}>
              His work has been featured in international wedding publications and earned multiple awards, but what matters most is creating imagery that moves you every time you look at it.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Full-day coverage, albums, and prints available. View the complete portfolio at{' '}
              <a href="https://leesquirrell.net" target="_blank" rel="noopener noreferrer" className="link-sage">
                leesquirrell.net
              </a>
            </p>
            <div className="decorative-line" />
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Documentary and portrait photography</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Multi-award-winning photographer</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Full-day coverage with second shooter available</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Professional albums and prints</span>
              </li>
            </ul>
          </div>
          <div style={{ position: 'relative', height: '600px' }} className="service-image">
            <Image
              src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80"
              alt="Wedding Photography"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* SERVICE 3: ELOPEMENTS */}
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
          <div style={{ position: 'relative', height: '600px' }} className="service-image">
            <Image
              src="https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&q=80"
              alt="Elopements"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ padding: '80px' }} className="service-content">
            <div className="caption" style={{ marginBottom: '16px' }}>03 / ELOPEMENTS</div>
            <h2 style={{ marginBottom: '24px' }}>Intimate Elopements</h2>
            <p style={{ marginBottom: '20px' }}>
              For couples who want something more intimate, our elopement packages offer the perfect solution. Exchange vows on a secluded beach, in a hidden vineyard, or atop a clifftop overlooking the Mediterranean.
            </p>
            <p style={{ marginBottom: '20px' }}>
              We handle all the logistics — location permits, celebrant, flowers, photography — so you can focus entirely on each other.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Elopements can be just the two of you, or include a handful of your closest loved ones. We create deeply personal ceremonies that feel authentic and meaningful.
            </p>
            <div className="decorative-line" />
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Intimate ceremonies in stunning locations</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>All permits and legal requirements handled</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>English-speaking celebrant</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Photography and florals included</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICE 4: SYMBOLIC CEREMONIES */}
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
          <div style={{ padding: '80px' }} className="service-content">
            <div className="caption" style={{ marginBottom: '16px' }}>04 / CEREMONIES</div>
            <h2 style={{ marginBottom: '24px' }}>Symbolic & Vow Renewals</h2>
            <p style={{ marginBottom: '20px' }}>
              Already legally married but want to celebrate in Cyprus? Our symbolic ceremonies and vow renewal services create beautiful, meaningful celebrations without the legal paperwork.
            </p>
            <p style={{ marginBottom: '20px' }}>
              We welcome all couples — including same-sex marriages — and work with experienced English-speaking celebrants who craft personalized ceremonies that reflect your relationship and values.
            </p>
            <p style={{ marginBottom: '20px' }}>
              From beachfront sunsets to elegant garden settings, we'll help you create a ceremony as unique as your love story.
            </p>
            <div className="decorative-line" />
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Personalized ceremony scripts</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>All couples welcome, including same-sex marriages</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Experienced English celebrant</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#7D9B76', marginRight: '8px' }}>✓</span>
                <span>Vow renewal ceremonies available</span>
              </li>
            </ul>
          </div>
          <div style={{ position: 'relative', height: '600px' }} className="service-image">
            <Image
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
              alt="Symbolic Ceremonies"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: '#1C1C1C',
          padding: '100px 24px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ color: 'white', marginBottom: '24px' }}>Let's Create Your Perfect Day</h2>
          <p style={{ marginBottom: '32px', color: 'white', opacity: 0.95 }}>
            Get in touch to discuss your vision and receive a personalized quote.
          </p>
          <Link href="/contact">
            <button className="btn-white">Schedule a Consultation</button>
          </Link>
        </div>
      </section>

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
        }
      `}</style>
    </main>
  );
}

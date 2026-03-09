'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    weddingDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: '400px',
          backgroundImage: 'url("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80")',
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
            LET'S TALK
          </div>
          <h1 style={{ color: 'white' }}>Get in Touch</h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section" style={{ background: '#FEFCF8' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
            }}
            className="contact-grid"
          >
            {/* LEFT COLUMN - FORM */}
            <div>
              <h2 style={{ marginBottom: '24px' }}>Schedule a Consultation</h2>
              <p style={{ marginBottom: '40px' }}>
                Fill out the form below and we'll get back to you within 24 hours to discuss your Cyprus wedding.
              </p>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '32px' }}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 0',
                      border: 'none',
                      borderBottom: '1px solid #E0E0E0',
                      background: 'transparent',
                      fontSize: '15px',
                      fontFamily: 'var(--font-raleway)',
                      fontWeight: 300,
                      color: '#1C1C1C',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = '#7D9B76')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#E0E0E0')}
                  />
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 0',
                      border: 'none',
                      borderBottom: '1px solid #E0E0E0',
                      background: 'transparent',
                      fontSize: '15px',
                      fontFamily: 'var(--font-raleway)',
                      fontWeight: 300,
                      color: '#1C1C1C',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = '#7D9B76')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#E0E0E0')}
                  />
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 0',
                      border: 'none',
                      borderBottom: '1px solid #E0E0E0',
                      background: 'transparent',
                      fontSize: '15px',
                      fontFamily: 'var(--font-raleway)',
                      fontWeight: 300,
                      color: '#1C1C1C',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = '#7D9B76')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#E0E0E0')}
                  />
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 0',
                      border: 'none',
                      borderBottom: '1px solid #E0E0E0',
                      background: 'transparent',
                      fontSize: '15px',
                      fontFamily: 'var(--font-raleway)',
                      fontWeight: 300,
                      color: '#1C1C1C',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = '#7D9B76')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#E0E0E0')}
                  />
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <input
                    type="date"
                    name="weddingDate"
                    placeholder="Preferred Wedding Date"
                    value={formData.weddingDate}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 0',
                      border: 'none',
                      borderBottom: '1px solid #E0E0E0',
                      background: 'transparent',
                      fontSize: '15px',
                      fontFamily: 'var(--font-raleway)',
                      fontWeight: 300,
                      color: '#1C1C1C',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = '#7D9B76')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#E0E0E0')}
                  />
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <textarea
                    name="message"
                    placeholder="Tell us about your vision..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 0',
                      border: 'none',
                      borderBottom: '1px solid #E0E0E0',
                      background: 'transparent',
                      fontSize: '15px',
                      fontFamily: 'var(--font-raleway)',
                      fontWeight: 300,
                      color: '#1C1C1C',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = '#7D9B76')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#E0E0E0')}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT COLUMN - CONTACT INFO */}
            <div>
              <h2 style={{ marginBottom: '24px' }}>Contact Information</h2>
              <p style={{ marginBottom: '40px' }}>
                We'd love to hear about your wedding plans. Reach out via the form or contact us directly using the details below.
              </p>

              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#7D9B76' }}>Email</h3>
                <a href="mailto:info@tietheknotcyprus.net" className="link-sage" style={{ fontSize: '16px' }}>
                  info@tietheknotcyprus.net
                </a>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#7D9B76' }}>Phone</h3>
                <a href="tel:+35799123456" className="link-sage" style={{ fontSize: '16px' }}>
                  +357 99 123456
                </a>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#7D9B76' }}>Location</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  Paphos, Cyprus
                </p>
              </div>

              <div className="decorative-line" style={{ marginBottom: '32px' }} />

              <div
                style={{
                  background: '#F5F2EE',
                  padding: '32px',
                  borderLeft: '3px solid #7D9B76',
                }}
              >
                <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Free Consultation</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
                  Every journey begins with a conversation. We offer complimentary consultations to discuss your vision, answer questions, and explore how we can bring your Cyprus wedding to life.
                </p>
              </div>

              {/* Map Placeholder */}
              <div
                style={{
                  marginTop: '40px',
                  height: '300px',
                  background: '#E0E0E0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8A8A8A',
                  fontFamily: 'var(--font-raleway)',
                  fontSize: '14px',
                }}
              >
                [Map of Paphos, Cyprus]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIVE STYLES */}
      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </main>
  );
}

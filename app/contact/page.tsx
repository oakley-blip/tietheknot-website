'use client';

import { useState } from 'react';
import Image from "next/image";

// Note: Metadata is exported from layout.tsx for client components

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    weddingDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send to an API endpoint
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', weddingDate: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=80"
          alt="Contact us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl mb-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Get in Touch
          </h1>
          <p className="text-xl font-light tracking-wide">Let's start planning your dream wedding</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-10">
              <h2 className="text-4xl mb-8 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="bg-[#4A6741] text-white p-6 text-center">
                  <p className="text-xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Thank you for contacting us!
                  </p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-wider text-[#2C2C2C] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#2C2C2C]/20 focus:border-[#4A6741] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-wider text-[#2C2C2C] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#2C2C2C]/20 focus:border-[#4A6741] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="weddingDate" className="block text-sm uppercase tracking-wider text-[#2C2C2C] mb-2">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      id="weddingDate"
                      name="weddingDate"
                      value={formData.weddingDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#2C2C2C]/20 focus:border-[#4A6741] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm uppercase tracking-wider text-[#2C2C2C] mb-2">
                      Tell Us About Your Vision *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-[#2C2C2C]/20 focus:border-[#4A6741] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C4956A] hover:bg-[#B38558] text-white px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl mb-8 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Contact Information
              </h2>

              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-[#C4956A] mb-3">Phone</h3>
                  <a href="tel:+35799123456" className="text-2xl text-[#2C2C2C] hover:text-[#4A6741] transition-colors">
                    +357 99 123456
                  </a>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-[#C4956A] mb-3">Email</h3>
                  <a href="mailto:info@tietheknotcyprus.net" className="text-2xl text-[#2C2C2C] hover:text-[#4A6741] transition-colors break-all">
                    info@tietheknotcyprus.net
                  </a>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-[#C4956A] mb-3">Location</h3>
                  <p className="text-lg text-[#2C2C2C]/80">
                    Paphos, Cyprus
                  </p>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-[#C4956A] mb-3">Office Hours</h3>
                  <p className="text-lg text-[#2C2C2C]/80">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM (EET)
                  </p>
                  <p className="text-sm text-[#2C2C2C]/60 mt-2">
                    Weekend and evening consultations available by appointment
                  </p>
                </div>
              </div>

              <div className="bg-[#4A6741] text-white p-8">
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Why Choose Us
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>35+ years combined experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Award-winning planning and photography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Exclusive access to premier venues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Personalized, stress-free service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Local expertise and connections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl mb-12 text-center text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: 'How far in advance should we book?',
                a: 'We recommend contacting us 12-18 months before your desired wedding date, especially for peak season (May-October). However, we can often accommodate shorter timeframes.',
              },
              {
                q: 'Do you work with international couples?',
                a: 'Absolutely! The majority of our clients are international couples. We handle all local arrangements and guide you through the Cyprus wedding requirements.',
              },
              {
                q: 'What is included in your services?',
                a: 'Our services are fully customizable. We offer everything from complete wedding planning to day-of coordination, venue finding, and photography. Contact us to discuss a package tailored to your needs.',
              },
              {
                q: 'Can we visit venues before booking?',
                a: 'Yes! We arrange venue tours and can accompany you to provide expert guidance. Virtual tours are also available for couples planning from abroad.',
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-[#2C2C2C]/10 pb-6">
                <h3 className="text-xl mb-3 text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {faq.q}
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

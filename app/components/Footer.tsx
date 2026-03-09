import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2C2C] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Tie the Knot Cyprus
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Award-winning bespoke wedding planning and photography in beautiful Paphos, Cyprus.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-[#C4956A]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/venues" className="text-white/70 hover:text-white transition-colors">
                  Venues
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-[#C4956A]">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="tel:+35799123456" className="hover:text-white transition-colors">
                  +357 99 123456
                </a>
              </li>
              <li>
                <a href="mailto:info@tietheknotcyprus.net" className="hover:text-white transition-colors">
                  info@tietheknotcyprus.net
                </a>
              </li>
              <li className="pt-2">Paphos, Cyprus</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>&copy; {currentYear} Tie the Knot Cyprus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

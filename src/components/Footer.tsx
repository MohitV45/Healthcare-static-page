import SocialLinks from './SocialLinks';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Pharmaceutical Manufacturing',
    'Research & Development',
    'Quality Assurance',
    'Distribution Network',
    'Regulatory Affairs'
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Reltsen Health Care</h3>
                <p className="text-xs text-blue-200">Caring for Life</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Committed to delivering quality healthcare solutions since 2011. Your trusted partner in pharmaceutical excellence.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-blue-100 hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-blue-100">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-teal-300 flex-shrink-0 mt-1" size={20} />
                <span className="text-blue-100">
                  Corporate Office<br />
                  Mumbai, Maharashtra<br />
                  India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-teal-300 flex-shrink-0" size={20} />
                <span className="text-blue-100">+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-teal-300 flex-shrink-0" size={20} />
                <span className="text-blue-100">info@reltsenhealthcare.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm text-center md:text-left">
              © 2025 Reltsen Health Care. All rights reserved. | WHO-GMP Certified | ISO 9001:2015
            </p>
            <div className="flex gap-6 text-sm text-blue-100">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { FC } from "react";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { WiFire } from "react-icons/wi";

// Define link structure
interface FooterLink {
  name: string;
  href: string;
}

// Define the content for each column
const exploreLinks: FooterLink[] = [
  { name: "Destinations", href: "/destinations" },
  { name: "Featured Properties", href: "/featured" },
  { name: "Seasonal Offers", href: "/offers" },
  { name: "Testimonials", href: "/reviews" },
];

const supportLinks: FooterLink[] = [
  { name: "Customer Service", href: "/help" },
  { name: "Partner with Us", href: "/partner" },
  { name: "FAQ", href: "/faq" },
  { name: "Report a Bug", href: "/bug-report" },
];

const legalLinks: FooterLink[] = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Sitemap", href: "/sitemap" },
];

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-blue-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
          {/* 1. Company Info / Logo */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 text-2xl font-bold tracking-tight text-white">
              <WiFire className="w-10 h-10" />
              BookNext
            </div>
            <p className="text-sm">
              Your trusted partner for finding the perfect stay, anywhere in the
              world. Booking made simple and secure.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <span className="flex items-center space-x-2">
                <Mail className="w-4 h-4" /> <span>info@booknext.com</span>
              </span>
              <span className="flex items-center space-x-2">
                <Phone className="w-4 h-4" /> <span>+234 912 328 6455</span>
              </span>
            </div>
          </div>

          {/* 2. Explore Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; {currentYear} BookNext. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-400 transition duration-150"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition duration-150"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-blue-400 transition duration-150"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

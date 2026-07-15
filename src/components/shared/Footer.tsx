"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/">
              <h2 className="text-2xl font-bold text-white">
                LUXE<span className="text-white">GLOW</span>
              </h2>
            </Link>
            <p className="text-sm text-gray-400">
              Glow Beyond Beauty. Radiant skincare for everyone.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Shop", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
              {["Body Care", "Face Care", "Hair Care", "Sheet Masks"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/shop?category=${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <HiOutlineMail className="text-primary" />
                info@luxeglow.com
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="text-primary" />
                +1 (234) 567-890
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-xs text-gray-500">
          &copy; 2023 LUXEGLOW. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
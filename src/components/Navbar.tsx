"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoIcon, MenuIcon, CloseIcon } from "./Icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/login", label: "Login" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon className="w-9 h-9" />
            <span className="text-xl font-bold gradient-text">RideFlow</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy-500 hover:text-secondary-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/register/passenger" className="btn-primary text-sm">
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-navy-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-navy-500 hover:text-secondary-600 font-medium py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register/passenger"
              className="btn-primary block text-center text-sm mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

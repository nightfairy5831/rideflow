import Link from "next/link";
import { LogoIcon, EmailIcon, PhoneIcon, MapPinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-navy-500 text-white">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <LogoIcon className="w-9 h-9" />
              <span className="text-xl font-bold text-white">RideFlow</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting drivers and passengers with smart, safe, and affordable rides. Your journey starts here.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/pricing", label: "Pricing" },
                { href: "/login", label: "Login" },
                { href: "/register/passenger", label: "Ride Now" },
                { href: "/register/driver", label: "Drive With Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "Safety", "Terms of Service", "Privacy Policy", "Accessibility"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-gray-300 hover:text-secondary-400 transition-colors text-sm cursor-pointer">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <EmailIcon className="w-4 h-4 text-secondary-400" />
                support@rideflow.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <PhoneIcon className="w-4 h-4 text-secondary-400" />
                +55 11 4000-0000
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MapPinIcon className="w-4 h-4 text-secondary-400" />
                São Paulo, Brazil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2026 RideFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-400 text-sm hover:text-secondary-400 cursor-pointer transition-colors">
              Terms
            </span>
            <span className="text-gray-400 text-sm hover:text-secondary-400 cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="text-gray-400 text-sm hover:text-secondary-400 cursor-pointer transition-colors">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

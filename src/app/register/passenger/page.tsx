"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  UserIcon,
  EmailIcon,
  LockIcon,
  PhoneIcon,
  ArrowRightIcon,
  ShieldIcon,
  MapPinIcon,
  CarIcon,
  LogoIcon,
} from "@/components/Icons";

export default function PassengerRegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard/passenger");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Form Side */}
              <div>
                <div className="mb-8">
                  <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider">
                    Passenger Registration
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-bold mt-3 mb-3 font-poppins">
                    Start Your <span className="gradient-text">Journey</span>
                  </h1>
                  <p className="text-gray-500 leading-relaxed">
                    Create your passenger account and get access to reliable,
                    affordable rides in just a few minutes.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-navy-500 mb-1.5"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <UserIcon className="w-5 h-5" />
                      </div>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                        value={form.fullName}
                        onChange={handleChange}
                        className="input-field pl-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-500 mb-1.5"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <EmailIcon className="w-5 h-5" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="input-field pl-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy-500 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <PhoneIcon className="w-5 h-5" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        className="input-field pl-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-navy-500 mb-1.5"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <LockIcon className="w-5 h-5" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={form.password}
                        onChange={handleChange}
                        className="input-field pl-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-navy-500 mb-1.5"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <LockIcon className="w-5 h-5" />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Repeat your password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        className="input-field pl-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3">
                    <input
                      id="agreeTerms"
                      name="agreeTerms"
                      type="checkbox"
                      checked={form.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-secondary-500 focus:ring-secondary-500"
                      required
                    />
                    <label
                      htmlFor="agreeTerms"
                      className="text-sm text-gray-500"
                    >
                      I agree to the{" "}
                      <span className="text-secondary-600 font-medium cursor-pointer hover:underline">
                        Terms of Service
                      </span>{" "}
                      and{" "}
                      <span className="text-secondary-600 font-medium cursor-pointer hover:underline">
                        Privacy Policy
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4"
                  >
                    Create Account
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </form>

                {/* Links */}
                <div className="mt-6 space-y-3 text-center">
                  <p className="text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-secondary-600 font-semibold hover:underline"
                    >
                      Sign In
                    </Link>
                  </p>
                  <p className="text-sm text-gray-500">
                    Want to drive?{" "}
                    <Link
                      href="/register/driver"
                      className="text-navy-500 font-semibold hover:underline"
                    >
                      Register as a Driver
                    </Link>
                  </p>
                </div>
              </div>

              {/* Side Image & Benefits */}
              <div className="hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden h-[540px] mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1449965408869-ebd3fee7a693?w=800&q=80"
                    alt="City ride at night"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-500/90 via-navy-500/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <LogoIcon className="w-8 h-8" />
                      <span className="text-white font-bold text-lg">
                        RideFlow
                      </span>
                    </div>
                    <p className="text-white/90 text-lg font-semibold mb-1">
                      Ride smarter, not harder.
                    </p>
                    <p className="text-gray-300 text-sm">
                      Thousands of passengers trust us for their daily commutes.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <ShieldIcon className="w-5 h-5" />,
                      title: "Verified Drivers",
                      desc: "Background-checked for your safety",
                    },
                    {
                      icon: <MapPinIcon className="w-5 h-5" />,
                      title: "Live Tracking",
                      desc: "Know your ride location in real time",
                    },
                    {
                      icon: <CarIcon className="w-5 h-5" />,
                      title: "Multiple Options",
                      desc: "Sedans, SUVs, compacts and more",
                    },
                    {
                      icon: <PhoneIcon className="w-5 h-5" />,
                      title: "24/7 Support",
                      desc: "We are always here to help you",
                    },
                  ].map((benefit, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-2xl p-4 flex items-start gap-3 hover:shadow-card transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center text-secondary-600 flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-navy-500 text-sm">
                          {benefit.title}
                        </p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

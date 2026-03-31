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
  CarIcon,
  ArrowRightIcon,
  ShieldIcon,
  CameraIcon,
  MapPinIcon,
  LogoIcon,
} from "@/components/Icons";

export default function DriverRegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    cpf: "",
    password: "",
    confirmPassword: "",
    profilePhoto: null as File | null,
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleColor: "",
    licensePlate: "",
    vehicleType: "",
    driversLicense: null as File | null,
    agreeTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [target.name]: target.checked }));
    } else if (target instanceof HTMLInputElement && target.type === "file") {
      const file = target.files?.[0] || null;
      setForm((prev) => ({ ...prev, [target.name]: file }));
    } else {
      setForm((prev) => ({ ...prev, [target.name]: target.value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard/driver");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              {/* Form Side */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider">
                    Driver Registration
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-bold mt-3 mb-3 font-poppins">
                    Drive & <span className="gradient-text">Earn</span> With Us
                  </h1>
                  <p className="text-gray-500 leading-relaxed">
                    Join our community of drivers and start earning on your own
                    schedule. Complete your profile to get started.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* ── Personal Information ── */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-navy-500 flex items-center justify-center text-white">
                        <UserIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-navy-500">
                          Personal Information
                        </h2>
                        <p className="text-xs text-gray-400">
                          Tell us a bit about yourself
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div className="sm:col-span-2">
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

                      {/* CPF/ID Number */}
                      <div>
                        <label
                          htmlFor="cpf"
                          className="block text-sm font-medium text-navy-500 mb-1.5"
                        >
                          CPF / ID Number
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <ShieldIcon className="w-5 h-5" />
                          </div>
                          <input
                            id="cpf"
                            name="cpf"
                            type="text"
                            placeholder="000.000.000-00"
                            value={form.cpf}
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

                      {/* Profile Photo Upload */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-navy-500 mb-1.5">
                          Profile Photo
                        </label>
                        <label
                          htmlFor="profilePhoto"
                          className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-200 rounded-2xl py-8 px-6 cursor-pointer hover:border-secondary-500 hover:bg-secondary-50/30 transition-all duration-300"
                        >
                          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                            <CameraIcon className="w-7 h-7" />
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium text-navy-500">
                              {form.profilePhoto
                                ? form.profilePhoto.name
                                : "Upload your photo"}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              JPG, PNG up to 5MB
                            </p>
                          </div>
                          <input
                            id="profilePhoto"
                            name="profilePhoto"
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* ── Vehicle Details ── */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-secondary-500 flex items-center justify-center text-white">
                        <CarIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-navy-500">
                          Vehicle Details
                        </h2>
                        <p className="text-xs text-gray-400">
                          Information about the vehicle you will drive
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Make */}
                      <div>
                        <label
                          htmlFor="vehicleMake"
                          className="block text-sm font-medium text-navy-500 mb-1.5"
                        >
                          Make
                        </label>
                        <input
                          id="vehicleMake"
                          name="vehicleMake"
                          type="text"
                          placeholder="e.g. Toyota"
                          value={form.vehicleMake}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>

                      {/* Model */}
                      <div>
                        <label
                          htmlFor="vehicleModel"
                          className="block text-sm font-medium text-navy-500 mb-1.5"
                        >
                          Model
                        </label>
                        <input
                          id="vehicleModel"
                          name="vehicleModel"
                          type="text"
                          placeholder="e.g. Corolla"
                          value={form.vehicleModel}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>

                      {/* Year */}
                      <div>
                        <label
                          htmlFor="vehicleYear"
                          className="block text-sm font-medium text-navy-500 mb-1.5"
                        >
                          Year
                        </label>
                        <input
                          id="vehicleYear"
                          name="vehicleYear"
                          type="text"
                          placeholder="e.g. 2022"
                          value={form.vehicleYear}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>

                      {/* Color */}
                      <div>
                        <label
                          htmlFor="vehicleColor"
                          className="block text-sm font-medium text-navy-500 mb-1.5"
                        >
                          Color
                        </label>
                        <input
                          id="vehicleColor"
                          name="vehicleColor"
                          type="text"
                          placeholder="e.g. Silver"
                          value={form.vehicleColor}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>

                      {/* License Plate */}
                      <div>
                        <label
                          htmlFor="licensePlate"
                          className="block text-sm font-medium text-navy-500 mb-1.5"
                        >
                          License Plate
                        </label>
                        <input
                          id="licensePlate"
                          name="licensePlate"
                          type="text"
                          placeholder="e.g. ABC-1234"
                          value={form.licensePlate}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>

                      {/* Vehicle Type */}
                      <div>
                        <label
                          htmlFor="vehicleType"
                          className="block text-sm font-medium text-navy-500 mb-1.5"
                        >
                          Vehicle Type
                        </label>
                        <select
                          id="vehicleType"
                          name="vehicleType"
                          value={form.vehicleType}
                          onChange={handleChange}
                          className="input-field appearance-none bg-white"
                          required
                        >
                          <option value="" disabled>
                            Select type
                          </option>
                          <option value="sedan">Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="compact">Compact</option>
                          <option value="van">Van</option>
                        </select>
                      </div>

                      {/* Driver's License Upload */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-navy-500 mb-1.5">
                          Driver&apos;s License
                        </label>
                        <label
                          htmlFor="driversLicense"
                          className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-200 rounded-2xl py-8 px-6 cursor-pointer hover:border-secondary-500 hover:bg-secondary-50/30 transition-all duration-300"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
                            <ShieldIcon className="w-7 h-7" />
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium text-navy-500">
                              {form.driversLicense
                                ? form.driversLicense.name
                                : "Upload your driver's license"}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              JPG, PNG or PDF up to 10MB
                            </p>
                          </div>
                          <input
                            id="driversLicense"
                            name="driversLicense"
                            type="file"
                            accept="image/*,.pdf"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                      </div>
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
                      </span>
                      ,{" "}
                      <span className="text-secondary-600 font-medium cursor-pointer hover:underline">
                        Privacy Policy
                      </span>{" "}
                      and{" "}
                      <span className="text-secondary-600 font-medium cursor-pointer hover:underline">
                        Driver Agreement
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4"
                  >
                    Create Driver Account
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
                    Just looking for rides?{" "}
                    <Link
                      href="/register/passenger"
                      className="text-navy-500 font-semibold hover:underline"
                    >
                      Register as a Passenger
                    </Link>
                  </p>
                </div>
              </div>

              {/* Side Image & Driver Benefits */}
              <div className="hidden lg:block lg:col-span-2">
                <div className="sticky top-28">
                  <div className="relative rounded-3xl overflow-hidden h-[400px] mb-8">
                    <Image
                      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
                      alt="Driver in car"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-500/95 via-navy-500/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <LogoIcon className="w-8 h-8" />
                        <span className="text-white font-bold text-lg">
                          RideFlow
                        </span>
                      </div>
                      <p className="text-white/90 text-lg font-semibold mb-1">
                        Your car, your schedule, your earnings.
                      </p>
                      <p className="text-gray-300 text-sm">
                        Join the fastest-growing driver community.
                      </p>
                    </div>
                  </div>

                  {/* Earnings Info */}
                  <div className="bg-gradient-to-br from-navy-500 to-navy-700 rounded-3xl p-6 mb-6 text-white">
                    <h3 className="font-semibold text-lg mb-4">
                      Earning Potential
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      {[
                        { value: "$1,200+", label: "Avg. Weekly" },
                        { value: "$0.99", label: "Platform Fee" },
                        { value: "Instant", label: "Withdrawals" },
                        { value: "100%", label: "Tip Earnings" },
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <p className="text-xl font-bold text-secondary-400">
                            {stat.value}
                          </p>
                          <p className="text-xs text-gray-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Earnings vary based on location, hours driven, and demand.
                      You keep the vast majority of every fare.
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3">
                    {[
                      {
                        icon: <ShieldIcon className="w-5 h-5" />,
                        title: "Insurance Coverage",
                        desc: "Full coverage while on an active ride",
                      },
                      {
                        icon: <MapPinIcon className="w-5 h-5" />,
                        title: "Choose Your Area",
                        desc: "Drive in the zones you prefer",
                      },
                      {
                        icon: <CarIcon className="w-5 h-5" />,
                        title: "Vehicle Support",
                        desc: "Maintenance partner discounts available",
                      },
                      {
                        icon: <PhoneIcon className="w-5 h-5" />,
                        title: "24/7 Driver Support",
                        desc: "Dedicated help line for all drivers",
                      },
                    ].map((benefit, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3 hover:shadow-card transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center text-secondary-600 flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-navy-500 text-sm">
                            {benefit.title}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
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

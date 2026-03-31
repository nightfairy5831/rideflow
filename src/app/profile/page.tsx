"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  UserIcon,
  EmailIcon,
  PhoneIcon,
  StarIcon,
  LockIcon,
  CameraIcon,
  ArrowRightIcon,
  ClockIcon,
  CarIcon,
  WalletIcon,
  ShieldIcon,
} from "@/components/Icons";
import { mockPassengers } from "@/data/mockData";

const user = mockPassengers[0]; // Maria Santos

export default function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [password, setPassword] = useState("");

  const [notifRide, setNotifRide] = useState(true);
  const [notifPromo, setNotifPromo] = useState(false);
  const [notifEmail, setNotifEmail] = useState(true);
  const [language, setLanguage] = useState("en");

  const handleSave = () => {
    setEditMode(false);
    setPassword("");
  };

  const handleCancel = () => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setPassword("");
    setEditMode(false);
  };

  const memberSince = new Date(user.joinedDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <section className="bg-gradient-hero text-white">
          <div className="container-custom py-12 sm:py-16">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-secondary-300 hover:text-secondary-200 text-sm font-medium font-poppins transition-colors mb-6"
            >
              <ArrowRightIcon className="w-4 h-4 rotate-180" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold font-poppins mb-2">
              My Profile
            </h1>
            <p className="text-gray-300 font-poppins">
              Manage your account settings and preferences
            </p>
          </div>
        </section>

        <div className="container-custom -mt-6 relative z-10 pb-16">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Profile Card */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Photo & Info */}
              <div className="card text-center">
                <div className="relative inline-block mb-4">
                  <Image
                    src={user.photo}
                    alt={user.name}
                    width={120}
                    height={120}
                    className="w-28 h-28 rounded-full object-cover mx-auto ring-4 ring-secondary-100"
                  />
                  {editMode && (
                    <button className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-secondary-500 text-white flex items-center justify-center shadow-lg hover:bg-secondary-600 transition-colors">
                      <CameraIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <h2 className="text-xl font-bold text-navy-500 font-poppins">
                  {user.name}
                </h2>
                <p className="text-gray-400 text-sm font-poppins mt-1">
                  {user.email}
                </p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <StarIcon className="w-4 h-4 text-yellow-400" filled />
                  <span className="text-sm font-semibold text-navy-500 font-poppins">
                    {user.rating}
                  </span>
                  <span className="text-xs text-gray-400 font-poppins">
                    rating
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-poppins mt-2">
                  Member since {memberSince}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="card">
                <h3 className="text-sm font-semibold text-gray-400 font-poppins uppercase tracking-wider mb-4">
                  Statistics
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary-50 flex items-center justify-center">
                        <CarIcon className="w-5 h-5 text-secondary-600" />
                      </div>
                      <span className="text-sm text-gray-600 font-poppins">
                        Total Rides
                      </span>
                    </div>
                    <span className="text-sm font-bold text-navy-500 font-poppins">
                      {user.totalRides}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center">
                        <StarIcon
                          className="w-5 h-5 text-yellow-500"
                          filled
                        />
                      </div>
                      <span className="text-sm text-gray-600 font-poppins">
                        Rating
                      </span>
                    </div>
                    <span className="text-sm font-bold text-navy-500 font-poppins">
                      {user.rating} / 5.0
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                        <ClockIcon className="w-5 h-5 text-blue-500" />
                      </div>
                      <span className="text-sm text-gray-600 font-poppins">
                        Member Since
                      </span>
                    </div>
                    <span className="text-sm font-bold text-navy-500 font-poppins">
                      {memberSince}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="card">
                <h3 className="text-sm font-semibold text-gray-400 font-poppins uppercase tracking-wider mb-4">
                  Payment Methods
                </h3>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-500 flex items-center justify-center">
                    <WalletIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy-500 font-poppins">
                      {user.paymentMethod}
                    </p>
                    <p className="text-xs text-gray-400 font-poppins">
                      Default payment
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-secondary-600 bg-secondary-50 px-2 py-1 rounded-md font-poppins">
                    Active
                  </span>
                </div>
                <button className="w-full py-2.5 rounded-xl border-2 border-dashed border-gray-200 text-sm font-medium text-gray-400 hover:text-secondary-600 hover:border-secondary-300 transition-all duration-300 font-poppins">
                  + Add Payment Method
                </button>
              </div>
            </div>

            {/* Right Column - Edit Form & Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Edit Profile */}
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-navy-500 font-poppins">
                    Personal Information
                  </h3>
                  {!editMode ? (
                    <button
                      onClick={() => setEditMode(true)}
                      className="text-sm font-semibold text-secondary-600 hover:text-secondary-500 font-poppins transition-colors"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <span className="text-xs font-semibold text-accent-500 bg-accent-50 px-3 py-1 rounded-full font-poppins">
                      Editing
                    </span>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-navy-500 font-poppins mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <UserIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={!editMode}
                        className="input-field pl-12 disabled:bg-gray-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-navy-500 font-poppins mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <EmailIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={!editMode}
                        className="input-field pl-12 disabled:bg-gray-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-navy-500 font-poppins mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <PhoneIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={!editMode}
                        className="input-field pl-12 disabled:bg-gray-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-navy-500 font-poppins mb-1.5">
                      New Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <LockIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={editMode ? "Enter new password" : "••••••••"}
                        disabled={!editMode}
                        className="input-field pl-12 disabled:bg-gray-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>

                {/* Profile Photo Change */}
                {editMode && (
                  <div className="mt-5 p-4 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0">
                      <CameraIcon className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy-500 font-poppins">
                        Change Profile Photo
                      </p>
                      <p className="text-xs text-gray-400 font-poppins mt-0.5">
                        Upload a JPG or PNG. Max size 5MB.
                      </p>
                    </div>
                    <button className="ml-auto text-sm font-semibold text-secondary-600 hover:text-secondary-500 font-poppins transition-colors">
                      Upload
                    </button>
                  </div>
                )}

                {/* Save / Cancel */}
                {editMode && (
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                    <button
                      onClick={handleSave}
                      className="btn-primary text-sm px-6"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-6 py-3 rounded-xl text-sm font-semibold text-gray-500 hover:text-navy-500 hover:bg-gray-100 transition-all duration-300 font-poppins"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Preferences */}
              <div className="card">
                <h3 className="text-lg font-semibold text-navy-500 font-poppins mb-6">
                  Preferences
                </h3>

                <div className="space-y-5">
                  {/* Notification Toggles */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-navy-500 font-poppins">
                        Ride Notifications
                      </p>
                      <p className="text-xs text-gray-400 font-poppins mt-0.5">
                        Get notified about ride updates and driver arrivals
                      </p>
                    </div>
                    <button
                      onClick={() => setNotifRide(!notifRide)}
                      className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${
                        notifRide ? "bg-secondary-500" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                          notifRide ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="border-t border-gray-100" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-navy-500 font-poppins">
                        Promotional Offers
                      </p>
                      <p className="text-xs text-gray-400 font-poppins mt-0.5">
                        Receive special deals and discount codes
                      </p>
                    </div>
                    <button
                      onClick={() => setNotifPromo(!notifPromo)}
                      className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${
                        notifPromo ? "bg-secondary-500" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                          notifPromo ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="border-t border-gray-100" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-navy-500 font-poppins">
                        Email Summaries
                      </p>
                      <p className="text-xs text-gray-400 font-poppins mt-0.5">
                        Weekly ride summary and receipts via email
                      </p>
                    </div>
                    <button
                      onClick={() => setNotifEmail(!notifEmail)}
                      className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${
                        notifEmail ? "bg-secondary-500" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                          notifEmail ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="border-t border-gray-100" />

                  {/* Language */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-navy-500 font-poppins">
                        Language
                      </p>
                      <p className="text-xs text-gray-400 font-poppins mt-0.5">
                        Choose your preferred language
                      </p>
                    </div>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-navy-500 font-poppins focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                    >
                      <option value="en">English</option>
                      <option value="pt">Portugues</option>
                      <option value="es">Espanol</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Account / Danger Zone */}
              <div className="card border border-red-100">
                <h3 className="text-lg font-semibold text-navy-500 font-poppins mb-2">
                  Account
                </h3>
                <p className="text-sm text-gray-400 font-poppins mb-6">
                  Permanently delete your account and all associated data. This
                  action cannot be undone.
                </p>
                <button className="px-6 py-3 rounded-xl text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 transition-all duration-300 font-poppins">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

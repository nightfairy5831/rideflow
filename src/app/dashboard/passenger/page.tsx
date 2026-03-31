"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LogoIcon,
  MapPinIcon,
  CarIcon,
  StarIcon,
  ClockIcon,
  UserIcon,
  HistoryIcon,
  DollarIcon,
  LogoutIcon,
  NavigationIcon,
  SearchIcon,
  MenuIcon,
  CloseIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import { mockPassengers, nearbyDrivers, mockRides } from "@/data/mockData";

const currentUser = mockPassengers[0];

const passengerRides = mockRides
  .filter((ride) => ride.passengerId === "p1")
  .slice(0, 3);

const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard/passenger", icon: NavigationIcon, active: true },
  { label: "Request Ride", href: "/dashboard/passenger", icon: CarIcon, active: false },
  { label: "Ride History", href: "/dashboard/passenger/history", icon: HistoryIcon, active: false },
  { label: "Profile", href: "/dashboard/passenger/profile", icon: UserIcon, active: false },
  { label: "Pricing", href: "/dashboard/passenger/pricing", icon: DollarIcon, active: false },
];

function getStatusColor(status: string) {
  switch (status) {
    case "completed":
      return "bg-secondary-100 text-secondary-700";
    case "in_progress":
      return "bg-blue-100 text-blue-700";
    case "requested":
      return "bg-yellow-100 text-yellow-700";
    case "cancelled":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case "completed":
      return "Completed";
    case "in_progress":
      return "In Progress";
    case "requested":
      return "Requested";
    case "cancelled":
      return "Cancelled";
    default:
      return status;
  }
}

export default function PassengerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("economy");
  const [pickup, setPickup] = useState("Av. Paulista, 1000");
  const [destination, setDestination] = useState("");

  const vehicleTypes = [
    { id: "economy", label: "Economy", price: "$0.99/km", icon: "🚗" },
    { id: "comfort", label: "Comfort", price: "$1.49/km", icon: "🚙" },
    { id: "premium", label: "Premium", price: "$2.49/km", icon: "🏎️" },
  ];

  const lastRide = passengerRides.length > 0 ? passengerRides[0] : null;

  return (
    <div className="flex h-screen bg-gray-50 font-poppins">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-navy-500 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3">
              <LogoIcon className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tight">RideFlow</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* User info */}
          <div className="px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-secondary-500 flex-shrink-0">
                <Image
                  src={currentUser.photo}
                  alt={currentUser.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">{currentUser.name}</p>
                <p className="text-xs text-gray-400">Passenger</p>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    link.active
                      ? "bg-secondary-500/20 text-secondary-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="px-4 py-4 border-t border-white/10">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200"
            >
              <LogoutIcon className="w-5 h-5 flex-shrink-0" />
              Logout
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <MenuIcon className="w-5 h-5 text-navy-500" />
              </button>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-navy-500">
                  Welcome back, <span className="gradient-text">{currentUser.name.split(" ")[0]}</span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-400">
                  Where would you like to go today?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-100">
                <Image
                  src={currentUser.photo}
                  alt={currentUser.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary-100 flex items-center justify-center flex-shrink-0">
                <CarIcon className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Rides</p>
                <p className="text-2xl font-bold text-navy-500">{currentUser.totalRides}</p>
              </div>
            </div>

            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <StarIcon className="w-6 h-6 text-yellow-500" filled />
              </div>
              <div>
                <p className="text-sm text-gray-500">Rating</p>
                <p className="text-2xl font-bold text-navy-500">{currentUser.rating}</p>
              </div>
            </div>

            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                <ClockIcon className="w-6 h-6 text-accent-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Ride</p>
                <p className="text-2xl font-bold text-navy-500">
                  {lastRide ? lastRide.date : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Request a Ride + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Request a Ride */}
            <div className="card">
              <h2 className="text-lg font-bold text-navy-500 mb-5 flex items-center gap-2">
                <NavigationIcon className="w-5 h-5 text-secondary-500" />
                Request a Ride
              </h2>

              <div className="space-y-4">
                {/* Pickup */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary-500" />
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="Enter pickup location"
                      className="input-field pl-10"
                    />
                  </div>
                </div>

                {/* Dotted line connector */}
                <div className="flex items-center pl-5">
                  <div className="w-px h-6 border-l-2 border-dashed border-gray-300" />
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    Destination
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-500" />
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Where are you going?"
                      className="input-field pl-10"
                    />
                    <SearchIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Vehicle type selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Vehicle Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {vehicleTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedVehicle(type.id)}
                        className={`p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                          selectedVehicle === type.id
                            ? "border-secondary-500 bg-secondary-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="text-xl block mb-1">{type.icon}</span>
                        <p className="text-xs font-semibold text-navy-500">{type.label}</p>
                        <p className="text-[10px] text-gray-400">{type.price}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Find Drivers button */}
                <button className="btn-primary w-full flex items-center justify-center gap-2 mt-2">
                  <SearchIcon className="w-4 h-4" />
                  Find Drivers
                </button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card overflow-hidden p-0">
              <div className="relative h-full min-h-[400px] bg-gradient-to-br from-navy-500/5 via-secondary-500/10 to-accent-500/5 rounded-2xl">
                {/* Map grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(13,27,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,27,42,1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Map header */}
                <div className="absolute top-4 left-4 right-4 z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-card flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-secondary-600" />
                    <span className="text-sm font-medium text-navy-500">Live Map View</span>
                    <span className="ml-auto text-xs text-gray-400">
                      {nearbyDrivers.length} drivers nearby
                    </span>
                  </div>
                </div>

                {/* Roads representation */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300/50" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300/50" />
                  <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-200/40" />
                  <div className="absolute top-3/4 left-0 right-0 h-px bg-gray-200/40" />
                  <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gray-200/40" />
                  <div className="absolute top-0 bottom-0 left-3/4 w-px bg-gray-200/40" />
                </div>

                {/* Pickup marker */}
                <div className="absolute top-[45%] left-[40%] z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center shadow-lg shadow-secondary-500/30 animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="mt-1 bg-white rounded-lg px-2 py-1 shadow-sm">
                    <span className="text-[10px] font-semibold text-navy-500">Pickup</span>
                  </div>
                </div>

                {/* Destination marker */}
                <div className="absolute top-[25%] right-[25%] z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center shadow-lg shadow-accent-500/30">
                    <MapPinIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="mt-1 bg-white rounded-lg px-2 py-1 shadow-sm">
                    <span className="text-[10px] font-semibold text-navy-500">Destination</span>
                  </div>
                </div>

                {/* Route line between markers */}
                <svg
                  className="absolute inset-0 w-full h-full z-[5]"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="43%"
                    y1="45%"
                    x2="72%"
                    y2="28%"
                    stroke="#00D4AA"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    opacity="0.6"
                  />
                </svg>

                {/* Animated nearby driver dots */}
                <div className="absolute top-[50%] left-[50%] z-10">
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-navy-500 flex items-center justify-center shadow-md animate-bounce" style={{ animationDelay: "0s", animationDuration: "2s" }}>
                      <CarIcon className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-[35%] left-[55%] z-10">
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-navy-500 flex items-center justify-center shadow-md animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}>
                      <CarIcon className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-[60%] left-[30%] z-10">
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-navy-500 flex items-center justify-center shadow-md animate-bounce" style={{ animationDelay: "1s", animationDuration: "3s" }}>
                      <CarIcon className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Map bottom info */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-card flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4 text-secondary-600" />
                      <span className="text-xs font-medium text-navy-500">Nearest driver: 2 min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse" />
                      <span className="text-xs text-gray-500">Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Available Drivers Nearby */}
          <div>
            <h2 className="text-lg font-bold text-navy-500 mb-4 flex items-center gap-2">
              <CarIcon className="w-5 h-5 text-secondary-500" />
              Available Drivers Nearby
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearbyDrivers.map((driver) => (
                <div key={driver.id} className="card hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    {/* Driver photo placeholder */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-100 to-secondary-50 flex items-center justify-center flex-shrink-0">
                      <UserIcon className="w-7 h-7 text-secondary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-navy-500 text-sm">{driver.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{driver.vehicle}</p>
                      <div className="flex items-center gap-1 mt-1.5">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(driver.rating)
                                ? "text-yellow-400"
                                : "text-gray-200"
                            }`}
                            filled={i < Math.floor(driver.rating)}
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">{driver.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <ClockIcon className="w-4 h-4 text-gray-400" />
                      <span className="text-xs font-medium text-gray-500">{driver.distance}</span>
                    </div>
                    <button className="px-4 py-2 rounded-xl bg-secondary-500 text-white text-xs font-semibold hover:bg-secondary-600 transition-colors">
                      Request
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Rides */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-navy-500 flex items-center gap-2">
                <HistoryIcon className="w-5 h-5 text-secondary-500" />
                Recent Rides
              </h2>
              <Link
                href="/dashboard/passenger/history"
                className="text-sm font-medium text-secondary-600 hover:text-secondary-700 flex items-center gap-1 transition-colors"
              >
                View all
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {passengerRides.map((ride) => (
                <div
                  key={ride.id}
                  className="card flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  {/* Route info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center gap-1 pt-1 flex-shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-secondary-500" />
                        <div className="w-px h-6 bg-gray-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-navy-500 truncate">
                          {ride.pickup.address}
                        </p>
                        <p className="text-xs text-gray-400 my-1">{ride.distance} &middot; {ride.duration}</p>
                        <p className="text-sm font-medium text-navy-500 truncate">
                          {ride.dropoff.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ride details */}
                  <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                    <div className="text-right">
                      <p className="text-xs text-gray-400">{ride.date}</p>
                      <p className="text-sm font-semibold text-navy-500">
                        ${ride.fare.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          ride.status
                        )}`}
                      >
                        {getStatusLabel(ride.status)}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">{ride.driverName}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

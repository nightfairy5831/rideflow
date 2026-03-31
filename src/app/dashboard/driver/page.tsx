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
  EarningsIcon,
  DashboardIcon,
  NavigationIcon,
  MenuIcon,
  CloseIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import { mockDrivers, mockRides, earningsData } from "@/data/mockData";

const driver = mockDrivers[0];
const driverRides = mockRides.filter((r) => r.driverId === "d1");
const incomingRequest = mockRides.find((r) => r.status === "requested");

const sidebarLinks = [
  { label: "Dashboard", icon: DashboardIcon, href: "/dashboard/driver", active: true },
  { label: "Ride Requests", icon: NavigationIcon, href: "/dashboard/driver/requests", active: false },
  { label: "Earnings", icon: EarningsIcon, href: "/dashboard/driver/earnings", active: false },
  { label: "Ride History", icon: HistoryIcon, href: "/dashboard/driver/history", active: false },
  { label: "Profile", icon: UserIcon, href: "/dashboard/driver/profile", active: false },
  { label: "Vehicle", icon: CarIcon, href: "/dashboard/driver/vehicle", active: false },
];

export default function DriverDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(driver.status === "online");
  const [rideRequest, setRideRequest] = useState(incomingRequest);

  const maxEarning = Math.max(...earningsData.weeklyChart.map((d) => d.amount));

  return (
    <div className="flex h-screen bg-gray-50 font-poppins overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-navy-500 text-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3">
            <LogoIcon className="w-10 h-10" />
            <span className="text-xl font-bold tracking-tight">RideFlow</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white/60 hover:text-white transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Driver profile card in sidebar */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image
              src={driver.photo}
              alt={driver.name}
              width={48}
              height={48}
              className="rounded-full object-cover ring-2 ring-secondary-500"
            />
            <div className="min-w-0">
              <p className="font-semibold text-sm truncate">{driver.name}</p>
              <div className="flex items-center gap-1.5">
                <StarIcon className="w-3.5 h-3.5 text-yellow-400" filled />
                <span className="text-xs text-gray-300">{driver.rating}</span>
                <span className="text-xs text-gray-500 mx-1">|</span>
                <span className="text-xs text-gray-300">{driver.totalRides} rides</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  link.active
                    ? "bg-secondary-500/15 text-secondary-400"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <link.icon className="w-5 h-5 flex-shrink-0" />
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200"
          >
            <LogoutIcon className="w-5 h-5 flex-shrink-0" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-navy-500 hover:text-secondary-600 transition-colors"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
              <h1 className="text-lg sm:text-xl font-bold text-navy-500 hidden sm:block">
                Driver Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              {/* Online/Offline toggle */}
              <div className="flex items-center gap-3">
                <span
                  className={`text-sm font-medium ${
                    isOnline ? "text-secondary-600" : "text-gray-400"
                  }`}
                >
                  {isOnline ? "Online" : "Offline"}
                </span>
                <button
                  onClick={() => setIsOnline(!isOnline)}
                  className={`
                    relative w-12 h-6 rounded-full transition-colors duration-300
                    ${isOnline ? "bg-secondary-500" : "bg-gray-300"}
                  `}
                >
                  <span
                    className={`
                      absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300
                      ${isOnline ? "translate-x-6" : "translate-x-0.5"}
                    `}
                  />
                </button>
              </div>

              {/* Notification bell */}
              <button className="relative text-gray-400 hover:text-navy-500 transition-colors">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 01-3.46 0" />
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full border-2 border-white" />
              </button>

              {/* Driver avatar (visible on mobile) */}
              <Image
                src={driver.photo}
                alt={driver.name}
                width={36}
                height={36}
                className="rounded-full object-cover ring-2 ring-gray-100 sm:hidden"
              />
            </div>
          </div>
        </header>

        {/* Scrollable main content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {/* Welcome header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Image
                src={driver.photo}
                alt={driver.name}
                width={56}
                height={56}
                className="rounded-2xl object-cover shadow-card hidden sm:block"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-500">
                  Welcome back,{" "}
                  <span className="gradient-text">{driver.name.split(" ")[0]}</span>
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Here is your activity overview for today
                </p>
              </div>
            </div>
            <div
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold self-start
                ${
                  isOnline
                    ? "bg-secondary-50 text-secondary-700"
                    : "bg-gray-100 text-gray-500"
                }
              `}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isOnline ? "bg-secondary-500 animate-pulse" : "bg-gray-400"
                }`}
              />
              {isOnline ? "Online" : "Offline"}
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="card group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-secondary-50 flex items-center justify-center text-secondary-600 group-hover:scale-110 transition-transform">
                  <DollarIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-secondary-600 bg-secondary-50 px-2 py-1 rounded-full">
                  Today
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-navy-500">$185.50</p>
              <p className="text-xs text-gray-400 mt-1">Today&apos;s Earnings</p>
            </div>

            <div className="card group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <EarningsIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  Week
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-navy-500">$1,250.75</p>
              <p className="text-xs text-gray-400 mt-1">Weekly Earnings</p>
            </div>

            <div className="card group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 group-hover:scale-110 transition-transform">
                  <CarIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-1 rounded-full">
                  Total
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-navy-500">1,247</p>
              <p className="text-xs text-gray-400 mt-1">Total Rides</p>
            </div>

            <div className="card group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform">
                  <StarIcon className="w-5 h-5 text-yellow-500" filled />
                </div>
                <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                  Rating
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-navy-500">
                4.9<span className="text-lg text-gray-400 font-normal">/5.0</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                <span className="inline-flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.round(driver.rating) ? "text-yellow-400" : "text-gray-200"
                      }`}
                      filled
                    />
                  ))}
                </span>
              </p>
            </div>
          </div>

          {/* Two column layout: Ride Request + Chart */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Incoming Ride Request */}
            {rideRequest ? (
              <div className="card border-2 border-secondary-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-secondary" />
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-navy-500">Incoming Ride Request</h3>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-secondary-600 bg-secondary-50 px-3 py-1.5 rounded-full animate-pulse">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                    New Request
                  </span>
                </div>

                {/* Passenger info */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <UserIcon className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-500">{rideRequest.passengerName}</p>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-3.5 h-3.5 text-yellow-400" filled />
                      <span className="text-xs text-gray-500">5.0</span>
                      <span className="text-xs text-gray-400 ml-1">324 rides</span>
                    </div>
                  </div>
                </div>

                {/* Route */}
                <div className="bg-gray-50 rounded-xl p-4 mb-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="mt-0.5 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-secondary-500" />
                      <div className="w-px h-8 bg-gray-300" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                        Pickup
                      </p>
                      <p className="text-sm font-semibold text-navy-500">
                        {rideRequest.pickup.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-accent-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                        Dropoff
                      </p>
                      <p className="text-sm font-semibold text-navy-500">
                        {rideRequest.dropoff.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ride details */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center py-2 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-400">Distance</p>
                    <p className="text-sm font-bold text-navy-500">{rideRequest.distance}</p>
                  </div>
                  <div className="text-center py-2 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-400">Duration</p>
                    <p className="text-sm font-bold text-navy-500">{rideRequest.duration}</p>
                  </div>
                  <div className="text-center py-2 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-400">Fee</p>
                    <p className="text-sm font-bold text-secondary-600">
                      ${rideRequest.platformFee.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Estimated fare */}
                <div className="flex items-center justify-between mb-6 px-1">
                  <span className="text-sm text-gray-500">Estimated Fare</span>
                  <span className="text-xl font-bold text-navy-500">
                    ${rideRequest.fare.toFixed(2)}
                  </span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setRideRequest(undefined)}
                    className="btn-outline flex-1 flex items-center justify-center gap-2 py-3"
                  >
                    <CloseIcon className="w-4 h-4" />
                    Decline
                  </button>
                  <button
                    onClick={() => setRideRequest(undefined)}
                    className="btn-primary flex-1 flex items-center justify-center gap-2 py-3"
                  >
                    <CheckIcon className="w-4 h-4" />
                    Accept
                  </button>
                </div>
              </div>
            ) : (
              <div className="card flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <NavigationIcon className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-navy-500 mb-1">No Active Requests</h3>
                <p className="text-sm text-gray-400">
                  {isOnline
                    ? "Waiting for new ride requests..."
                    : "Go online to start receiving requests"}
                </p>
              </div>
            )}

            {/* Weekly Earnings Chart */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-navy-500">Weekly Earnings</h3>
                <span className="text-sm font-semibold text-secondary-600">
                  ${earningsData.week.toFixed(2)}
                </span>
              </div>

              <div className="flex items-end justify-between gap-2 sm:gap-4 h-48">
                {earningsData.weeklyChart.map((day) => {
                  const heightPct = (day.amount / maxEarning) * 100;
                  return (
                    <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-xs font-semibold text-navy-500">
                        ${day.amount}
                      </span>
                      <div className="w-full relative flex-1 flex items-end">
                        <div
                          className="w-full rounded-t-lg bg-gradient-to-t from-secondary-600 to-secondary-400 transition-all duration-500 hover:from-secondary-500 hover:to-secondary-300 cursor-pointer min-h-[8px]"
                          style={{ height: `${heightPct}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-400">{day.day}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom row: Recent Rides + Vehicle Info */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Rides */}
            <div className="lg:col-span-2 card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-navy-500">Recent Rides</h3>
                <Link
                  href="/dashboard/driver/history"
                  className="text-sm font-medium text-secondary-600 hover:text-secondary-700 flex items-center gap-1 transition-colors"
                >
                  View All
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>

              <div className="overflow-x-auto -mx-6">
                <div className="min-w-[600px] px-6">
                  {/* Table header */}
                  <div className="grid grid-cols-12 gap-4 pb-3 border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    <div className="col-span-4">Route</div>
                    <div className="col-span-3">Passenger</div>
                    <div className="col-span-2 text-right">Fare</div>
                    <div className="col-span-1 text-center">Rating</div>
                    <div className="col-span-2 text-right">Date</div>
                  </div>

                  {/* Table rows */}
                  {driverRides.map((ride) => (
                    <div
                      key={ride.id}
                      className="grid grid-cols-12 gap-4 py-4 border-b border-gray-50 items-center hover:bg-gray-50/50 transition-colors rounded-lg"
                    >
                      <div className="col-span-4">
                        <div className="flex items-start gap-2">
                          <div className="flex flex-col items-center mt-1 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-secondary-500" />
                            <div className="w-px h-4 bg-gray-200" />
                            <div className="w-2 h-2 rounded-full bg-accent-500" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-navy-500 truncate">
                              {ride.pickup.address.split(" - ")[0]}
                            </p>
                            <p className="text-xs text-gray-400 truncate">
                              {ride.dropoff.address.split(" - ")[0]}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <p className="text-sm font-medium text-navy-500">
                          {ride.passengerName}
                        </p>
                        <p className="text-xs text-gray-400">
                          {ride.distance} &middot; {ride.duration}
                        </p>
                      </div>
                      <div className="col-span-2 text-right">
                        <p className="text-sm font-bold text-navy-500">
                          ${ride.fare.toFixed(2)}
                        </p>
                      </div>
                      <div className="col-span-1 text-center">
                        {ride.rating > 0 ? (
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-yellow-600">
                            <StarIcon className="w-3.5 h-3.5 text-yellow-400" filled />
                            {ride.rating}
                          </span>
                        ) : (
                          <span className="text-xs text-gray-300">-</span>
                        )}
                      </div>
                      <div className="col-span-2 text-right">
                        <p className="text-sm text-gray-500">{ride.date}</p>
                        <p className="text-xs text-gray-400">{ride.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-navy-500">Vehicle Info</h3>
                <CarIcon className="w-5 h-5 text-secondary-600" />
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-navy-500 to-navy-400 flex items-center justify-center shadow-lg">
                  <CarIcon className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-xl font-bold text-navy-500">
                  {driver.vehicle.make} {driver.vehicle.model}
                </p>
                <p className="text-sm text-gray-400">{driver.vehicle.year}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between py-2.5 px-3 bg-gray-50 rounded-xl">
                  <span className="text-sm text-gray-500">Color</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 rounded-full border border-gray-200"
                      style={{
                        backgroundColor:
                          driver.vehicle.color.toLowerCase() === "silver"
                            ? "#C0C0C0"
                            : driver.vehicle.color.toLowerCase(),
                      }}
                    />
                    <span className="text-sm font-semibold text-navy-500">
                      {driver.vehicle.color}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2.5 px-3 bg-gray-50 rounded-xl">
                  <span className="text-sm text-gray-500">Plate</span>
                  <span className="text-sm font-semibold text-navy-500 bg-white px-3 py-1 rounded-lg border border-gray-200 tracking-wider">
                    {driver.vehicle.plate}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2.5 px-3 bg-gray-50 rounded-xl">
                  <span className="text-sm text-gray-500">Type</span>
                  <span className="text-sm font-semibold text-navy-500 capitalize">
                    {driver.vehicle.type}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2.5 px-3 bg-gray-50 rounded-xl">
                  <span className="text-sm text-gray-500">Year</span>
                  <span className="text-sm font-semibold text-navy-500">
                    {driver.vehicle.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

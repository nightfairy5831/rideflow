"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LogoIcon,
  MapPinIcon,
  CarIcon,
  StarIcon,
  ClockIcon,
  PhoneIcon,
  NavigationIcon,
  ArrowRightIcon,
  UserIcon,
  ShieldIcon,
  CloseIcon,
} from "@/components/Icons";
import { mockRides, mockDrivers } from "@/data/mockData";

export default function TrackingPage() {
  const ride = mockRides[2];
  const driver = mockDrivers[2];

  const [progress, setProgress] = useState(45);
  const [etaMinutes, setEtaMinutes] = useState(13);
  const [arrived, setArrived] = useState(false);
  const [panelExpanded, setPanelExpanded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setArrived(true);
          setEtaMinutes(0);
          return 100;
        }
        return prev + 1;
      });

      setEtaMinutes((prev) => {
        if (prev <= 0) return 0;
        return Math.max(0, prev - 0.24);
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const displayEta = arrived ? 0 : Math.ceil(etaMinutes);

  return (
    <div className="relative h-screen w-full overflow-hidden font-poppins">
      {/* ===== FULL-SCREEN MAP SIMULATION ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Water body shapes for map realism */}
        <div className="absolute top-[15%] right-0 w-[40%] h-[35%] bg-navy-800/40 rounded-l-[80px] opacity-50" />
        <div className="absolute bottom-[30%] left-[5%] w-[25%] h-[15%] bg-navy-900/30 rounded-full opacity-40" />

        {/* SVG Route + Markers */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Road shapes in background */}
          <path
            d="M0 400 Q100 380 200 350 T400 320"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="20"
          />
          <path
            d="M50 0 Q60 200 100 400 T150 800"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="16"
          />

          {/* Animated dashed route line */}
          <path
            d="M100 580 C130 520 140 480 170 440 C200 400 220 370 250 340 C280 310 290 280 300 250"
            stroke="url(#routeGradient)"
            strokeWidth="4"
            strokeDasharray="12 8"
            strokeLinecap="round"
            className="animate-route-dash"
          />

          {/* Solid route glow behind */}
          <path
            d="M100 580 C130 520 140 480 170 440 C200 400 220 370 250 340 C280 310 290 280 300 250"
            stroke="rgba(0,212,170,0.15)"
            strokeWidth="14"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="routeGradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#00D4AA" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>

          {/* Pickup marker - green */}
          <circle cx="100" cy="580" r="10" fill="#00D4AA" opacity="0.25" />
          <circle cx="100" cy="580" r="6" fill="#00D4AA" />
          <circle cx="100" cy="580" r="3" fill="white" />

          {/* Dropoff marker - accent */}
          <circle cx="300" cy="250" r="10" fill="#FF6B35" opacity="0.25" />
          <circle cx="300" cy="250" r="6" fill="#FF6B35" />
          <circle cx="300" cy="250" r="3" fill="white" />
        </svg>

        {/* Pickup label */}
        <div className="absolute left-[10%] bottom-[24%] sm:left-[18%] sm:bottom-[26%]">
          <div className="bg-secondary-500/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
            <span className="mr-1">●</span> Copacabana Beach
          </div>
        </div>

        {/* Dropoff label */}
        <div className="absolute right-[10%] top-[28%] sm:right-[18%] sm:top-[30%]">
          <div className="bg-accent-500/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
            Cristo Redentor <span className="ml-1">◎</span>
          </div>
        </div>

        {/* Animated car icon */}
        <div
          className="absolute animate-car-move"
          style={{
            left: "20%",
            top: "55%",
          }}
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-secondary-500/20 rounded-full animate-ping" />
            <div className="bg-white rounded-full p-2 shadow-lg shadow-secondary-500/30">
              <CarIcon className="w-5 h-5 text-secondary-600" />
            </div>
          </div>
        </div>

        {/* Progress path indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-navy-800/70 backdrop-blur-sm rounded-full px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
          <span className="text-white/80 text-xs font-medium">
            {arrived ? "Arrived at destination" : `${progress}% of route completed`}
          </span>
        </div>
      </div>

      {/* ===== TOP BAR OVERLAY ===== */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="flex items-center justify-between px-4 sm:px-6 pt-4 pb-3">
          {/* Back button */}
          <Link
            href="/dashboard/passenger"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl px-3 py-2.5 border border-white/10 hover:bg-white/20 transition-all"
          >
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span className="text-white text-sm font-medium hidden sm:inline">
              Back
            </span>
          </Link>

          {/* Title */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/10">
            <NavigationIcon className="w-4 h-4 text-secondary-400" />
            <span className="text-white text-sm font-semibold">
              Tracking Your Ride
            </span>
          </div>

          {/* SOS button */}
          <button className="flex items-center gap-1.5 bg-red-500/90 backdrop-blur-md rounded-xl px-3 py-2.5 border border-red-400/30 hover:bg-red-600 transition-all shadow-lg shadow-red-500/20">
            <ShieldIcon className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-bold tracking-wide">
              SOS
            </span>
          </button>
        </div>
      </div>

      {/* ===== BOTTOM PANEL (SLIDE-UP CARD) ===== */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 transition-transform duration-500 ease-out ${
          panelExpanded ? "translate-y-0" : "translate-y-[calc(100%-3.5rem)]"
        }`}
      >
        {/* Pull handle / toggle */}
        <div
          className="flex justify-center py-2 cursor-pointer"
          onClick={() => setPanelExpanded(!panelExpanded)}
        >
          <div className="w-10 h-1 rounded-full bg-white/30" />
        </div>

        <div className="bg-white rounded-t-3xl shadow-[0_-8px_40px_rgba(0,0,0,0.15)] max-h-[75vh] overflow-y-auto">
          <div className="px-5 sm:px-6 pt-5 pb-8">
            {/* Ride Status + Progress */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {arrived ? (
                  <>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-500" />
                    </span>
                    <span className="text-sm font-bold text-secondary-600">
                      Arrived!
                    </span>
                  </>
                ) : (
                  <>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </span>
                    <span className="text-sm font-semibold text-navy-500">
                      In Progress
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-navy-500">
                <ClockIcon className="w-4 h-4 text-secondary-600" />
                <span className="text-sm font-semibold">
                  {arrived ? "Arrived" : `~${displayEta} min remaining`}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 mb-6 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, #00D4AA 0%, #00B892 100%)",
                }}
              />
            </div>

            {/* Driver info card */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-5">
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <Image
                    src={driver.photo}
                    alt={driver.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover ring-2 ring-secondary-200"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-navy-500 text-base truncate">
                    {driver.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <StarIcon className="w-3.5 h-3.5 text-yellow-400" filled />
                    <span className="text-sm text-gray-600 font-medium">
                      {driver.rating}
                    </span>
                    <span className="text-xs text-gray-400 ml-1">
                      ({driver.totalRides.toLocaleString()} rides)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <CarIcon className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      {driver.vehicle.make} {driver.vehicle.model} ({driver.vehicle.color})
                    </span>
                    <span className="text-xs text-gray-300 mx-1">|</span>
                    <span className="text-xs font-semibold text-navy-500">
                      {driver.vehicle.plate}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 mb-5">
              <button className="btn-outline flex-1 flex items-center justify-center gap-2 py-2.5 text-sm">
                <PhoneIcon className="w-4 h-4" />
                Call Driver
              </button>
              <button className="btn-outline flex-1 flex items-center justify-center gap-2 py-2.5 text-sm">
                <NavigationIcon className="w-4 h-4" />
                Share Trip
              </button>
              <button className="btn-accent flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs rounded-xl">
                <CloseIcon className="w-3.5 h-3.5" />
                Cancel
              </button>
            </div>

            {/* Ride details */}
            <div className="border-t border-gray-100 pt-5">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Ride Details
              </h4>
              <div className="space-y-3">
                {/* Pickup */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary-500" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">
                      Pickup
                    </p>
                    <p className="text-sm text-navy-500 font-medium">
                      {ride.pickup.address}
                    </p>
                  </div>
                </div>

                {/* Connector line */}
                <div className="ml-[15px] w-px h-4 bg-gray-200" />

                {/* Dropoff */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">
                      Dropoff
                    </p>
                    <p className="text-sm text-navy-500 font-medium">
                      {ride.dropoff.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Distance + fare */}
              <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 flex-1">
                  <MapPinIcon className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Distance
                    </p>
                    <p className="text-sm font-semibold text-navy-500">
                      {ride.distance}
                    </p>
                  </div>
                </div>
                <div className="w-px h-8 bg-gray-100" />
                <div className="flex items-center gap-2 flex-1">
                  <ClockIcon className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Duration
                    </p>
                    <p className="text-sm font-semibold text-navy-500">
                      {ride.duration}
                    </p>
                  </div>
                </div>
                <div className="w-px h-8 bg-gray-100" />
                <div className="flex items-center gap-2 flex-1">
                  <ArrowRightIcon className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Est. Fare
                    </p>
                    <p className="text-sm font-bold gradient-text">
                      R${ride.fare.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== KEYFRAME STYLES ===== */}
      <style jsx>{`
        @keyframes car-move {
          0% {
            transform: translate(0, 0) rotate(-15deg);
          }
          25% {
            transform: translate(8vw, -8vh) rotate(-25deg);
          }
          50% {
            transform: translate(18vw, -16vh) rotate(-20deg);
          }
          75% {
            transform: translate(28vw, -22vh) rotate(-30deg);
          }
          100% {
            transform: translate(38vw, -28vh) rotate(-15deg);
          }
        }

        @keyframes route-dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -40;
          }
        }

        :global(.animate-car-move) {
          animation: car-move 20s ease-in-out infinite alternate;
        }

        :global(.animate-route-dash) {
          animation: route-dash 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  StarIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CarIcon,
  DollarIcon,
} from "@/components/Icons";
import { mockRides } from "@/data/mockData";

type FilterType = "all" | "completed" | "cancelled" | "in_progress" | "requested";

const statusConfig: Record<
  string,
  { label: string; bg: string; text: string; dot: string }
> = {
  completed: {
    label: "Completed",
    bg: "bg-green-50",
    text: "text-green-700",
    dot: "bg-green-500",
  },
  in_progress: {
    label: "In Progress",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    dot: "bg-yellow-500",
  },
  requested: {
    label: "Requested",
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-500",
  },
  cancelled: {
    label: "Cancelled",
    bg: "bg-red-50",
    text: "text-red-700",
    dot: "bg-red-500",
  },
  accepted: {
    label: "Accepted",
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    dot: "bg-indigo-500",
  },
};

const filterTabs: { key: FilterType; label: string }[] = [
  { key: "all", label: "All Rides" },
  { key: "completed", label: "Completed" },
  { key: "in_progress", label: "In Progress" },
  { key: "requested", label: "Requested" },
  { key: "cancelled", label: "Cancelled" },
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-yellow-400" : "text-gray-200"
          }`}
          filled={star <= rating}
        />
      ))}
    </div>
  );
}

export default function HistoryPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredRides =
    filter === "all"
      ? mockRides
      : mockRides.filter((ride) => ride.status === filter);

  const completedRides = mockRides.filter((r) => r.status === "completed");
  const totalSpent = completedRides.reduce(
    (sum, r) => sum + r.fare + r.platformFee,
    0
  );
  const averageRating =
    completedRides.length > 0
      ? completedRides.reduce((sum, r) => sum + r.rating, 0) /
        completedRides.length
      : 0;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Header */}
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
              Ride History
            </h1>
            <p className="text-gray-300 font-poppins">
              View and manage all your past and current rides
            </p>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="container-custom -mt-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary-50 flex items-center justify-center flex-shrink-0">
                <CarIcon className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-poppins">
                  Total Rides
                </p>
                <p className="text-2xl font-bold text-navy-500 font-poppins">
                  {mockRides.length}
                </p>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                <DollarIcon className="w-6 h-6 text-accent-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-poppins">
                  Total Spent
                </p>
                <p className="text-2xl font-bold text-navy-500 font-poppins">
                  ${totalSpent.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <StarIcon className="w-6 h-6 text-yellow-500" filled />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-poppins">
                  Avg. Rating
                </p>
                <p className="text-2xl font-bold text-navy-500 font-poppins">
                  {averageRating.toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="container-custom mt-8">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold font-poppins transition-all duration-300 ${
                  filter === tab.key
                    ? "bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-button"
                    : "bg-white text-gray-500 hover:text-navy-500 hover:bg-gray-50 shadow-card"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Ride List */}
        <section className="container-custom mt-6 pb-16">
          {filteredRides.length === 0 ? (
            /* Empty State */
            <div className="card text-center py-16">
              <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <CarIcon className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-navy-500 font-poppins mb-2">
                No rides found
              </h3>
              <p className="text-gray-500 font-poppins mb-6">
                There are no{" "}
                {filter !== "all" ? filter.replace("_", " ") : ""} rides to
                display.
              </p>
              <button
                onClick={() => setFilter("all")}
                className="btn-primary inline-flex items-center gap-2"
              >
                View All Rides
              </button>
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden lg:block bg-white rounded-2xl shadow-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="text-left text-xs font-semibold text-gray-500 font-poppins uppercase tracking-wider px-6 py-4">
                          Route
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 font-poppins uppercase tracking-wider px-4 py-4">
                          Date &amp; Time
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 font-poppins uppercase tracking-wider px-4 py-4">
                          Driver
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 font-poppins uppercase tracking-wider px-4 py-4">
                          Distance / Duration
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 font-poppins uppercase tracking-wider px-4 py-4">
                          Fare
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 font-poppins uppercase tracking-wider px-4 py-4">
                          Status
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 font-poppins uppercase tracking-wider px-4 py-4">
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRides.map((ride) => {
                        const status =
                          statusConfig[ride.status] || statusConfig.completed;
                        return (
                          <tr
                            key={ride.id}
                            className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                          >
                            <td className="px-6 py-5">
                              <div className="flex items-start gap-3 min-w-[220px]">
                                <div className="flex flex-col items-center mt-1">
                                  <div className="w-2.5 h-2.5 rounded-full bg-secondary-500" />
                                  <div className="w-px h-6 bg-gray-200" />
                                  <div className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-navy-500 font-poppins">
                                    {ride.pickup.address}
                                  </p>
                                  <p className="text-sm text-gray-400 font-poppins mt-1">
                                    {ride.dropoff.address}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-5">
                              <p className="text-sm font-medium text-navy-500 font-poppins">
                                {ride.date}
                              </p>
                              <p className="text-xs text-gray-400 font-poppins mt-0.5">
                                {ride.time}
                              </p>
                            </td>
                            <td className="px-4 py-5">
                              <p className="text-sm font-medium text-navy-500 font-poppins">
                                {ride.driverName}
                              </p>
                            </td>
                            <td className="px-4 py-5">
                              <p className="text-sm text-navy-500 font-poppins">
                                {ride.distance}
                              </p>
                              <p className="text-xs text-gray-400 font-poppins mt-0.5">
                                {ride.duration}
                              </p>
                            </td>
                            <td className="px-4 py-5">
                              <p className="text-sm font-semibold text-navy-500 font-poppins">
                                ${ride.fare.toFixed(2)}
                              </p>
                              <p className="text-xs text-gray-400 font-poppins mt-0.5">
                                + ${ride.platformFee.toFixed(2)} fee
                              </p>
                            </td>
                            <td className="px-4 py-5">
                              <span
                                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-poppins ${status.bg} ${status.text}`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                                />
                                {status.label}
                              </span>
                            </td>
                            <td className="px-4 py-5">
                              {ride.status === "completed" && ride.rating > 0 ? (
                                <RatingStars rating={ride.rating} />
                              ) : (
                                <span className="text-xs text-gray-400 font-poppins">
                                  --
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden space-y-4">
                {filteredRides.map((ride) => {
                  const status =
                    statusConfig[ride.status] || statusConfig.completed;
                  return (
                    <div key={ride.id} className="card">
                      {/* Status and Date Row */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-poppins ${status.bg} ${status.text}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                          />
                          {status.label}
                        </span>
                        <span className="text-sm text-gray-400 font-poppins">
                          {ride.date} &middot; {ride.time}
                        </span>
                      </div>

                      {/* Route */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="flex flex-col items-center mt-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-secondary-500" />
                          <div className="w-px h-6 bg-gray-200" />
                          <div className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-navy-500 font-poppins truncate">
                            {ride.pickup.address}
                          </p>
                          <p className="text-sm text-gray-400 font-poppins mt-2 truncate">
                            {ride.dropoff.address}
                          </p>
                        </div>
                      </div>

                      {/* Info Row */}
                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                        <div>
                          <p className="text-xs text-gray-400 font-poppins">
                            Driver
                          </p>
                          <p className="text-sm font-medium text-navy-500 font-poppins mt-0.5">
                            {ride.driverName}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-poppins">
                            Distance
                          </p>
                          <p className="text-sm font-medium text-navy-500 font-poppins mt-0.5">
                            {ride.distance}
                          </p>
                          <p className="text-xs text-gray-400 font-poppins">
                            {ride.duration}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400 font-poppins">
                            Fare
                          </p>
                          <p className="text-sm font-bold text-navy-500 font-poppins mt-0.5">
                            ${ride.fare.toFixed(2)}
                          </p>
                          <p className="text-xs text-gray-400 font-poppins">
                            + ${ride.platformFee.toFixed(2)} fee
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      {ride.status === "completed" && ride.rating > 0 && (
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                          <span className="text-xs text-gray-400 font-poppins">
                            Your Rating
                          </span>
                          <RatingStars rating={ride.rating} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

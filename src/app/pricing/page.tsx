import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DollarIcon,
  CheckIcon,
  CarIcon,
  UserIcon,
  ShieldIcon,
  StarIcon,
  ArrowRightIcon,
  ClockIcon,
  ChevronDownIcon,
} from "@/components/Icons";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-300 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10 pt-32 pb-20 sm:pt-36 sm:pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <DollarIcon className="w-4 h-4 text-secondary-400" />
          <span className="text-sm font-medium text-secondary-300 font-poppins">
            Transparent Pricing
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-poppins mb-6 max-w-4xl mx-auto leading-tight">
          Just{" "}
          <span className="gradient-text-light">$0.99</span>{" "}
          Platform Fee Per Ride
        </h1>
        <p className="text-lg text-gray-300 font-poppins max-w-2xl mx-auto mb-10 leading-relaxed">
          No surge pricing, no hidden charges. A simple, flat platform fee of $0.99
          for both drivers and passengers on every ride. Honest pricing you can trust.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/register/passenger" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            Start Riding <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <Link href="/register/driver" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-8 py-4">
            Become a Driver
          </Link>
        </div>
      </div>
    </section>
  );
}

function HowPricingWorks() {
  const steps = [
    {
      icon: <DollarIcon className="w-7 h-7" />,
      title: "Base Fare",
      value: "Varies",
      description:
        "A starting fare is calculated based on vehicle type and your region. This covers the driver's initial costs.",
    },
    {
      icon: <CarIcon className="w-7 h-7" />,
      title: "Distance Rate",
      value: "Per km",
      description:
        "A per-kilometer rate is applied based on the total distance of your route. Longer trips cost proportionally more.",
    },
    {
      icon: <ClockIcon className="w-7 h-7" />,
      title: "Time Rate",
      value: "Per min",
      description:
        "A per-minute charge accounts for time spent in the ride, including any delays due to traffic or stops.",
    },
    {
      icon: <ShieldIcon className="w-7 h-7" />,
      title: "Platform Fee",
      value: "$0.99",
      description:
        "A flat $0.99 platform fee is applied to both the driver and passenger. That's it - no hidden extras.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider font-poppins">
            Breakdown
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 font-poppins">
            How <span className="gradient-text">Pricing</span> Works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-poppins">
            Your total fare is calculated from four transparent components. You see the
            estimate before you book - no surprises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="card group hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-secondary-100 to-secondary-50 flex items-center justify-center text-secondary-600 mb-4 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <p className="text-xs font-semibold text-secondary-600 uppercase tracking-wider font-poppins mb-1">
                {step.value}
              </p>
              <h3 className="text-lg font-semibold text-navy-500 font-poppins mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-poppins">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-gray-300">
                  <ArrowRightIcon className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const competitors = [
    {
      name: "RideFlow",
      highlight: true,
      fee: "$0.99",
      surge: "Never",
      driverEarnings: "~95%",
      transparency: "Full upfront",
      support: "24/7",
    },
    {
      name: "Competitor A",
      highlight: false,
      fee: "25% commission",
      surge: "Up to 3x",
      driverEarnings: "~75%",
      transparency: "Partial",
      support: "Limited",
    },
    {
      name: "Competitor B",
      highlight: false,
      fee: "20% + fees",
      surge: "Up to 2.5x",
      driverEarnings: "~80%",
      transparency: "Partial",
      support: "Business hours",
    },
  ];

  const rows = [
    { label: "Platform Fee", key: "fee" as const },
    { label: "Surge Pricing", key: "surge" as const },
    { label: "Driver Earnings", key: "driverEarnings" as const },
    { label: "Price Transparency", key: "transparency" as const },
    { label: "Support", key: "support" as const },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider font-poppins">
            Compare
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 font-poppins">
            RideFlow vs <span className="gradient-text">Competitors</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-poppins">
            See why thousands of drivers and passengers choose RideFlow for fairer
            pricing and better value.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-2xl shadow-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-5 text-sm font-semibold text-gray-400 font-poppins uppercase tracking-wider">
                  Feature
                </th>
                {competitors.map((c) => (
                  <th
                    key={c.name}
                    className={`px-6 py-5 text-sm font-semibold font-poppins text-center ${
                      c.highlight
                        ? "text-secondary-600 bg-secondary-50/50"
                        : "text-gray-500"
                    }`}
                  >
                    {c.name}
                    {c.highlight && (
                      <span className="ml-2 text-xs bg-secondary-500 text-white px-2 py-0.5 rounded-full">
                        Best
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.key} className={i < rows.length - 1 ? "border-b border-gray-50" : ""}>
                  <td className="px-6 py-5 text-sm font-medium text-navy-500 font-poppins">
                    {row.label}
                  </td>
                  {competitors.map((c) => (
                    <td
                      key={c.name}
                      className={`px-6 py-5 text-sm text-center font-poppins ${
                        c.highlight
                          ? "font-semibold text-secondary-600 bg-secondary-50/50"
                          : "text-gray-500"
                      }`}
                    >
                      {c[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {competitors.map((c) => (
            <div
              key={c.name}
              className={`card ${
                c.highlight
                  ? "ring-2 ring-secondary-500 relative"
                  : ""
              }`}
            >
              {c.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-secondary-500 text-white px-3 py-1 rounded-full font-poppins">
                  Best Value
                </span>
              )}
              <h3
                className={`text-lg font-bold font-poppins mb-4 ${
                  c.highlight ? "text-secondary-600" : "text-navy-500"
                }`}
              >
                {c.name}
              </h3>
              <div className="space-y-3">
                {rows.map((row) => (
                  <div
                    key={row.key}
                    className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                  >
                    <span className="text-sm text-gray-400 font-poppins">
                      {row.label}
                    </span>
                    <span
                      className={`text-sm font-semibold font-poppins ${
                        c.highlight ? "text-secondary-600" : "text-navy-500"
                      }`}
                    >
                      {c[row.key]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCards() {
  const cards = [
    {
      title: "For Passengers",
      icon: <UserIcon className="w-8 h-8" />,
      price: "$0.99",
      subtitle: "platform fee per ride",
      color: "secondary" as const,
      features: [
        "Transparent fare estimate before booking",
        "No surge pricing ever",
        "Real-time ride tracking",
        "Verified and rated drivers",
        "Multiple payment methods",
        "24/7 customer support",
        "Trip sharing with contacts",
        "In-app receipts for every ride",
      ],
      cta: "Start Riding",
      ctaHref: "/register/passenger",
    },
    {
      title: "For Drivers",
      icon: <CarIcon className="w-8 h-8" />,
      price: "$0.99",
      subtitle: "platform fee per ride",
      color: "navy" as const,
      features: [
        "Keep ~95% of every fare",
        "No percentage-based commissions",
        "Flexible work schedule",
        "Instant earnings access",
        "Full insurance coverage on rides",
        "24/7 driver support line",
        "Driver community access",
        "Weekly earnings reports",
      ],
      cta: "Start Driving",
      ctaHref: "/register/driver",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider font-poppins">
            Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 font-poppins">
            Simple Plans for{" "}
            <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-poppins">
            Whether you ride or drive, our flat $0.99 fee keeps things fair and
            simple for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`card relative overflow-hidden ${
                card.color === "secondary"
                  ? "ring-2 ring-secondary-500"
                  : "ring-1 ring-gray-100"
              }`}
            >
              {card.color === "secondary" && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-secondary" />
              )}
              {card.color === "navy" && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
              )}

              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    card.color === "secondary"
                      ? "bg-secondary-50 text-secondary-600"
                      : "bg-navy-50 text-navy-500"
                  }`}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-500 font-poppins">
                  {card.title}
                </h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold gradient-text font-poppins">
                    {card.price}
                  </span>
                  <span className="text-gray-400 font-poppins text-sm">
                    /{card.subtitle}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {card.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-secondary-600" />
                    </div>
                    <span className="text-sm text-gray-600 font-poppins">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={card.ctaHref}
                className={`block text-center w-full py-3.5 rounded-xl font-semibold font-poppins transition-all duration-300 hover:scale-[1.02] ${
                  card.color === "secondary"
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "How is the ride fare calculated?",
      answer:
        "Your fare is based on a combination of base fare, distance traveled (per km), and time spent (per minute). The exact rates vary by city and vehicle type. You always see a fare estimate before confirming your ride.",
    },
    {
      question: "What exactly is the $0.99 platform fee?",
      answer:
        "The $0.99 is a flat fee charged to both the passenger and driver for each completed ride. This fee helps us maintain the platform, provide customer support, GPS tracking, and payment processing. Unlike competitors, we never take a percentage of the fare.",
    },
    {
      question: "Is there ever surge pricing on RideFlow?",
      answer:
        "No, never. We believe in fair, predictable pricing. While demand may affect driver availability, we never artificially inflate prices during peak times. The fare you see before booking is the fare you pay.",
    },
    {
      question: "How much do drivers keep from each ride?",
      answer:
        "Drivers keep approximately 95% of every fare. The only deduction is the flat $0.99 platform fee. There are no percentage-based commissions, no weekly fees, and no hidden deductions.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept credit cards, debit cards, and PIX. All payments are processed securely through our encrypted payment system. You can manage your payment methods in your profile settings.",
    },
    {
      question: "Can I get a fare estimate before booking?",
      answer:
        "Absolutely. When you enter your pickup and drop-off locations, you will see a fare estimate before confirming the ride. The final fare may vary slightly based on actual route and time, but you will never be surprised by hidden fees.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider font-poppins">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 font-poppins">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-poppins">
            Everything you need to know about our pricing. Can&apos;t find an answer?
            Contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group card cursor-pointer"
            >
              <summary className="flex items-center justify-between list-none">
                <h3 className="text-base font-semibold text-navy-500 font-poppins pr-4">
                  {faq.question}
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="text-gray-500 text-sm leading-relaxed font-poppins mt-4 pt-4 border-t border-gray-100">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="relative z-10 text-center py-16 px-6 sm:px-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-poppins mb-4">
              Ready to Experience Fair Pricing?
            </h2>
            <p className="text-gray-300 font-poppins mb-8 max-w-lg mx-auto">
              Join thousands who choose RideFlow for transparent, honest pricing.
              Just $0.99 per ride - it really is that simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register/passenger"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                Ride Now <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/register/driver"
                className="btn-outline border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                Drive With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowPricingWorks />
        <ComparisonSection />
        <PricingCards />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

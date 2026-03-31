import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CarIcon,
  MapPinIcon,
  ShieldIcon,
  DollarIcon,
  ClockIcon,
  StarIcon,
  ArrowRightIcon,
  UserIcon,
  NavigationIcon,
  PhoneIcon,
} from "@/components/Icons";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-ebd3fee7a693?w=1920&q=80"
          alt="City at night with cars"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500/95 via-navy-500/80 to-navy-500/60" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-secondary-300">
                Available 24/7 in your city
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Ride,{" "}
              <span className="gradient-text-light">Your Way</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Connect with reliable drivers instantly. Safe, affordable rides at just{" "}
              <span className="text-secondary-400 font-semibold">$0.99</span> platform fee.
              Experience the future of urban transportation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/register/passenger" className="btn-primary text-center text-lg px-8 py-4">
                Request a Ride
              </Link>
              <Link href="/register/driver" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-center text-lg px-8 py-4">
                Become a Driver
              </Link>
            </div>

            <div className="flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-secondary-400">10K+</p>
                <p className="text-sm text-gray-400">Active Drivers</p>
              </div>
              <div className="w-px h-10 bg-gray-600" />
              <div>
                <p className="text-2xl font-bold text-secondary-400">50K+</p>
                <p className="text-sm text-gray-400">Happy Riders</p>
              </div>
              <div className="w-px h-10 bg-gray-600" />
              <div>
                <p className="text-2xl font-bold text-secondary-400">4.9</p>
                <p className="text-sm text-gray-400">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <div className="bg-white rounded-2xl p-5 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-secondary-500" />
                    <input
                      type="text"
                      placeholder="Pickup location"
                      className="w-full text-sm text-gray-500 outline-none font-poppins"
                      readOnly
                      defaultValue="Av. Paulista, 1000"
                    />
                  </div>
                  <div className="w-px h-6 bg-gray-200 ml-[5px]" />
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-3 h-3 rounded-full bg-accent-500" />
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="w-full text-sm text-gray-500 outline-none font-poppins"
                      readOnly
                      defaultValue="Rua Augusta, 500"
                    />
                  </div>
                </div>
                <button className="btn-primary w-full text-center py-3">
                  Find Drivers Nearby
                </button>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-card flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Estimated arrival</p>
                  <p className="font-semibold text-navy-500 text-sm">3 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <MapPinIcon className="w-7 h-7" />,
      title: "Real-Time Tracking",
      description:
        "Follow your ride in real-time with live GPS tracking. Know exactly where your driver is at every moment.",
    },
    {
      icon: <ShieldIcon className="w-7 h-7" />,
      title: "Safe & Secure",
      description:
        "All drivers are verified with background checks. Share your trip with trusted contacts for extra safety.",
    },
    {
      icon: <DollarIcon className="w-7 h-7" />,
      title: "Transparent Pricing",
      description:
        "Only $0.99 platform fee per ride for both drivers and passengers. No hidden charges, no surge pricing.",
    },
    {
      icon: <ClockIcon className="w-7 h-7" />,
      title: "Fast Pickups",
      description:
        "Average pickup time under 5 minutes. Our smart matching algorithm connects you with the nearest driver.",
    },
    {
      icon: <StarIcon className="w-7 h-7" />,
      title: "Rated Drivers",
      description:
        "Community-driven ratings ensure quality. See driver ratings and reviews before confirming your ride.",
    },
    {
      icon: <CarIcon className="w-7 h-7" />,
      title: "Multiple Vehicle Types",
      description:
        "Choose from sedans, SUVs, compacts, or vans. Select the perfect vehicle for your needs.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="features">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            <span className="gradient-text">Features</span> You&apos;ll Love
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            RideFlow brings you a premium ride experience with cutting-edge technology
            and unbeatable pricing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-100 to-secondary-50 flex items-center justify-center text-secondary-600 mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-navy-500 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <PhoneIcon className="w-8 h-8" />,
      title: "Open the App",
      description: "Sign up in seconds with your phone number or email. It's quick and easy.",
    },
    {
      number: "02",
      icon: <MapPinIcon className="w-8 h-8" />,
      title: "Set Your Destination",
      description: "Enter your pickup and drop-off locations. See the fare estimate upfront.",
    },
    {
      number: "03",
      icon: <NavigationIcon className="w-8 h-8" />,
      title: "Get Matched",
      description: "Our algorithm finds the nearest available driver. Accept and track in real-time.",
    },
    {
      number: "04",
      icon: <StarIcon className="w-8 h-8" />,
      title: "Enjoy Your Ride",
      description: "Arrive safely at your destination. Rate your experience and share feedback.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Get a Ride in{" "}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From opening the app to reaching your destination, the process is seamless.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-navy-500 to-navy-400 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform shadow-lg">
                {step.icon}
              </div>
              <span className="absolute top-0 right-1/4 text-6xl font-bold text-gray-100 -z-10">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-navy-500 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 text-gray-300">
                  <ArrowRightIcon className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider">
              Simple Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Just{" "}
              <span className="gradient-text">$0.99</span>{" "}
              Per Ride
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We believe in transparent, fair pricing. Our fixed platform fee of $0.99
              is charged to both drivers and passengers per ride. No surge pricing,
              no hidden fees — just simple, honest costs.
            </p>

            <div className="space-y-4">
              {[
                "Fixed $0.99 platform fee per ride",
                "No surge pricing ever",
                "Transparent fare estimates before booking",
                "Multiple payment methods accepted",
                "Earnings go directly to drivers",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-secondary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-navy-500 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/pricing" className="btn-primary inline-flex items-center gap-2 mt-8">
              Learn More <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 mb-2">Platform Fee</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold gradient-text">$0.99</span>
                  <span className="text-gray-400">/ride</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Base Fare</span>
                  <span className="font-semibold text-navy-500">Calculated by distance</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Driver Fee</span>
                  <span className="font-semibold text-secondary-600">$0.99</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Passenger Fee</span>
                  <span className="font-semibold text-secondary-600">$0.99</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-500 text-sm">Surge Pricing</span>
                  <span className="font-semibold text-accent-500">Never</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DriveWithUsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
          alt="Driver in car"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-500/90" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="text-secondary-400 font-semibold text-sm uppercase tracking-wider">
              For Drivers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Drive & Earn on{" "}
              <span className="text-secondary-400">Your Schedule</span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Be your own boss. Set your own hours, choose your rides, and earn
              competitive income. Join thousands of drivers already making money with RideFlow.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: "$1,200+", label: "Avg. Weekly Earnings" },
                { value: "Flexible", label: "Work Hours" },
                { value: "Instant", label: "Payment Access" },
                { value: "24/7", label: "Driver Support" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-secondary-400">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link href="/register/driver" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Start Driving <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { icon: <CarIcon className="w-6 h-6" />, title: "Easy Registration", desc: "Sign up and get approved within 24 hours" },
              { icon: <DollarIcon className="w-6 h-6" />, title: "Fair Commission", desc: "Only $0.99 per ride — keep most of your earnings" },
              { icon: <ShieldIcon className="w-6 h-6" />, title: "Insurance Coverage", desc: "Full coverage while you're on an active ride" },
              { icon: <UserIcon className="w-6 h-6" />, title: "Community", desc: "Join a supportive community of drivers" },
            ].map((card, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-secondary-400/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-secondary-500/20 flex items-center justify-center text-secondary-400 mb-3">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{card.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Passenger",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      text: "RideFlow changed how I commute. The drivers are always professional, and I love the transparent pricing. No surprises!",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      role: "Driver",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      text: "Best platform for drivers. The $0.99 fee is unbeatable — I keep almost all my earnings. The app is easy to use and riders are great.",
      rating: 5,
    },
    {
      name: "Lucia Pereira",
      role: "Passenger",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      text: "I feel safe every time I ride with RideFlow. The real-time tracking and driver verification give me total peace of mind.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            What Our <span className="gradient-text">Community</span> Says
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400" filled />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.photo}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-navy-500 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Join thousands of drivers and passengers who trust RideFlow for safe,
              affordable, and reliable transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register/passenger" className="btn-primary text-lg px-8 py-4">
                Ride Now
              </Link>
              <Link href="/register/driver" className="btn-outline border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                Drive With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingPreview />
        <DriveWithUsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

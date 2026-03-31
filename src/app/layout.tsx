import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RideFlow - Your Smart Ride Companion",
  description:
    "RideFlow connects drivers and passengers seamlessly. Request rides, track in real-time, and enjoy a smooth transportation experience with just $0.99 per ride.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-poppins">{children}</body>
    </html>
  );
}

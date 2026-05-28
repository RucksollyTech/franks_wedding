import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans-wedding",
});

export const metadata: Metadata = {
  title: "Frank & Susan's Wedding",
  description: "Join us in celebrating the union of Frank and Susan on October 3, 2026. Explore our wedding website for details, RSVP, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${cormorant.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Lato, Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

import 'aos/dist/aos.css';
import { cn } from "@/lib/utils";

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

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

// export const metadata: Metadata = {
//   title: "Frank & Susan's Wedding",
//   description: "Join us in celebrating the union of Frank and Susan on October 3, 2026. Explore our wedding website for details, RSVP, and more!",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://franks-wedding.vercel.app"),

  title: "Frank & Susan's Wedding",
  description: "Join us in celebrating the union of Frank and Susan on October 3rd, 2026.",

  openGraph: {
    title: "Frank & Susan's Wedding",
    description: "Join us in celebrating the union of Frank and Susan on October 3rd, 2026.",
    url: "https://franks-wedding.vercel.app",
    siteName: "Frank & Susan's Wedding",
    images: [
      {
        url: "https://franks-wedding.vercel.app/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Frank and Susan wedding invitation",
        type: "image/png",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Frank & Susan's Wedding",
    description: "Join us in celebrating the union of Frank and Susan on October 3rd, 2026.",
    images: ["https://franks-wedding.vercel.app/images/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", greatVibes.variable, cormorant.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
      
    </html>
  );
}

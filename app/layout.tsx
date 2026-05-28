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

// export const metadata: Metadata = {
//   title: "Frank & Susan's Wedding",
//   description: "Join us in celebrating the union of Frank and Susan on October 3, 2026. Explore our wedding website for details, RSVP, and more!",
// };

// export const metadata: Metadata = {
//   title: "Susan & Franklin — Saturday, 3rd October 2026",
//   description:
//     "Join us for the wedding of Susan & Franklin in Lagos, Nigeria — Saturday, 3rd October 2026.",
//   openGraph: {
//     title: "Susan & Franklin — Saturday, 3rd October 2026",
//     description:
//       "Join us for the wedding of Susan & Franklin in Lagos, Nigeria — Saturday, 3rd October 2026.",
//     url: "https://franks-wedding.vercel.app",
//     siteName: "Susan & Franklin Wedding",
//     images: [
//       {
//         url: "https://franks-wedding.vercel.app/images/try3.png",
//         width: 1200,
//         height: 630,
//         alt: "Susan and Franklin wedding invitation",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Susan & Franklin — Saturday, 3rd October 2026",
//     description:
//       "Join us for the wedding of Susan & Franklin in Lagos, Nigeria — Saturday, 3rd October 2026.",
//     images: ["https://franks-wedding.vercel.app/images/try3.png"],
//   },
// };
export const metadata = {
  title: "Susan & Franklin — Saturday, 3rd October 2026",
  description:
    "Join us in celebrating the union of Frank and Susan on October 3rd, 2026.",
  openGraph: {
    title: "Susan & Franklin — Saturday, 3rd October 2026",
    description:
      "Join us in celebrating the union of Frank and Susan on October 3rd, 2026.",
    images: [
      {
        url: "https://franks-wedding.vercel.app/images/try3.png",
        width: 1200,
        height: 630,
      },
    ],
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
      className={`${greatVibes.variable} ${cormorant.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

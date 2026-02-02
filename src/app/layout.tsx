import type { Metadata } from "next";
import { MantineProvider } from '@mantine/core';
import { Cormorant_Garamond, EB_Garamond, MonteCarlo } from 'next/font/google';
import '@mantine/core/styles.css';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InitialFadeIn from "@/components/InitialFadeIn";
import { Analytics } from "@vercel/analytics/next"
// import Banner from "@/components/Banner";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant-garamond',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-eb-garamond',
});

const monteCarlo = MonteCarlo({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-monte-carlo',
});

export const metadata: Metadata = {
  title: "The Humbles 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${ebGaramond.variable} ${monteCarlo.variable}`}>
      <body className="bg-secondary">
        {/* <Banner
          message="Kindly RSVP by the 15th of March"
          id="rsvp-deadline"
        /> */}
        <MantineProvider>
          <Navbar />
          <InitialFadeIn />
          {children}
        </MantineProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

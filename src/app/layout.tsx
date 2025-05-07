import type { Metadata } from "next";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InitialFadeIn from "@/components/InitialFadeIn";

export const metadata: Metadata = {
  title: "The Humbles 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=MonteCarlo&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-secondary">
        <MantineProvider>
          <Navbar />
          <InitialFadeIn />
          {children}
        </MantineProvider>
        <Footer />
      </body>
    </html>
  );
}

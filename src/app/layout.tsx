import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orpheus URL Shortener",
  description:
    "Orpheus-powered URL shortener for Hack Club. small, fast, and extremely adorable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png"></link>
      </head>
      <body className={`${inter.variable}  antialiased`}>{children}</body>
    </html>
  );
}

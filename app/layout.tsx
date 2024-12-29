"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./shared/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning 
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased bg-slate-800`}
      >
        <Header />
        <main className="flex-grow" style={{minHeight:"calc(100vh - 130px)"}}>{children}</main>
        <footer className="w-full text-center h-[40px] text-white">
          Develop by Fernando Neirot
        </footer>
      </body>
    </html>
  );
}

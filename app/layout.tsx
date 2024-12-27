import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema gestion de tareas",
  description: "Reto de codificacion para SEEK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`} >
        <main className="flex-grow min-h-screen">{children}</main>
        <footer className=" fixed bottom-0 w-full text-center h-[40px]">Develop by Fernando Neirot</footer>
      </body>
    </html>
  );
}

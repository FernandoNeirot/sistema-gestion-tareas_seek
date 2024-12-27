"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { IUser } from "./shared/_arquitecture/domain/interface";
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
  const [userData, setUserData] = useState<IUser | null>(null);
  useEffect(() => {
    const user = localStorage.getItem("user-sistema-tareas");
    if (typeof window !== "undefined" && user && location.pathname !== "/login") {
      setUserData(JSON.parse(user));
    }
  }, []);
  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {userData && <Header user={userData} />}
        <main className="flex-grow" style={{minHeight:"calc(100vh - 130px)"}}>{children}</main>
        <footer className="w-full text-center h-[40px]">
          Develop by Fernando Neirot
        </footer>
      </body>
    </html>
  );
}

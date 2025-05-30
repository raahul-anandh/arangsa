import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Electrolize, Gowun_Dodum, Iceland, Inconsolata } from "next/font/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from "@/contexts/authContext";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const gowunDodumFont = Gowun_Dodum ({
  subsets:["latin"],
  weight:["400"],
  variable: "--font-gowunDodum"
})

const electrolizeFont = Electrolize ({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-electrolize"
})

const icelandFont = Iceland ({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-iceland"
})

const iconsolata = Inconsolata ({
  subsets: ["latin"],
  weight: ["200","300","400","500","600"],
  variable: "--font-iconsolata"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gowunDodumFont.variable} ${electrolizeFont.variable} ${icelandFont.variable} ${iconsolata.variable}`}>
        <GoogleOAuthProvider clientId = {GOOGLE_CLIENT_ID}>
          <AuthProvider>
            < Navbar />
            {children}
          </AuthProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}

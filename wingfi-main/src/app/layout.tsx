import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ProviderWrapper } from "@/components";
import AlertWrapper from "@/components/Alerts/AlertWrapper";
import NavBar from "@/components/NavBar";
import CursorTracking from "@/components/CursorTracking";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wingfi Ecommerce",
  description: "Wingfi Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <ProviderWrapper>
          <NavBar />
          <CursorTracking />
          {children}
          <Footer />
          <AlertWrapper />
        </ProviderWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProviderWrapper } from "@/components";
import AlertWrapper from "@/components/Alerts/AlertWrapper";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ProviderWrapper>
          {children}
          <AlertWrapper />
        </ProviderWrapper>
      </body>
    </html>
  );
}

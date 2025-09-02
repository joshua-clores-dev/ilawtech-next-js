import type { Metadata } from "next";
import "./globals.css";

import { geistMono, geistSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ilawtech",
  description: "Comprehensive IT solutions tailored to your business needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

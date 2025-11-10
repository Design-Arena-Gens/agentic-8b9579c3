import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scholerium Dashboard",
  description: "Insight-driven academic intelligence for Scholerium."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-scholerium-50 via-white to-scholerium-100 text-scholerium-900 antialiased">
        {children}
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irfan Sudarsana | Frontend Developer",
  description: "A self-taught frontend developer",
  verification: {
    google: "8YCdhAFEwZNg_NAMj5Eym4TFvzc1HRZnsueiQnZ0JpM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-poppins text-gray-800 bg-gray-50">{children}</body>
    </html>
  );
}

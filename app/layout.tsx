import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/navbar/ThemeProvider";
import Toast from "@/components/ui/Toast";

export const metadata: Metadata = {
  title: "Irfan Sudarsana | Frontend Developer",
  description: "A self-taught frontend developer",
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toast />
        </ThemeProvider>
      </body>
    </html>
  );
}

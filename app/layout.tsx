import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Custom Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio by Mohammed Amal N",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <PageTransition>
          {children}
        </PageTransition>
        
        </body>
    </html>
  );
}

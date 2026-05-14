import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const nohemi = localFont({
  src: "../../public/fonts/Nohemi-Font/Nohemi-VF-BF6438cc58ad63d.ttf",
  variable: "--font-nohemi",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roopa Tours & Travels | Premium Travel Agency Mangalore",
  description: "Experience luxury travel across Karnataka. Premium tour packages, airport cab services, and guided experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nohemi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#393e41] text-[#f6f7eb] font-sans selection:bg-[#e94f37]/30">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

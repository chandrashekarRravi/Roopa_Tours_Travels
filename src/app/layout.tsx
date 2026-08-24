import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const nohemi = localFont({
  src: "../../public/fonts/Nohemi-Font/Nohemi-VF-BF6438cc58ad63d.ttf",
  variable: "--font-nohemi",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.roopatoursandtravels.com"),
  title: "Roopa Tours & Travels | Premium Travel Agency Mangalore",
  description: "Experience luxury travel across Karnataka. Premium tour packages, airport cab services, and guided experiences.",
  icons: {
    icon: [
      { url: "/roopa_favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/roopa_favicon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/roopa_favicon_48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/roopa_apple_touch_icon_180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/roopa_google_site_icon_192x192.png", sizes: "192x192" },
    ],
  },
  openGraph: {
    images: [{ url: "/roopa_website_og_1200x630.png", width: 1200, height: 630 }],
  },
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
      <body className="min-h-full flex flex-col bg-[#0E14CC] text-[#0E14CC] font-sans selection:bg-[#EAFFBF]/30">
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://athenasbest.com";
const siteName = "ATHENA'S BEST®";
const siteDescription = "Carefully cooked dog food that preserves nutrients — without cutting corners or inflating prices. Premium nutrition at honest prices.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Real Nutrition. Not Burnt.`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "dog food",
    "premium dog food",
    "carefully cooked dog food",
    "high protein dog food",
    "omega-3 dog food",
    "natural dog food",
    "nutritious dog food",
    "ATHENA'S BEST",
    "pet nutrition",
    "healthy dog food",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} — Real Nutrition. Not Burnt.`,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteName} - Premium Dog Food`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Real Nutrition. Not Burnt.`,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes here when ready
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: "cover",
  themeColor: "#016769",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/athena-logo.png" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

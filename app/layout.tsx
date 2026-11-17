import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_LINKS_URL || "https://links.himanshugunwant.com"
  ),
  title: "Himanshu Gunwant — Links",
  description:
    "Official links, social profiles, projects, and contact channels for Himanshu Gunwant.",
  authors: [{ name: "Himanshu Gunwant", url: "https://himanshugunwant.com" }],
  creator: "Himanshu Gunwant",
  publisher: "Himanshu Gunwant",
  keywords: [
    "Himanshu Gunwant",
    "Himanshu Gunwant Links",
    "links.himanshugunwant.com",
    "Developer",
    "Builder",
    "IIIT Tiruchirappalli",
    "Software Engineer",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Himanshu Gunwant — Links & Profiles",
    description:
      "Official links, social profiles, projects, and contact channels for Himanshu Gunwant.",
    url: "https://links.himanshugunwant.com",
    siteName: "Himanshu Gunwant",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Gunwant — Links & Profiles",
    description:
      "Official links, social profiles, projects, and contact channels for Himanshu Gunwant.",
    creator: "@himanshugg_",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased font-sans selection:bg-white/20 selection:text-white">
        <div className="max-w-xl mx-auto px-5 sm:px-6 min-h-screen flex flex-col justify-between">
          <main id="main-content" tabIndex={-1} className="w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

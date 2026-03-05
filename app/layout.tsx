import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thispavan.dev"),
  applicationName: "Subramanyambattari Portfolio",
  icons: {
    icon: "/metadataimage.png",
    apple: "/metadataimage.png",
  },
  title: {
    default: "Subramanyambattari | Full Stack Back-end Developer",
    template: "%s | Subramanyambattari",
  },
  description:
    "Portfolio of Subramanyambattari, a full stack back-end developer building modern web applications and tools.",
  keywords: [
    "Subramanyambattari",
    "thispavan.dev",
    "portfolio",
    "full stack developer",
    "backend developer",
    "next.js developer",
    "web development",
  ],
  authors: [{ name: "Subramanyambattari", url: "https://thispavan.dev" }],
  creator: "Subramanyambattari",
  publisher: "Subramanyambattari",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Subramanyambattari | Full Stack Back-end Developer",
    description:
      "Explore projects, skills, and blog posts by Subramanyambattari, a full stack back-end developer.",
    url: "https://thispavan.dev",
    siteName: "thispavan.dev",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Subramanyambattari Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subramanyambattari | Full Stack Back-end Developer",
    description:
      "Portfolio and blog of Subramanyambattari, full stack back-end developer.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

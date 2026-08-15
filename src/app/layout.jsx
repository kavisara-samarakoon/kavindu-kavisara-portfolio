// src/app/layout.jsx
// Root layout — wraps every page with shared structure: fonts, metadata, SmoothScroll
import "./globals.css";
import { Syne, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

// Load Syne font (editorial headings)
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

// Load DM Sans font (clean body text)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

// SEO Metadata — used by Next.js to populate <head>
export const metadata = {
  title: {
    default: "Kavindu Kavisara — Creative Web Developer",
    template: "%s | Kavindu Kavisara",
  },
  description:
    "Creative Web Developer & Computer Networking Student at NSBM Green University, Sri Lanka. Building clean, modern web experiences.",
  keywords: [
    "Kavindu Kavisara",
    "Web Developer",
    "Sri Lanka",
    "NSBM",
    "Portfolio",
    "React",
    "Next.js",
    "Networking Student",
  ],
  authors: [{ name: "Kavindu Kavisara" }],
  creator: "Kavindu Kavisara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kavindukavisara.vercel.app",
    title: "Kavindu Kavisara — Creative Web Developer",
    description:
      "Creative Web Developer & Computer Networking Student building modern web experiences.",
    siteName: "Kavindu Kavisara Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavindu Kavisara — Creative Web Developer",
    description:
      "Creative Web Developer & Computer Networking Student building modern web experiences.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-bg-dark text-text-light font-dm antialiased">
        {/* SmoothScroll wraps all page content for Lenis smooth scrolling */}
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}

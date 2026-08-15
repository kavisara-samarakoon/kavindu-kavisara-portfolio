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
    default:
      "Kavindu Kavisara — Aspiring Cybersecurity Analyst & Network Engineer",
    template: "%s | Kavindu Kavisara",
  },
  description:
    "Aspiring Cybersecurity Analyst and Network Engineer studying Computer Networks at NSBM Green University, with supporting skills in systems, cloud, and secure development.",
  keywords: [
    "Kavindu Kavisara",
    "Cybersecurity Analyst",
    "Network Engineer",
    "Sri Lanka",
    "NSBM",
    "Portfolio",
    "React",
    "Next.js",
    "Computer Networks Student",
  ],
  authors: [{ name: "Kavindu Kavisara" }],
  creator: "Kavindu Kavisara",
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Kavindu Kavisara — Aspiring Cybersecurity Analyst & Network Engineer",
    description:
      "Computer Networks student building practical skills in cybersecurity, networking, systems, cloud, and secure development.",
    siteName: "Kavindu Kavisara Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kavindu Kavisara — Aspiring Cybersecurity Analyst & Network Engineer",
    description:
      "Computer Networks student building practical skills in cybersecurity, networking, systems, cloud, and secure development.",
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

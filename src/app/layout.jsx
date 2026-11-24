import "./globals.css";
import "./view-transitions.css";
import { Syne, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import RouteTransition from "@/components/RouteTransition";
import SmoothScroll from "@/components/SmoothScroll";
import { isIndexable, siteOpenGraph, siteOrigin } from "@/lib/siteMetadata";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteOrigin),
  robots: isIndexable ? undefined : { index: false, follow: false },
  title: {
    default:
      "Kavisara Samarakoon — Aspiring Cybersecurity Analyst & Network Engineer",
    template: "%s | Kavisara Samarakoon",
  },
  description:
    "Aspiring Cybersecurity Analyst and Network Engineer studying Computer Networks at NSBM Green University, with supporting skills in systems, cloud, and secure development.",
  keywords: [
    "Kavisara Samarakoon",
    "Cybersecurity Analyst",
    "Network Engineer",
    "Sri Lanka",
    "NSBM",
    "Portfolio",
    "React",
    "Next.js",
    "Computer Networks Student",
  ],
  authors: [{ name: "Kavisara Samarakoon" }],
  creator: "Kavisara Samarakoon",
  openGraph: siteOpenGraph,
  twitter: {
    card: "summary_large_image",
    title:
      "Kavisara Samarakoon — Aspiring Cybersecurity Analyst & Network Engineer",
    description:
      "Computer Networks student building practical skills in cybersecurity, networking, systems, cloud, and secure development.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`} style={{ viewTransitionName: "root" }}>
      <body className="bg-bg-dark text-text-light font-dm antialiased">
        <SmoothScroll>
          <Navbar />
          <RouteTransition />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}

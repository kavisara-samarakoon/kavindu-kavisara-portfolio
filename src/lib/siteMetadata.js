export const siteOrigin = "https://kavisara-samarakoon-portfolio.vercel.app";

// Only builds for the verified Vercel production deployment opt into indexing.
export const isIndexable = process.env.VERCEL_ENV === "production";

export const siteOpenGraph = {
  type: "website",
  locale: "en_US",
  title: "Kavisara Samarakoon — Aspiring Cybersecurity Analyst & Network Engineer",
  description:
    "Computer Networks student building practical skills in cybersecurity, networking, systems, cloud, and secure development.",
  siteName: "Kavisara Samarakoon Portfolio",
};

export function routeMetadata(path, { title, description, image }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...siteOpenGraph,
      title,
      description,
      url: path,
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}

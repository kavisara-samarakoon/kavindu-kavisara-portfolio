import { isIndexable, siteOrigin } from "@/lib/siteMetadata";

export default function robots() {
  return isIndexable
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteOrigin}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}

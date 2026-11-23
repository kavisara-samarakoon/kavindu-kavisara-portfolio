import { getAllProjectSlugs } from "@/data/projects";
import { isIndexable, siteOrigin } from "@/lib/siteMetadata";

export default function sitemap() {
  if (!isIndexable) return [];

  const paths = ["/", "/about", "/work", ...getAllProjectSlugs().map((slug) => `/work/${slug}`)];
  return paths.map((path) => ({ url: new URL(path, siteOrigin).href }));
}

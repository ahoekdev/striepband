import type { SanityDocument } from "@sanity/client";
import { sanityClient } from "sanity:client";

export function fetchPageBySlug(slug: string) {
  const PAGE_QUERY = `*[_type == "page" && slug.current == "${slug}"]{ _id, title, slug, content }`;
  return sanityClient.fetch<SanityDocument[]>(PAGE_QUERY);
}

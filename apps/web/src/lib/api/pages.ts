import type { SanityDocument } from "@sanity/client";
import { sanityClient } from "sanity:client";

export async function fetchPageBySlug(slug: string) {
  const PAGE_QUERY = `*[_type == "page" && slug.current == "${slug}"]{ _id, title, slug, pageBuilder[] }`;
  return sanityClient
    .fetch<SanityDocument[]>(PAGE_QUERY)
    .then(([document]) => document);
}

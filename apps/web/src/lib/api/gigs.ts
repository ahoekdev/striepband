import { sanityClient } from "sanity:client";

const GIGS_QUERY = `*[
  _type == "gig"
  && defined(slug.current)
]|order(date desc)[0...12]{_id, title, slug, date, url}`;

interface Gig {
  title: string;
  slug: string;
  date: string;
  url: string;
}

export async function fetchGigs() {
  return sanityClient.fetch<Gig[]>(GIGS_QUERY);
}

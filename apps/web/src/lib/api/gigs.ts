import { sanityClient } from "sanity:client";

const GIGS_QUERY = `*[
  _type == "gig"
]|order(date desc)[0...12]{_id, title, slug, date, url}`;

interface Gig {
  title: string;
  slug: string;
  date: string;
  url: string;
}

export async function fetchGigs() {
  const gigs = await sanityClient.fetch<Gig[]>(GIGS_QUERY);
  const sortedGigs = gigs.toSorted((a, b) => a.date.localeCompare(b.date));
  return sortedGigs;
}

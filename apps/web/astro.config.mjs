import { loadEnv } from "vite";

import { defineConfig, fontProviders } from "astro/config";

import sanity from "@sanity/astro";

import netlify from "@astrojs/netlify";

const { SANITY_DATASET } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    sanity({
      projectId: "c2n8vovr",
      dataset: SANITY_DATASET,
      useCdn: false, // for static builds
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Roboto Slab",
      cssVariable: "--font-roboto-slab",
      weights: ["100 900"],
    },
    {
      provider: fontProviders.google(),
      name: "Permanent Marker",
      cssVariable: "--font-permanent-marker",
      weights: ["100 900"],
    },
  ],
});

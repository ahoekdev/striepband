// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",

  integrations: [
    sanity({
      projectId: "c2n8vovr",
      dataset: "production",
      useCdn: false, // for static builds
    }),
  ],

  adapter: netlify(),
});

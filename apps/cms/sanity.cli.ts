import { defineCliConfig } from 'sanity/cli'

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET } = process.env;

export default defineCliConfig({
  api: {
    projectId: "c2n8vovr",
    dataset: "production",
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: 'n9rwng386otkglu7funta36q',
  },
})

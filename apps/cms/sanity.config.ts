import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig([
  {
    basePath: '/production',
    name: 'production',
    title: 'Production',
    projectId: 'c2n8vovr',
    dataset: 'production',
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    basePath: '/development',
    name: 'development',
    title: 'Development',
    projectId: 'c2n8vovr',
    dataset: 'development',
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
])

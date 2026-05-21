// ./schemas/pageType.ts

import { defineArrayMember, defineField, defineType } from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'textWithHeading',
          type: 'textWithHeading',
        }),
        defineArrayMember({
          name: 'blockContent',
          type: 'blockContent',
        }),
      ],
    }),
  ],
})

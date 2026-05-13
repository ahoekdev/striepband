import {defineField, defineType} from 'sanity'

export const textWithIllustrationType = defineType({
  name: 'textWithHeading',
  type: 'object',
  title: 'Text with Illustration',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'text',
    }),
  ],
})

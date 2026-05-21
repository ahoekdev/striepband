import {defineField, defineType} from 'sanity'

export const textWithHeading = defineType({
  name: 'textWithHeading',
  type: 'object',
  title: 'Text with heading',
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

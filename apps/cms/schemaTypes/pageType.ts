import {defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {name: 'slug', type: 'slug'},
    {name: 'content', type: 'array', of: [{type: 'block'}]},
  ],
})

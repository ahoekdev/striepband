import {at, defineMigration, patch, set} from 'sanity/migrate'

type TextWithHeadingBlock = {
  _key?: string
  _type: 'textWithHeading'
  heading?: string
  text?: string
}

type PortableTextSpan = {
  _key: string
  _type: 'span'
  marks: string[]
  text: string
}

type PortableTextBlock = {
  _key: string
  _type: 'block'
  children: PortableTextSpan[]
  markDefs: []
  style: 'normal' | 'h2'
}

function makeKey(base: string | undefined, suffix: string) {
  return `${base ?? 'migrated'}-${suffix}`
}

function createBlock(
  key: string,
  text: string,
  style: PortableTextBlock['style'] = 'normal',
): PortableTextBlock {
  return {
    _key: key,
    _type: 'block',
    style,
    markDefs: [],
    children: [
      {
        _key: `${key}-span`,
        _type: 'span',
        marks: [],
        text,
      },
    ],
  }
}

export default defineMigration({
  title: 'Convert textWithHeading blocks to blockContent',
  documentTypes: ['page'],
  migrate: {
    document(doc) {
      const pageBuilder = Array.isArray(doc.pageBuilder) ? doc.pageBuilder : []

      let changed = false
      const nextPageBuilder = pageBuilder.flatMap((block, index) => {
        if (block?._type !== 'textWithHeading') {
          return [block]
        }

        const typedBlock = block as TextWithHeadingBlock
        const baseKey = typedBlock._key ?? `page-builder-${index}`
        const content: PortableTextBlock[] = []

        if (typedBlock.heading?.trim()) {
          content.push(createBlock(makeKey(baseKey, 'heading'), typedBlock.heading.trim(), 'h2'))
        }

        if (typedBlock.text?.trim()) {
          content.push(createBlock(makeKey(baseKey, 'text'), typedBlock.text.trim()))
        }

        changed = true

        return [
          {
            _key: baseKey,
            _type: 'blockContent',
            content,
          },
        ]
      })

      if (!changed) {
        return
      }

      return patch(doc._id, at('pageBuilder', set(nextPageBuilder)))
    },
  },
})

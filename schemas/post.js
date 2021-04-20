export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },{
      name: 'color',
      title: 'Color',
      type: 'colorPicker'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: "Product Category",
      name: "category",
      type: "object",
      fields: [
        {
          name: "category",
          type: "reference",
          to: [
            {
              type: "category",
            },
          ],
        },
        {
          name: "subcategory",
          type: "reference",
          to: [
            {
              type: "subcategory",
            },
          ]
        }
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },{
      name: "tags",
      title: "tags",
      type: "array",
      of: [
        {
          type: "string",
          name:"tag",
          title:"tag"
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

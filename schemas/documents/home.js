export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    // __experimental_actions: ["update", "publish"],
    fields: [
       {
            title: 'Text',
            name: 'text',
            type: 'string',
        },
        {
            name: 'gallery',
            type: 'object',
            title: 'Gallery',
            fields: [
              {
                name: 'images',
                type: 'array',
                title: 'Images',
                of: [
                  {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                      hotspot: true,
                    },
                    fields: [
                      {
                        name: 'alt',
                        type: 'string',
                        title: 'Alternative text',
                      },
                    ],
                  },
                ],
                options: {
                  layout: 'grid',
                },
              }
            ],
            preview: {
              select: {
                images: 'images',
                image: 'images.0',
              },
              prepare(selection) {
                const { images, image } = selection;
          
                return {
                  title: `Gallery block of ${Object.keys(images).length} images`,
                  subtitle: `Alt text: ${image.alt}`,
                  media: image,
                };
              },
            },
          },{
            title: 'sometexts',
            name: 'sometexts',
            type: 'array',
            of: [
                {
                    title: "texts",
                    name: "texts",
                    type: "object",
                    fields: [
                        {
                            title: "text",
                            name: "text",
                            type: "array",
                            of: [
                                {
                                    type: 'block',
                                    name: 'block',
                                }
                            ]
                        }
                    ]
                }
            ]
        }, 
    ]
}

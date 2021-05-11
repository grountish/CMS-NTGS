import { GrSplits } from 'react-icons/gr'

  

export default {
  type: "document",
  name: "subcategory",
  title: "subCategory",
  icon:GrSplits,
  fields: [
    {
      name: "id",
      title: "id",
      type: "string",
    },
    {
      name: "description",
      title: "description",
      type: "string",
    },
    {
      title: "slug",
      name: "slug",
      type: "slug",
      options: {
        source: "id",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: 'gridNote2',
      type: 'note',
      options: {
       
        headline: 'Hold up!',
        message: `Don't forget to click on the 'Generate' button!`,
        tone: 'caution'
      }
    }
  ],
};

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import React from "react";

const TitleStyle = (props) => (
  <span style={{ fontFamily: "Garamond", fontSize: "2em" }}>
    {props.children}
  </span>
);
const highlightIcon = () => (
  <span
    style={{
      fontWeight: "bold",
      backgroundColor: "green",
      color: "white",
      padding: "2px",
    }}
  >
    GB
  </span>
);
const htmlIcon = () => (
  <span
    style={{
      fontWeight: "bold",
      backgroundColor: "red",
      color: "white",
      padding: "2px",
    }}
  >
    html
  </span>
);
const highlightRender = (props) => (
  <div
    style={{
      backgroundColor: "green",
      color: "white",
      width: "96%",
      padding: "3%",
    }}
  >
    {" "}
    <p> {props.children}</p>
  </div>
);

const htmlRender = ({ value }) => {
  const { code } = value;

  return <div dangerouslySetInnerHTML={{ __html: code + '' }}/>;
};

import imageUrlBuilder from '@sanity/image-url'
import client from 'part:@sanity/base/client'

const builder = imageUrlBuilder(client)



const imgRender = ({ value }) => {
  let a = value.image ? builder.image(value.image.asset._ref).toString() : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'
  let size = (value.size && value.size[0])  ? value.size[0]*130 + 'px' : '300px'
  const style = {
    width:size
  };
  return <img style={style}  src={a} alt="a" />;
};
export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        {
          title: "Title",
          value: "title",
          blockEditor: {
            render: TitleStyle,
          },
        },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      options: { hotspot: true },
    },
    {
      type: "youtube",
    },
    {
      name: "html",
      title: "html",
      type: "object",
      preview: {
        select: {
          code: 'code'
        },
        component: htmlRender
      },
      fields: [
        {
          name: "code",
          type: "text",
          title: "code",
        },
      ],
    },
    {
      name: "img",
      title: "img",
      type: "object",
      preview: {
        select: {
          image: 'image',
          size:'size'
        },
        component: imgRender
      },
      fields: [
        {
          name: "image",
          type: "image",
          title: "image",
        },
        {
          title: 'size',
          name: 'size',
          type: 'array',
          of: [{type: 'number'}],
          options: {
            list: [
              {title: 1, value: 1},
              {title: 2, value: 2},
              {title: 3, value: 3},
            
            ]
          }
        }
      ],
    },
  ],
};

import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "productdescription",
      title: "Product Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "list",
      title: "Product List",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Product Slug",
      type: "slug",
      options: { source: "name" },
      description:
        "Must add this according to the name of product, for some reasons auto generate is not working for spaces use (-) and for  & use (and)",
    }),
    defineField({
      name: "category",
      title: "product category",
      type: "array",
      description: "Select any list according to the category of the product",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    }),
    defineField({
      name: "price",
      title: "product Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "prevoiusprice",
      title: "Prevoius Price",
      type: "number",
    }),
    defineField({
      name: "raiting",
      title: "product rating",
      type: "number",
    }),
    defineField({
      name: "instock",
      title: "Product Available",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:"username",
      title:"User Name",
      type:"string"
    }),
    defineField({
      name:"userreview",
      title:"User Review",
      type:"text"
    }),
  ],
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  type: "document",
  title: "Categroies",
  fields: [
    defineField({
      name: "name",
      title: "Name of Categroy",
      type: "string",
    }),
  ],
});

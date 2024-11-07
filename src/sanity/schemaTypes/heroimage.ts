import { defineType } from "sanity";

export default defineType({
  name: "mainimage",
  type: "document",
  title: "Image",
  fields: [
    {
      name: "heroimage",
      title: "hero section image",
      type: "image",
    },
  ],
});

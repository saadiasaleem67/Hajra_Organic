import { type SchemaTypeDefinition } from "sanity";
import products from "./products";
import heroimage from "./heroimage";
import categories from "./categories";
import Deals from "./Deals";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroimage, categories, products, Deals],
};

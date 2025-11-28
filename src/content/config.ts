import { defineCollection, z } from "astro:content";

const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string().date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  guides,
};

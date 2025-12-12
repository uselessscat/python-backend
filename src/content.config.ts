import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  guide: defineCollection({
    loader: glob({
      pattern: "**/*.{md,mdx}",
      base: "./src/content/guide",
    }),
    schema: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      order: z.number().optional(),
      slug: z.string().optional(),
      draft: z.boolean().default(false),
    }),
  }),
};
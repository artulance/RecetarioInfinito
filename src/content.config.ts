import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recetas = defineCollection({
	// Load Markdown and MDX files in the `src/content/recetas/` directory.
	loader: glob({ base: './src/content/recetas', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			categories: z.array(z.string()).optional(),
			tags: z.array(z.string()).optional(),
			difficulty: z.string().optional(),
			time: z.string().optional(),
			servings: z.number().optional(),
			cover: z.string().optional(),
		}),
});

const solicitadas = defineCollection({
	// Load Markdown and MDX files in the `src/content/solicitadas/` directory.
	loader: glob({ base: './src/content/solicitadas', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

export const collections = { recetas, solicitadas };

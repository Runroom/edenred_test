import { z } from 'zod'

export const searchForm = z.object({
  searchTerm: z.string(),
})

export type SearchForm = z.infer<typeof searchForm>

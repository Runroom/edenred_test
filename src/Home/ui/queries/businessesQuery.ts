import { queryOptions } from '@tanstack/react-query'

import { findBusinesses } from '@/Home/application/findBusinesses'
import { createInMemoryBusinessRepository } from '@/Home/infrastructure/InMemoryBusinessRepository'

export const findBusinessesQuery = (searchTerm: string | null) => {
  return queryOptions({
    queryKey: ['businesses', searchTerm],
    queryFn: () => findBusinesses(createInMemoryBusinessRepository(), searchTerm),
  })
}

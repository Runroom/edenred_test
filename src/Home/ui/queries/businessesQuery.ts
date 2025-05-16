import { queryOptions } from '@tanstack/react-query'

import { getBusinesses } from '@/Home/application/getBusinesses'
import { createInMemoryBusinessRepository } from '@/Home/infrastructure/InMemoryBusinessRepository'

export const getBusinessesQuery = () => {
  return queryOptions({
    queryKey: ['businesses'],
    queryFn: () => getBusinesses(createInMemoryBusinessRepository()),
  })
}

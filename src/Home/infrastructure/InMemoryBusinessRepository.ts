import type { BusinessRepository } from '@/Home/domain/BusinessRepository'
import { businesses } from '@/Home/infrastructure/data/businesses'

export class InMemoryBusinessRepository implements BusinessRepository {
  findBusinesses = (searchTerm: string | null) => {
    return Promise.resolve(
      businesses.filter(business =>
        business.name.toLowerCase().includes(searchTerm?.toLowerCase() || ''),
      ),
    )
  }
}

export const createInMemoryBusinessRepository = () => {
  return new InMemoryBusinessRepository()
}

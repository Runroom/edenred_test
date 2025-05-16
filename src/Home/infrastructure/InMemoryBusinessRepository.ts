import type { BusinessRepository } from '@/Home/domain/BusinessRepository'
import { businesses } from '@/Home/infrastructure/data/businesses'

export class InMemoryBusinessRepository implements BusinessRepository {
  getBusinesses = () => Promise.resolve(businesses)
}

export const createInMemoryBusinessRepository = () => {
  return new InMemoryBusinessRepository()
}

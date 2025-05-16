import type { Business } from '@/Home/domain/business'

export interface BusinessRepository {
  findBusinesses: (searchTerm: string | null) => Promise<Business[]>
}

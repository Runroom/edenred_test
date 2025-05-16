import type { Business } from '@/Home/domain/business'

export interface BusinessRepository {
  getBusinesses: () => Promise<Business[]>
}

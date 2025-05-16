import type { BusinessRepository } from '@/Home/domain/BusinessRepository'

export const findBusinesses = (
  businessRepository: BusinessRepository,
  searchTerm: string | null,
) => {
  return businessRepository.findBusinesses(searchTerm)
}

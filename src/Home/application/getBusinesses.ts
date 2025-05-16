import type { BusinessRepository } from '@/Home/domain/BusinessRepository'

export const getBusinesses = (businessRepository: BusinessRepository) => {
  return businessRepository.getBusinesses()
}

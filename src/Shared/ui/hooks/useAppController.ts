import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { type UseFormReturn, useForm } from 'react-hook-form'

import type { Business } from '@/Home/domain/business'
import { searchForm } from '@/Home/domain/searchForm'
import type { SearchForm } from '@/Home/domain/searchForm'
import { findBusinessesQuery } from '@/Home/ui/queries/businessesQuery'

export interface IUseAppController {
  businesses: Business[]
  selectedBusiness: Business | null
  selectBusiness: (business: Business | null) => void
  isSidebarOpen: boolean
  toggleSidebar: () => void
  form: UseFormReturn<SearchForm>
  searchTerm: string
}

export const useAppController = (): IUseAppController => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(searchForm),
    defaultValues: {
      searchTerm: '',
    },
  })
  const searchTerm = form.watch('searchTerm')
  const { data: businesses } = useQuery(findBusinessesQuery(searchTerm))
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return {
    businesses: businesses ?? [],
    selectedBusiness,
    selectBusiness: setSelectedBusiness,
    isSidebarOpen,
    toggleSidebar,
    form,
    searchTerm,
  }
}

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
  isSidebarOpen: boolean
  toggleSidebar: () => void
  form: UseFormReturn<SearchForm>
}

export const useAppController = (): IUseAppController => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(searchForm),
    defaultValues: {
      searchTerm: '',
    },
  })
  const { data: businesses } = useQuery(findBusinessesQuery(form.watch('searchTerm')))
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return {
    businesses: businesses ?? [],
    isSidebarOpen,
    toggleSidebar,
    form,
  }
}

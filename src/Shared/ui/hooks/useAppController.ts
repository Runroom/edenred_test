import { useState } from 'react'

export interface IUseAppController {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export const useAppController = (): IUseAppController => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return {
    isSidebarOpen,
    toggleSidebar,
  }
}

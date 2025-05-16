import { Menu, X } from 'lucide-react'
import { type PropsWithChildren } from 'react'

import { useApp } from '@/Shared/ui/context/AppContext'
import { Button } from '@/components/ui/button'

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { toggleSidebar, isSidebarOpen } = useApp()

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="border-border bg-background flex items-center justify-between border-b px-4 py-3 md:hidden">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <h1 className="text-lg font-semibold">Buscador de Comercios</h1>
        <div className="w-9"></div>
      </div>
      <div className="flex flex-1 overflow-hidden">{children}</div>
    </div>
  )
}

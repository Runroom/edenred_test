import type { Business } from '@/Home/domain/business'
import BusinessListItem from '@/components/BusinessListItem'
import { SearchBar } from '@/components/SearchBar'

interface AppSidebarProps {
  isSidebarOpen: boolean
  handleSearch: (query: string) => void
  handleSelectBusiness: (business: Business) => void
  filteredBusinesses: Business[]
  selectedBusiness: Business | undefined
  searchQuery: string
}

export const AppSidebar = ({
  isSidebarOpen,
  handleSearch,
  handleSelectBusiness,
  filteredBusinesses,
  selectedBusiness,
  searchQuery,
}: AppSidebarProps) => {
  return (
    <div
      className={` ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} border-border bg-background absolute z-10 flex h-[calc(100%-56px)] w-full flex-col border-r transition-transform duration-300 ease-in-out md:relative md:h-full md:w-96 md:translate-x-0`}
    >
      <div className="border-border border-b p-4">
        <h1 className="mb-4 hidden text-xl font-semibold md:block">
          Buscador de Comercios
        </h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="border-border border-b px-4 py-3">
        <p className="text-muted-foreground text-sm">
          {filteredBusinesses.length}{' '}
          {filteredBusinesses.length === 1 ? 'resultado' : 'resultados'}
          {searchQuery && ` para "${searchQuery}"`}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredBusinesses.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center p-4 text-center">
            <p className="text-muted-foreground text-lg">No se encontraron comercios</p>
            <p className="text-muted-foreground mt-2 text-sm">
              Intenta con otra búsqueda o amplía los términos
            </p>
          </div>
        ) : (
          filteredBusinesses.map(business => (
            <BusinessListItem
              key={business.id}
              business={business}
              isSelected={selectedBusiness?.id === business.id}
              onClick={() => handleSelectBusiness(business)}
            />
          ))
        )}
      </div>
    </div>
  )
}

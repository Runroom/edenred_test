import { useTranslation } from 'react-i18next'

import { useApp } from '@/Shared/ui/context/AppContext'
import { BusinessListItem } from '@/components/BusinessListItem'
import { SearchBar } from '@/components/SearchBar'

export const AppSidebar = () => {
  const { isSidebarOpen, businesses, selectBusiness, selectedBusiness, searchTerm } =
    useApp()
  const { t } = useTranslation()

  return (
    <div
      className={` ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} border-border bg-background absolute z-10 flex h-[calc(100%-56px)] w-full flex-col border-r transition-transform duration-300 ease-in-out md:relative md:h-full md:w-96 md:translate-x-0`}
    >
      <div className="border-border border-b p-4">
        <h1 className="mb-4 hidden text-xl font-semibold md:block">
          {t('sidebar.title')}
        </h1>
        <SearchBar />
      </div>

      <div className="border-border border-b px-4 py-3">
        <p className="text-muted-foreground text-sm" data-testid="business-count">
          {businesses.length}{' '}
          {businesses.length === 1 ? t('sidebar.result') : t('sidebar.results')}
          {searchTerm && ` ${t('sidebar.for')} "${searchTerm}"`}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {businesses.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center p-4 text-center">
            <p className="text-muted-foreground text-lg">{t('sidebar.noResults')}</p>
            <p className="text-muted-foreground mt-2 text-sm">
              {t('sidebar.noResultsDescription')}
            </p>
          </div>
        ) : (
          businesses.map(business => (
            <BusinessListItem
              key={business.id}
              business={business}
              isSelected={selectedBusiness?.id === business.id}
              onClick={() => selectBusiness(business)}
            />
          ))
        )}
      </div>
    </div>
  )
}

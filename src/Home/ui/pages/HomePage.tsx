import { useQuery } from '@tanstack/react-query'
import { APIProvider } from '@vis.gl/react-google-maps'

import { getBusinessesQuery } from '@/Home/ui/queries/businessesQuery'
import { AppWrapper } from '@/components/AppContainer'
import { AppLayout } from '@/components/AppLayout'
import { AppSidebar } from '@/components/AppSidebar'
import BusinessDetail from '@/components/BusinessDetail'
import { MapContainer } from '@/components/MapContainer'

export function Component() {
  const { data: businesses } = useQuery(getBusinessesQuery())

  const selectedBusiness = businesses?.[0]
  const isDetailOpen = true

  if (!businesses) {
    return <div>Loading...</div>
  }

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <AppLayout>
        <AppSidebar
          handleSearch={() => {}}
          handleSelectBusiness={() => {}}
          filteredBusinesses={businesses}
          selectedBusiness={undefined}
          searchQuery={''}
        />
        <AppWrapper>
          <MapContainer businesses={businesses} />
          {selectedBusiness && isDetailOpen && (
            <div className="absolute right-0 bottom-0 left-0 z-20 max-h-[70vh] p-4 md:right-4 md:bottom-4 md:left-4 md:max-w-md">
              <BusinessDetail business={selectedBusiness} onClose={() => {}} />
            </div>
          )}
        </AppWrapper>
      </AppLayout>
    </APIProvider>
  )
}

Component.displayName = 'HomePage'

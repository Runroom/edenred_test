import { APIProvider } from '@vis.gl/react-google-maps'

import { useApp } from '@/Shared/ui/context/AppContext'
import { AppWrapper } from '@/components/AppContainer'
import { AppLayout } from '@/components/AppLayout'
import { AppSidebar } from '@/components/AppSidebar'
import BusinessDetail from '@/components/BusinessDetail'
import { MapContainer } from '@/components/MapContainer'

export function Component() {
  const { selectedBusiness } = useApp()

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <AppLayout>
        <AppSidebar />
        <AppWrapper>
          <MapContainer />
          {selectedBusiness && <BusinessDetail business={selectedBusiness} />}
        </AppWrapper>
      </AppLayout>
    </APIProvider>
  )
}

Component.displayName = 'HomePage'

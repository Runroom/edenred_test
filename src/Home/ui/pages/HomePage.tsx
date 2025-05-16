import { useQuery } from '@tanstack/react-query'
import { APIProvider } from '@vis.gl/react-google-maps'

import { getBusinessesQuery } from '@/Home/ui/queries/businessesQuery'
import { AppLayout } from '@/components/AppLayout'
import { AppSidebar } from '@/components/AppSidebar'
import { MapContainer } from '@/components/MapContainer'

export function Component() {
  const { data: _businesses } = useQuery(getBusinessesQuery())

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <AppLayout>
        <AppSidebar isSidebarOpen={true} />
        <MapContainer />
      </AppLayout>
    </APIProvider>
  )
}

Component.displayName = 'HomePage'

import { APIProvider, Map } from '@vis.gl/react-google-maps'

import { cn } from '@/lib/utils'

const MEXICO_CITY_CENTER = { lat: 19.4326, lng: -99.1719 }

export function Component() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        className={cn('aspect-video w-full')}
        defaultZoom={12}
        defaultCenter={MEXICO_CITY_CENTER}
        gestureHandling="greedy"
        clickableIcons={false}
        disableDefaultUI={true}
      />
    </APIProvider>
  )
}

Component.displayName = 'HomePage'

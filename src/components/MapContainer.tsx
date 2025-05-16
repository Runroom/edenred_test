import { Map } from '@vis.gl/react-google-maps'

import { cn } from '@/lib/utils'

const MEXICO_CITY_CENTER = { lat: 19.4326, lng: -99.1719 }

export const MapContainer = () => {
  return (
    <div className="relative flex-1">
      <Map
        className={cn('aspect-video w-full')}
        defaultZoom={12}
        defaultCenter={MEXICO_CITY_CENTER}
        gestureHandling="greedy"
        clickableIcons={false}
        disableDefaultUI={true}
      />
    </div>
  )
}

import { Map, Marker } from '@vis.gl/react-google-maps'

import type { Business } from '@/Home/domain/business'
import { cn } from '@/lib/utils'

const MEXICO_CITY_CENTER = { lat: 19.4326, lng: -99.1719 }

export const MapContainer = ({ businesses }: { businesses: Business[] }) => {
  return (
    <div className="h-full w-full">
      <Map
        className={cn('h-full w-full')}
        defaultZoom={12}
        defaultCenter={MEXICO_CITY_CENTER}
        gestureHandling="greedy"
        clickableIcons={false}
        disableDefaultUI={true}
      >
        {businesses.map(business => (
          <Marker
            key={business.id}
            position={business.coordinates}
            icon={{
              url:
                'data:image/svg+xml;charset=UTF-8,' +
                encodeURIComponent(
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#3b82f6" stroke="#ffffff" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>',
                ),
            }}
          />
        ))}
      </Map>
    </div>
  )
}

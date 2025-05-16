import { Map, Marker, useMap } from '@vis.gl/react-google-maps'
import { useCallback, useEffect } from 'react'

import { useApp } from '@/Shared/ui/context/AppContext'
import { cn } from '@/lib/utils'

const SANTIAGO_CENTER = { lat: -33.45694, lng: -70.64827 }

export const MapContainer = () => {
  const mapRef = useMap()
  const { businesses, selectBusiness } = useApp()

  const fitBounds = useCallback(() => {
    if (!mapRef || businesses.length === 0) return

    const bounds = new google.maps.LatLngBounds()
    businesses.forEach(business => {
      bounds.extend(business.coordinates)
    })

    mapRef.fitBounds(bounds, 100)
    if (businesses.length === 1) {
      mapRef.setZoom(15)
    }
  }, [businesses, mapRef])

  useEffect(() => {
    if (!mapRef) return

    if (businesses.length === 0) {
      mapRef.panTo(SANTIAGO_CENTER)
      mapRef.setZoom(12)

      return
    }

    if (businesses.length === 1) {
      mapRef.panTo(businesses[0].coordinates)
      mapRef.setZoom(15)

      return
    }

    fitBounds()
  }, [businesses, fitBounds, mapRef])

  return (
    <div className="h-full w-full">
      <Map
        className={cn('h-full w-full')}
        defaultZoom={12}
        defaultCenter={SANTIAGO_CENTER}
        gestureHandling="greedy"
        clickableIcons={false}
        disableDefaultUI={true}
      >
        {businesses.map(business => (
          <Marker
            key={business.id}
            position={business.coordinates}
            onClick={() => selectBusiness(business)}
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

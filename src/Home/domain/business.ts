export interface Coordinates {
  lat: number
  lng: number
}

export interface Business {
  id: string
  name: string
  type: string
  address: string
  coordinates: Coordinates
  rating: number
  hours: string
  image: string
  phone: string
  website?: string
}

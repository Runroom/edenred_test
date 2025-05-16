import { StarIcon } from 'lucide-react'
import React from 'react'

import type { Business } from '@/Home/domain/business'

interface BusinessListItemProps {
  business: Business
  isSelected: boolean
  onClick: () => void
}

const BusinessListItem: React.FC<BusinessListItemProps> = ({
  business,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`border-border hover:bg-secondary/50 cursor-pointer border-b p-4 transition-colors ${isSelected ? 'bg-secondary' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="bg-muted h-16 w-16 flex-shrink-0 overflow-hidden rounded">
          <img
            src={business.image}
            alt={business.name}
            className="h-full w-full object-cover"
            onError={e => {
              e.currentTarget.src = 'https://placehold.co/600x400?text=Sin+imagen'
            }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-medium">{business.name}</h3>
          <div className="mt-1 flex items-center gap-1 text-sm">
            <span>{business.rating.toFixed(1)}</span>
            <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>
          <p className="text-muted-foreground truncate text-sm">{business.address}</p>
        </div>
      </div>
    </div>
  )
}

export default BusinessListItem

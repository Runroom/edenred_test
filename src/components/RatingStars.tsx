import clsx from 'clsx'
import { StarIcon } from 'lucide-react'

export const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, idx) => {
      const i = idx + 1
      let styleClass: string
      if (i <= Math.floor(rating)) {
        styleClass = 'text-yellow-500 fill-yellow-500'
      } else if (i - 0.5 <= rating) {
        styleClass = 'text-yellow-500 fill-yellow-500 opacity-50'
      } else {
        styleClass = 'text-gray-300'
      }
      return <StarIcon key={i} className={clsx('h-4 w-4', styleClass)} />
    })}
    <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
  </div>
)

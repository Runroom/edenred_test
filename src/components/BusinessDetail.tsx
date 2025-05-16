import clsx from 'clsx'
import { Clock, ExternalLink, Phone, StarIcon, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { type Business } from '@/Home/domain/business'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface BusinessDetailProps {
  business: Business
  onClose: () => void
}

const RatingStars = ({ rating }: { rating: number }) => (
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

const BusinessDetail = ({ business, onClose }: BusinessDetailProps) => {
  const { t } = useTranslation()
  const { name, image, type, rating, address, hours, phone, website } = business

  const placeholder = 'https://placehold.co/600x400?text=Sin+imagen'

  const details = [
    {
      icon: Clock,
      label: t('business.hours', 'Horario'),
      content: hours,
    },
    {
      icon: Phone,
      label: t('business.phone', 'Teléfono'),
      content: phone,
    },
    website && {
      icon: ExternalLink,
      label: t('business.website', 'Sitio web'),
      content: (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="block truncate text-sm text-blue-600 hover:underline"
        >
          {website}
        </a>
      ),
    },
  ].filter(Boolean) as {
    icon: React.ComponentType<{ className?: string }>
    label: string
    content: React.ReactNode
  }[]

  return (
    <Card className="relative w-full max-w-md py-0 shadow-xl">
      <button
        onClick={onClose}
        aria-label={t('common.close', 'Cerrar')}
        className="bg-background/80 hover:bg-background absolute top-3 right-3 rounded-full p-2 transition-colors"
      >
        <X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>

      <div className="overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover"
          onError={e => {
            e.currentTarget.src = placeholder
          }}
        />
      </div>

      <CardContent className="p-4">
        <h2 className="text-2xl font-semibold">{name}</h2>

        <div className="mt-2 flex items-center gap-2">
          <Badge variant="outline" className="bg-background/50">
            {type}
          </Badge>
          <RatingStars rating={rating} />
        </div>

        <p className="text-muted-foreground mt-2 text-sm">{address}</p>

        <div className="mt-4 space-y-4">
          {details.map(({ icon: Icon, label, content }) => (
            <div key={label}>
              <h4 className="flex items-center gap-1 text-sm font-medium">
                <Icon className="h-3 w-3 text-gray-500" />
                {label}:
              </h4>
              <div className="text-sm">{content}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default BusinessDetail

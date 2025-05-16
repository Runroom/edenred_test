import { Clock, ExternalLink, Phone, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { type Business } from '@/Home/domain/business'
import { useApp } from '@/Shared/ui/context/AppContext'
import { RatingStars } from '@/components/RatingStars'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface BusinessDetailProps {
  business: Business
}

export const BusinessDetail = ({ business }: BusinessDetailProps) => {
  const { t } = useTranslation()
  const { selectBusiness } = useApp()

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
    <div className="absolute right-0 bottom-0 left-0 z-20 max-h-[70vh] p-4 md:right-4 md:bottom-4 md:left-4 md:max-w-md">
      <Card className="relative w-full max-w-md py-0 shadow-xl">
        <button
          onClick={() => selectBusiness(null)}
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
    </div>
  )
}

import type { RouteObject } from 'react-router'

import { GlobalLoading } from '@/components/GlobalLoading'

import { HOME } from '.'

export const routes: RouteObject[] = [
  {
    path: HOME,
    HydrateFallback: GlobalLoading,
    lazy: () => import('../Home/ui/pages/HomePage'),
  },
]

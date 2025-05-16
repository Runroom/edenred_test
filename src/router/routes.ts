import type { RouteObject } from 'react-router'

import { HOME } from '.'

export const routes: RouteObject[] = [
  {
    path: HOME,
    lazy: () => import('../pages/HomePage'),
  },
]

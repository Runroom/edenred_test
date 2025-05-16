import type { PropsWithChildren } from 'react'

import { createGenericContext } from '@/Shared/ui/createGenericContext'
import {
  type IUseAppController,
  useAppController,
} from '@/Shared/ui/hooks/useAppController'

type Context = IUseAppController

type Props = PropsWithChildren

const [useApp, StateContextProvider] = createGenericContext<Context>()

const AppProvider = ({ children }: Props) => {
  const controller = useAppController()
  return <StateContextProvider value={{ ...controller }}>{children}</StateContextProvider>
}

export { AppProvider, useApp }

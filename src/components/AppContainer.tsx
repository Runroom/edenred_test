import type { PropsWithChildren } from 'react'

export const AppWrapper = ({ children }: PropsWithChildren) => {
  return <div className="relative flex-1">{children}</div>
}

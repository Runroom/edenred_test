import { Loader } from 'lucide-react'

export const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
      <Loader className="h-12 w-12 animate-spin text-white" />
    </div>
  )
}

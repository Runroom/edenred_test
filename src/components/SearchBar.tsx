import { Search } from 'lucide-react'
import { type ChangeEvent, useState } from 'react'

import { Input } from '@/components/ui/input'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export const SearchBar = ({
  onSearch,
  placeholder = 'Buscar comercios...',
}: SearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  return (
    <div className="relative flex w-full">
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full py-2 pr-10 pl-4"
      />
      <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform">
        <Search className="text-muted-foreground h-4 w-4" />
      </div>
    </div>
  )
}

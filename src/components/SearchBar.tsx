import { Search } from 'lucide-react'

import { useApp } from '@/Shared/ui/context/AppContext'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface SearchBarProps {
  placeholder?: string
}

export const SearchBar = ({ placeholder = 'Buscar comercios...' }: SearchBarProps) => {
  const { form } = useApp()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="relative flex w-full">
        <FormField
          control={form.control}
          name="searchTerm"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  type="text"
                  placeholder={placeholder}
                  className="w-full py-2 pr-10 pl-4"
                  {...field}
                />
              </FormControl>
              <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform">
                <Search className="text-muted-foreground h-4 w-4" />
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

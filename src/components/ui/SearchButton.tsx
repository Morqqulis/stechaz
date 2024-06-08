'use client'
import { Button } from '@nextui-org/react'
import { Search } from 'lucide-react'

interface ISearchButton {
    className?: string
}

const SearchButton: React.FC<ISearchButton> = ({ className }: ISearchButton): JSX.Element => {
    const handleSearch = () => document.documentElement.classList.toggle('search-active')
    return (
        <Button className={`group/search min-w-10 p-0 ${className}`} type="button" variant="light" aria-label="Search button" title="Search button" onClick={handleSearch}>
            <Search className="text-foreground transition-all duration-300 group-hover/search:text-blue-400" size={24} />
        </Button>
    )
}

export default SearchButton

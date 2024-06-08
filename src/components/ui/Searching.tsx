'use client'
import { products } from '@/data/fakeData'
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete'
import { Search } from 'lucide-react'

interface ISearch {
    className?: string
}

const Searching: React.FC<ISearch> = ({ className }: ISearch): JSX.Element => {
    return (
        <Autocomplete
            className={`${className}`}
            classNames={{ base: `w-full `, listboxWrapper: 'w-full' }}
            size="lg"
            allowsCustomValue
            // label="Search product"
            placeholder="Search product"
            aria-label="Search product"
            variant="faded"
            selectorIcon={<Search className="text-foreground" size={24} />}
            defaultItems={products['smart-kilidler']}
        >
            {item => (
                <AutocompleteItem key={item.id} textValue={item.name}>
                    <span className="font-semibold duration-300 hover:text-blue-400">{item.name}</span>
                </AutocompleteItem>
            )}
        </Autocomplete>
    )
}

export default Searching

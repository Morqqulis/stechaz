'use client'
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/dropdown'
import { Button } from '@nextui-org/react'
import { ShoppingCart } from 'lucide-react'
interface IBasket {}

const Basket: React.FC = (): JSX.Element => {
    return (
        <Dropdown>
            <DropdownTrigger type="button" title="Basket" aria-label="Basket">
                <Button className="group/basket" isIconOnly type="button" aria-label="Basket" variant="light" title="Basket">
                    <ShoppingCart className="text-foreground transition-all duration-300 group-hover/basket:text-blue-400" size={24} />
                </Button>
            </DropdownTrigger>
            <DropdownMenu>
                <DropdownSection title="Section 1">
                    <DropdownItem>Item 1</DropdownItem>
                    <DropdownItem>Item 2</DropdownItem>
                    <DropdownItem>Item 3</DropdownItem>
                    <DropdownItem>Item 4</DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}

export default Basket

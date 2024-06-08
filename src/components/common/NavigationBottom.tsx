import { categories } from '@/data/categories'
import { Link, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import Searching from '@ui/Searching'

interface INavigationBottom {}

const NavigationBottom: React.FC = (): JSX.Element => {
    return (
        <Navbar maxWidth="2xl" className="mt-10 hidden items-center justify-center md:flex">
            <NavbarContent className="flex-wrap gap-2" justify="center">
                {categories.map(item => (
                    <NavbarItem key={item.id}>
                        <Link className="text-medium duration-300 hover:text-blue-400 llg:px-1 llg:text-sm" underline={'active' || 'focus' || 'hover'} color="foreground" size="md" isBlock href={item.url} aria-label={item.ariaLabel} title={item.title}>
                            {item.title}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent>
                <NavbarItem>
                    <Searching />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default NavigationBottom

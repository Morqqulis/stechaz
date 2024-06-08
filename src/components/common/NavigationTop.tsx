'use client'
interface INavigation {}
import { Button, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, ScrollShadow } from '@nextui-org/react'

import { categories } from '@/data/categories'
import Basket from '@ui/Basket'
import Logo from '@ui/Logo'
import { Phone, Home, MessageCircleQuestion, Store, SearchSlash, ExternalLink, ChevronDown, Search } from 'lucide-react'
import { navigation } from '@/data/navigation'
import { usePathname } from 'next/navigation'
import Searching from '@ui/Searching'
import { memo, useEffect } from 'react'
import SearchButton from '@ui/SearchButton'

const NavigationTop: React.FC = (): JSX.Element => {
    const pathname = usePathname()

    useEffect(() => {
        document.addEventListener('resize', e => window.innerWidth < 768 && document.documentElement.classList.remove('search-active'))
    })

    return (
        <Navbar className="" height={'99px'} classNames={{ wrapper: '' }} isBordered maxWidth="xl" shouldHideOnScroll>
            <NavbarContent justify="start">
                <NavbarBrand className="">
                    <Logo />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="w-full gap-1 mmd:hidden" justify="center">
                {navigation.map(item =>
                    item.id !== 2 ? (
                        <NavbarItem className="last:sm:hidden last:lg:block" key={item.id}>
                            <Button
                                className="text-md "
                                as={Link}
                                href={item.url}
                                startContent={
                                    item.id === 1 ? (
                                        <Home className={pathname === item.url ? 'text-primary-400' : 'text-foreground'} size={16} />
                                    ) : item.id === 2 ? (
                                        <Store className={pathname === item.url ? 'text-primary-400' : 'text-foreground'} size={16} />
                                    ) : item.id === 3 ? (
                                        <SearchSlash className={pathname === item.url ? 'text-primary-400' : 'text-foreground'} size={16} />
                                    ) : (
                                        <MessageCircleQuestion className={pathname === item.url ? 'text-primary-400' : 'text-foreground'} size={16} />
                                    )
                                }
                                variant="light"
                                color={pathname === item.url ? 'primary' : 'default'}
                                size="md"
                                underline={'focus' || 'hover' || 'active'}
                                isBlock
                                aria-label={item.label}
                                title={item.label}
                                type="button"
                            >
                                {item.label}
                            </Button>
                        </NavbarItem>
                    ) : (
                        <Dropdown key={item.id}>
                            <NavbarItem>
                                <DropdownTrigger title={item.label} type="button">
                                    <Button
                                        className="text-md llg:px-1.5"
                                        startContent={<Store size={16} />}
                                        endContent={<ChevronDown size={16} />}
                                        variant="light"
                                        color={pathname === item.url ? 'primary' : 'default'}
                                        size="md"
                                        aria-label={item.label}
                                        title={item.label}
                                        type="button"
                                    >
                                        {item.label}
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu className="overflow-auto" items={categories} aria-label="Categories" variant="faded" color="primary">
                                {category => (
                                    <DropdownItem className="py-4" key={category.id} href={category.url} endContent={<ExternalLink size={16} />} variant="shadow" aria-label={category.ariaLabel}>
                                        {category.title}
                                    </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                    )
                )}
            </NavbarContent>

            {/* <Searching className="hidden sm:flex md:hidden" /> */}

            <NavbarContent className="gap-1 md:gap-2" justify="end">
                <NavbarItem className="">
                    <SearchButton className="" />
                </NavbarItem>
                <NavbarItem className="">
                    <Button className="group/phone" variant="light" href="tel:+994555555555" as={Link} aria-label="Call button" color="default" isIconOnly title="Call" type="button">
                        <Phone className="text-foreground transition-all duration-300 group-hover/phone:text-blue-400" size={24} />
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Basket />
                </NavbarItem>
                <NavbarItem className="md:hidden">
                    <NavbarMenuToggle className="p-5" aria-label="Menu trigger button" title="Menu trigger button" type="button" />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="gap-4 py-10 dark">
                <NavbarMenuItem className="text-center text-2xl text-foreground">
                    Səhifələr <Divider className="my-2" />
                </NavbarMenuItem>
                {navigation.map(item => (
                    <NavbarMenuItem key={item.id}>
                        <Button className="border-foreground-200 w-full bg-background text-lg" as={Link} variant="faded" size="lg" underline={'focus' || 'hover'} isBlock href={item.url} aria-label={item.label} title={item.label}>
                            {item.label}
                        </Button>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem className="text-center text-2xl text-foreground">
                    Katalog
                    <Divider className="my-2" />
                </NavbarMenuItem>
                {categories?.map(item => (
                    <NavbarMenuItem key={item.id}>
                        <Button className="w-full border-warning-400 text-lg" as={Link} variant="faded" size="lg" underline={'focus' || 'hover'} isBlock href={item.url} aria-label={item.ariaLabel} title={item.title}>
                            {item.title}
                        </Button>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default memo(NavigationTop)

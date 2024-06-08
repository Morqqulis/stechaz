'use client'

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs'
import { Box, Home } from 'lucide-react'

import { ReceiptText } from 'lucide-react'

interface ICrumbs {
    params: { slug?: string; name?: string }
    children?: React.ReactNode | React.ReactNode[]
}

const Crumbs: React.FC<ICrumbs> = ({ params: { slug, name } }: ICrumbs): JSX.Element => {
    const iconClasses = `group-hover/crumb:text-danger-400 text-inherit transition-all font-medium`
    return (
        <Breadcrumbs
            separator="/"
            itemClasses={{
                item: `group/crumb capitalize transition-all font-medium hover:text-danger-400 last:hover:text-foreground`,
                separator: 'text-gray-400 transition-all duration-300 font-medium group-hover/crumb:text-primary-400',
            }}
            aria-label="breadcrumbs"
            className="text-foreground"
        >
            <BreadcrumbItem startContent={<Home className={`${iconClasses} `} size={16} />} href="/" isCurrent={slug === '/'} aria-label="Home page">
                Home
            </BreadcrumbItem>
            {slug && (
                <BreadcrumbItem startContent={<Box className={`${iconClasses}`} size={16} />} href={`/${slug}`} isCurrent={name ? slug === name : slug === slug} aria-label={`${slug} page`}>
                    {slug?.split('-').join(' ')}
                </BreadcrumbItem>
            )}
            {name && (
                <BreadcrumbItem href={`/${name}`} isCurrent={name === name} aria-label={`${name} page`} startContent={<ReceiptText className={`${iconClasses}`} size={16} />}>
                    {name}
                </BreadcrumbItem>
            )}
        </Breadcrumbs>
    )
}

export default Crumbs

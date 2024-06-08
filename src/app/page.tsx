import HeroHome from '@layout/HeroHome'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Stech.az - Ana səhifəsi',
    description: 'Smart technology',
}

export default function Home() {
    return (
        <main className="bg-background text-foreground light">
            <HeroHome />
        </main>
    )
}

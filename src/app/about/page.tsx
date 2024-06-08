import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Stech.az - Haqqımızda',
    description: '"Haqqımızda" səhifəsi.',
}

interface Ipage {}

const AboutPage: React.FC = (): JSX.Element => {
    return <main className="bg-background text-foreground light">About page</main>
}

export default AboutPage

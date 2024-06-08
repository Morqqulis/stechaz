import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Stech.az - Qaydalar',
    description: 'Qaydalar səhifəsi.',
}

interface Ipage {}

const FAQPage: React.FC = (): JSX.Element => {
    return <main className="bg-background text-foreground light">FAQPage</main>
}

export default FAQPage

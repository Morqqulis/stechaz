import { convertString } from '@/utils/utils'
import type { Metadata, ResolvingMetadata } from 'next'

import Crumbs from '@ui/Crumbs'
import Products from '@layout/Products'

export async function generateMetadata({ params }: { params: { slug: string } }, parent: ResolvingMetadata): Promise<Metadata> {
    const title = convertString(params.slug)
    const description = convertString(params.slug) + `- Category`

    return {
        title,
        description,
    }
}

interface ICategory {
    params: { slug: string; name: string }
}
export default function Category({ params }: ICategory): JSX.Element {
    return (
        <main className="bg-background text-foreground light">
            <section className="">
                <div className="container">
                    <Crumbs params={params} />
                    <h1 className="mb-10 mt-10 text-balance text-center text-2xl font-bold capitalize sm:text-3xl md:text-4xl lg:text-5xl">{params.slug.split('-').join(' ')}</h1>
                    <Products params={params} />
                </div>
            </section>
        </main>
    )
}

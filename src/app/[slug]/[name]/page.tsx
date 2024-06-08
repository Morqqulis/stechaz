import { convertString } from '@/utils/utils'
import Crumbs from '@ui/Crumbs'
import type { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string; name: string } }, parent: ResolvingMetadata): Promise<Metadata> {
    const title = convertString(params.name)
    const description = convertString(params.name) + `- Category`

    return {
        title,
        description,
    }
}
interface IDetailPage {
    children?: React.ReactNode | React.ReactNode[]
    params: { slug: string; name: string }
}
const DetailPage: React.FC<IDetailPage> = ({ params: { name, slug }, children }: IDetailPage): JSX.Element => {
    return (
        <main className="bg-background text-foreground light">
            <section>
                <div className="container">
                    <Crumbs params={{ slug, name }} />
                    <h1 className="mt-5 text-center text-4xl font-semibold">{name}</h1>
                    {children}
                </div>
            </section>
        </main>
    )
}

export default DetailPage

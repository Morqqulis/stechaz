import { products } from '@/data/fakeData'
import { Card, CardBody, CardFooter, CardHeader, Image, Link, Pagination, Tooltip } from '@nextui-org/react'
import NextImage from 'next/image'
import { memo } from 'react'

interface IProducts {
    params: { slug: string; name: string }
}

const Products: React.FC<IProducts> = ({ params }: IProducts): JSX.Element => {
    return (
        <>
            <div className="mb-10 grid justify-between gap-8 rounded-xl  bg-background px-2.5 py-5 ssm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" security="true">
                {products[params?.slug]?.map(product => (
                    <Tooltip content={`${product.name} - ${product.price} AZN`} color="secondary" size="md" shadow="lg" key={product.id}>
                        <Card
                            className="group/card animate-appearance-in border border-black "
                            isHoverable
                            isPressable
                            fullWidth
                            isBlurred
                            shadow="lg"
                            href={`/${params.slug}/${product.name.split(' ').join('-')}`}
                            as={Link}
                            itemType="product"
                            type="button"
                            aria-label="product card"
                        >
                            <CardHeader className="font-semibold">{product.name}</CardHeader>
                            <CardBody className="grid gap-2.5 text-center">
                                <Image className="h-full max-h-[350px] min-h-[240px] w-full object-cover" as={NextImage} loading="eager" isBlurred isZoomed srcSet={product.image} src={product.image} alt={product.name} shadow="lg" radius="lg" width="900" height="900" priority />
                            </CardBody>
                            <CardFooter slot="footer">
                                <span className="font-semibold text-danger-500">{product.price} AZN</span>
                            </CardFooter>
                        </Card>
                    </Tooltip>
                ))}
            </div>
            <Pagination showControls total={10} initialPage={1} />
        </>
    )
}

export default memo(Products)

'use client'
import { products } from '@/data/fakeData'
import { Card, CardBody, CardFooter, CardHeader, Divider, Image } from '@nextui-org/react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface ICarousel {}

const Carousel: React.FC = (): JSX.Element => {
    let mixedProducts

    for (const prod in products) {
        const element = products[prod]
        mixedProducts = element.filter(p => p.id % 2 === 0)
    }

    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
            watchDrag: true,
            watchResize: true,
            watchSlides: true,
            // watchSlides: true,
            align: 'center',
            // slidesToScroll: 4,
            // skipSnaps: true,
            // containScroll: 'keepSnaps',
        },
        [
            Autoplay({
                delay: 3000,
                stopOnInteraction: false,
            }),
        ]
    )

    return (
        <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex justify-between py-10">
                {mixedProducts?.map(product => (
                    <div className="embla__slide mr-5 flex w-full shrink-0 flex-grow-0 basis-[380px] justify-center" key={product.id}>
                        <Card className="flex h-[400px] w-full flex-col">
                            <CardHeader>
                                <h2>{product.name}</h2>
                                <p>{product.price}</p>
                            </CardHeader>
                            <Divider />
                            <CardBody className="overflow-hidden">
                                <Image className="h-auto max-h-[300px] w-full max-w-full object-scale-down" src={product.image} alt={product.name} width={'100%'} height={'auto'} />
                            </CardBody>
                            <CardFooter>
                                <p>{product.category}</p>
                                <p>{product.rating}</p>
                                <p>{product.count}</p>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel

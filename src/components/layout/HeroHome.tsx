import Carousel from '@ui/Carousel'

interface IHeroHome {}

const HeroHome: React.FC = (): JSX.Element => {
    return (
        <section>
            <div className="container">
                <h1 className="text-center text-4xl font-bold">Stech.az</h1>
                <p className="text-center text-2xl">Smart technology</p>
                <Carousel />
            </div>
        </section>
    )
}

export default HeroHome

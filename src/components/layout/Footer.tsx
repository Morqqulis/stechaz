import { Link } from '@nextui-org/react'

interface IFooter {}

const Footer: React.FC = (): JSX.Element => {
    return (
        <footer className="bg-background py-4 sm:text-lg md:py-8 md:text-xl">
            <div className="container">
                <div className=" flex flex-wrap items-center justify-center gap-2 text-balance text-center font-semibold">
                    © 2022 Bütün hüquqlar qorunur.
                    <ul className="flex flex-wrap items-center justify-center gap-2">
                        <li className="flex gap-1">
                            <Link href="/" aria-label="Go to homepage">
                                «Stech.az»
                            </Link>
                        </li>
                        <li className="flex gap-1">
                            Mobil :
                            <Link href="tel:+994552478757" aria-label="Call">
                                +994552478757
                            </Link>
                        </li>
                        <li className="flex gap-1">
                            Email :
                            <Link href="mailto:Cml@Stech.az" aria-label="Email">
                                Cml@Stech.az
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import Link from 'next/link'

interface ILogo {
    className?: string
}

const Logo: React.FC<ILogo> = ({ className }: ILogo): JSX.Element => {
    return (
        <Link className={`logo flex w-fit flex-col text-center duration-300 hover:text-blue-400 ${className}`} href="/" aria-label="Logotip">
            <span className="text-2xl md:text-3xl">Stech.az</span>
            <span className="md:text-md whitespace-nowrap text-xs">Smart technology</span>
        </Link>
    )
}

export default Logo

'use client'
import { NextUIProvider } from '@nextui-org/react'

interface IProviders {
    children: React.ReactNode
}

const Providers: React.FC<IProviders> = ({ children }: IProviders): JSX.Element => {
    return (
        <>
            <NextUI>{children}</NextUI>
        </>
    )
}

export default Providers

/* ========================================================= */

function NextUI({ children }: IProviders) {
    return <NextUIProvider className="h-full">{children}</NextUIProvider>
}

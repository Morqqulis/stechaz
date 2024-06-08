interface INavigation {
    id: number
    label: string
    url: string
}

export const navigation: INavigation[] = [
    {
        id: 1,
        label: 'Ana səhifə',
        url: '/',
    },
    {
        id: 2,
        label: 'Katalog',
        url: '/catalog',
    },
    {
        id: 3,
        label: 'Haqqımızda',
        url: '/about',
    },

    {
        id: 4,
        label: 'Qaydalar',
        url: '/faq',
    },
]

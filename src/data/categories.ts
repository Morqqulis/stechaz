export interface ICategories {
    id: number
    title: string
    url: string
    ariaLabel: string
}

export const categories: ICategories[] = [
    { ariaLabel: 'Smart kilidler linki', id: 1, title: 'Smart kilidler', url: '/smart-kilidler' },
    { ariaLabel: 'Ip domofonlar linki', id: 2, title: 'Ip domofonlar', url: '/ip-domofonlar' },
    { ariaLabel: 'Analoq Domofonlar linki', id: 3, title: 'Analoq Domofonlar', url: '/analoq-domofonlar' },
    { ariaLabel: 'Şlaqbaum sistemləri linki', id: 4, title: 'Şlaqbaum sistemləri', url: '/slaqbaum-sistemleri' },
    { ariaLabel: 'Turniket sitemləri linki', id: 5, title: 'Turniket sitemləri', url: '/turniket-sistemleri' },
    { ariaLabel: 'Access control Sistemləri linki', id: 6, title: 'Access control Sistemləri', url: '/access-control-sistemleri' },
    { ariaLabel: 'Elektron kilidlər linki', id: 7, title: 'Elektron kilidlər', url: '/elektron-kilidler' },
    { ariaLabel: 'Maqnit kilidler linki', id: 8, title: 'Maqnit kilidler', url: '/maqnit-kilidler' },
    { ariaLabel: 'Siqnalizasiya Sistemləri linki', id: 9, title: 'Siqnalizasiya Sistemləri', url: '/siqnalizasiya-sistemleri' },
    { ariaLabel: 'Qida bloklari linki', id: 10, title: 'Qida bloklari', url: '/qida-bloklari' },
]

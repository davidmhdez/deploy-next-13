export type BurgerMenuSection = {
    title: string
    path: string
    sessionRequired?: boolean
}

const burgerMenuSections = {
    aboutUs: {
        title: 'Conócenos',
        sections: [
            {
                title: 'Descúbrenos',
                path: '/'
            },
            {
                title: 'Beneficios',
                path: '/'
            }
        ]
    },
    ourProducts: {
        title: 'Utiliza tus millas',
        sections: [
            {
                title: 'Viajes y actividades',
                path: '/'
            },
            {
                title: 'Products',
                path: '/'
            },
            {
                title: 'Transferencia de millas',
                path: '/',
                sessionRequired: true
            },
        ]
    },
    customerService: {
        title: 'Servicio al cliente',
        sections: [
            {
                title: 'Necesitas ayuda',
                path: '/',
            },
            {
                title: 'Preguntas frecuentes',
                path: '/',
            }
        ]
    }
}

export default burgerMenuSections
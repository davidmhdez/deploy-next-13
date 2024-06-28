export type FooterLink = {
    title: string
    path: string
}

export const footerLinks = Object.freeze({
    knowUs: {
        title: "Conócenos",
        links: [
            {
                title: "Descúbrenos",
                path: "/"
            },
            {
                title: "Beneficios",
                path: "/"
            }
        ]
    },
    ourProducts: {
        title: "Utiliza tus millas",
        links: [
            {
                title: "Viajes y actividades",
                path: "/"
            },
            {
                title: "Productos",
                path: "/"
            },
            {
                title: "Transferencia de millas",
                path: "/"
            }
        ]
    },
    legalConditions: {
        title: "Condiciones legales",
        links: [
            {
                title: "Alertas de seguridad",
                path: "/"
            },
            {
                title: "Políticas de privacidad en internet",
                path: "/"
            },
            {
                title: "Términos y condiciones del programa",
                path: "/"
            },
            {
                title: "Términos y condiciones de uso",
                path: "/"
            }
        ]
    }
})

const sizes = {
    phone: '576px',
    tablet: '768px',
    smallLaptop: '998px',
    laptop: '1200px',
    desktop: '1440px',
}

const MQ = {
    SM: `@media(min-width: ${sizes.phone})`,
    MD: `@media(min-width: ${sizes.tablet})`,
    LG: `@media(min-width: ${sizes.smallLaptop})`,
    XL: `@media(min-width: ${sizes.laptop})`,
    XXL: `@media(min-width: ${sizes.desktop})`
}

export default MQ;
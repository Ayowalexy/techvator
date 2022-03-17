import { extendTheme } from "@chakra-ui/react";



// Brand Theming
let colors = {
    brand: {
        black: "#000000",
        secondaryBlack: {
            100: "#242526",
        },
        brass: "#AA8E48",
        metallicSunburst: "#917A34",
        red: "#F21C1C",
        roti: "#B49A43",
        rotiLight: "rgba(180, 154, 67, 0.7)",
        sirocco: "#6F7070",
        white: "#ffffff",
        gray: "rgba(242, 242, 242, 1)"

    }
}

// Fonts
const fonts = {
     heading: 'Roboto',
     body: 'Montserrat'
}



// Global Style
const global = {
    'html': {
        fontSize: '62.5%',
    },
    'body': {
        background: colors.brand.black,
        color: colors.brand.white,
        fontSize: '1.4rem',
    }
}


const theme = extendTheme({
    styles:{global},
    colors,
    fonts,
})

export { theme }
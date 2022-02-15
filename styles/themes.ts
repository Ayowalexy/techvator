import { extendTheme } from "@chakra-ui/react";

// Brand Theming
const colors = {
    brand: {
        black: "#000000",
        brass: "#AA8E48",
        metallicSunburst: "#917A34",
        red: "#F21C1C",
        roti: "#B49A43",
        sirocco: "#6F7070",
        white: "#ffffff"

    }
}

const fonts = {
     heading: 'Century Gothic',
     body: 'Montserrat'
}


const theme = extendTheme({
    colors,
    fonts,
})

export { theme }
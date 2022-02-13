import { extendTheme } from "@chakra-ui/react";

// Brand Theming
const colors = {
    brand: {
        900: "black"
    }
}


const theme = extendTheme({
    colors
})

export { theme }
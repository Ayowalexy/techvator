import {
    Box,
    Heading,
    Text,
    useTheme,
    Container,
    Icon,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ButtonLink from "../Button";
// import Container from "../Container";

function Hero() {
    const theme = useTheme();
    const { black, roti } = theme.colors.brand;

    return (
        <Container maxW="120em" py="3.0rem" mt="-4.5rem">
            <Text
                fontSize={{ base: "1rem", lg: "4.4rem" }}
                lineHeight="2"
                mt=".7rem"
                mb={{ base: "1rem", md: "3.5rem" }}
            >History of Amahlubi</Text>
            <Box
                bgSize={{ base: "200px", sm: "250px", md: "600px" }}
                bgImage={{
                    base: 'url("/imgs/top-b-mobile.png")',
                    md: 'url("/imgs/home/hero-x2.png")',
                }}
                bgRepeat="no-repeat"
                bgPos="100% 40%"
                position="relative"
                height={{ base: "200px", sm: '250px', md: '600px' }}
            >

            </Box>

        </Container>

    );
}

export default Hero;

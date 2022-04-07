import { Box, Heading, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import ButtonLink from "../Button";
import Container from "../Container";

function Hero() {
  const theme = useTheme();
  const { black, roti } = theme.colors.brand;

  return (
    <Container
      bgColor={black}
      py="3.0rem"
      mt="-4.5rem"
      position="relative"
      bgSize="600px"
      bgImage='url("/imgs/home/hero-x2.png")'
      bgRepeat="no-repeat"
      bgPos="100% 40%"
    >
      <>
        <Box
          my="3.0rem"
          py="3.0rem"
          pl={{ base: "unset", lg: "4rem" }}
          maxW="70.7rem"
        >
          <Heading fontSize={{ base: "3.6rem", lg: "7.2rem" }}>
            GIVE IT UP FOR PROGRESSION
          </Heading>
          <Text
            fontSize={{ base: "1.6rem", lg: "2.4rem" }}
            lineHeight="2"
            mt=".7rem"
            mb="3.5rem"
          >
            Now’s your time to take sight of all you are capable of achieving in
            this here African-ness… you inheritably possess.
          </Text>
          <ButtonLink
            pos="relative"
            zIndex={2}
            p={{ base: "1rem 2rem", lg: "1.5rem 3rem" }}
            label="Learn More"
            href=""
            textTransform="capitalize"
            fontSize="1.8rem"
          />
        </Box>

        <Box
          pos="absolute"
          bgGradient={`linear(to-t,${roti} , transparent)`}
          w="100%"
          h="12.0rem"
          bottom="0"
          left="0"
        />
      </>
    </Container>
  );
}

export default Hero;

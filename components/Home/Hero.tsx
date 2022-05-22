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
    <Box
      bgSize={{ base: "200px", sm: "250px", md: "600px" }}
      bgImage={{
        base: 'url("/imgs/top-b-mobile.png")',
        md: 'url("/imgs/home/hero-x2.png")',
      }}
      bgRepeat="no-repeat"
      bgPos="100% 40%"
      position="relative"
    >
      <Container maxW="120em" py="3.0rem" mt="-4.5rem">
        <Box display={{ base: "flex", md: "block" }}>
          <Box
            my={{ base: "1rem", md: "3.0rem" }}
            py="3.0rem"
            pl={{ base: "1rem", lg: "4rem" }}
            maxW={{
              base: "20rem",
              sm: "30.7rem",
              md: "70.7rem",
              lg: "70.7rem",
            }}
          >
            <Heading fontSize={{ base: "2.3rem", lg: "7.2rem" }}>
              GIVE IT UP FOR PROGRESSION
            </Heading>
            <Text
              fontSize={{ base: "1rem", lg: "2.4rem" }}
              lineHeight="2"
              mt=".7rem"
              mb={{ base: "1rem", md: "3.5rem" }}
            >
              Now’s your time to take sight of all you are capable of achieving
              in this here African-ness… you inheritably possess.
            </Text>
            <ButtonLink
              pos="relative"
              zIndex={2}
              p={{ base: ".5rem 1rem", lg: "1.5rem 3rem" }}
              label="Learn More"
              href=""
              textTransform="capitalize"
              fontSize={{ base: "1.2rem", md: "1.8rem" }}
              icon={
                <Icon
                  as={IoIosArrowForward}
                  boxSize={{ base: "1.5rem", md: "2.5rem" }}
                  ml="1.6rem"
                />
              }
            />
          </Box>

          <Box
            pos="absolute"
            bgGradient={`linear(to-t,${roti} , transparent)`}
            w="100%"
            h="8.0rem"
            bottom="0"
            left="0"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;

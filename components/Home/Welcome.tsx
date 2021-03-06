import {
  Box,
  Flex,
  Image,
  Text,
  useTheme,
  Container,
  Icon,
} from "@chakra-ui/react";
// import Image from 'next/image'
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ButtonLink from "../Button";
// import Container from "../Container";

function Welcome(): JSX.Element {
  const theme = useTheme();
  const { roti } = theme.colors.brand;

  return (
    <Container maxW="120em">
      <Flex
        flexDir={{ base: "column", md: "column", lg: "row" }}
        p="3.5rem"
        px={{ base: "1rem" }}
        alignItems={{ base: "center", md: "unset" }}
      >
        <Image
          mb="1rem"
          pl={{ base: "unset", md: "1rem", lg: "4rem" }}
          pr={{ base: "unset", lg: "10rem" }}
          //  pb={{p:'5rem' }}
          src="/imgs/home/welcome-2x.png"
          transform={{ base: "unset", lg: "translateY(9rem)" }}
          zIndex={1}
          maxW={{ base: "24rem", md: "100%" }}
        />

        <Box maxW="120rem">
          <Text fontSize={{ base: "1.4rem", lg: "1.8rem" }} lineHeight="2">
            YOU possess, everything and more it takes to claim your rightful
            place in the upper-class and distinguished-master class of
            Achievement – no one can or will ever take away from you…
          </Text>
          <Box my="3rem">
            <Text
              fontSize={{ base: "1.4rem", lg: "1.8rem" }}
              fontStyle="italic"
              lineHeight="2"
              color={roti}
            >
              Keep ﬂying...
            </Text>
            <Text
              fontSize={{ base: "1.4rem", lg: "1.8rem" }}
              fontStyle="italic"
              lineHeight="2"
              color={roti}
            >
              Keep going...
            </Text>
            <Text
              fontSize={{ base: "1.4rem", lg: "1.8rem" }}
              fontStyle="italic"
              lineHeight="2"
              color={roti}
            >
              Dominating - higher than the sky…
            </Text>
          </Box>

          <Text fontSize={{ base: "1.4rem", lg: "1.8rem" }} lineHeight="2">
            Take your throne and be thrown much higher than the sky can dare to
            throw you!
          </Text>

          <ButtonLink
            mt="3.5rem"
            zIndex={2}
            p={{ base: ".5rem 1rem", lg: "1.5rem 3rem" }}
            label="Learn More"
            href=""
            textTransform="capitalize"
            fontSize={{ base: "1.4rem", lg: "1.8rem" }}
            icon={
              <Icon
                as={IoIosArrowForward}
                boxSize={{ base: "1.5rem", md: "2.5rem" }}
                ml="1.6rem"
              />
            }
          />
        </Box>
      </Flex>
    </Container>
  );
}

export default Welcome;

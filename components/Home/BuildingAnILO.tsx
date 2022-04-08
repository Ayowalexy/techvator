import {
  background,
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useTheme,
  Image,
  Container,
} from "@chakra-ui/react";
// import { buildingAnILO } from '../../data/the-amahlubist'
import React from "react";
import ButtonLink from "../Button";
// import Container from "../Container";

function BuildingAnILO() {
  const theme = useTheme();
  const { black, roti } = theme.colors.brand;

  return (
    <Box bgColor={black}>
      <Container
        py="3.0rem"
        mt="-3.5rem"
        position="relative"
        bgSize="50rem"
        bgRepeat="no-repeat"
        bgPos="100% 40%"
        maxW="120em"
      >
        <Flex
          flexDir={{ base: "column", md: "column", lg: "row" }}
          p="3.5rem"
          px={{ base: "1rem" }}
        >
          <Box flex={1} order={{ base: 2, md: "unset" }}>
            <Box
              // maxW="70.7rem"
              my="3.0rem"
              py="3.0rem"
              pl={{ base: "unset", lg: "4rem" }}
            >
              <Heading
                fontSize={{ base: "1.56rem", lg: "5.56rem" }}
                mt={{ base: "-2.6rem", lg: "7.2rem" }}
                color={roti}
              >
                Building An ILO
              </Heading>
              <Box my="3rem">
                <Text
                  fontSize={{ base: "1.4rem", lg: "1.8rem" }}
                  lineHeight="2"
                >
                  "It is my expressed desire to contribute to building an ILO
                  that systimatically demonstrates its cares for all staff and
                  constituents , and works to effectively deliver on commitments
                  to ensure the dignity of everyone involved in the world of
                  work"
                </Text>
              </Box>

              <Box my="3rem">
                <Text
                  fontSize={{ base: "1.4rem", lg: "1.8rem" }}
                  lineHeight="2"
                >
                  "I am the only candidate that does not have government
                  support"
                </Text>
              </Box>

              <Box my="3rem">
                <Text
                  fontSize={{ base: "1.4rem", lg: "1.8rem" }}
                  lineHeight="2"
                  color={roti}
                >
                  Prof. Mthunzi Mdwaba
                </Text>
              </Box>

              <Box my="3rem">
                <Text
                  fontSize={{ base: "1.4rem", lg: "1.8rem" }}
                  lineHeight="2"
                >
                  Candidate for ILO DG
                </Text>
              </Box>
              <Flex
                gap="2rem"
                alignItems="flex-end"
                justifyContent="center"
                mt="2rem"
                flex={1}
              >
                <ButtonLink
                  display="inline-block"
                  mt="3.5rem"
                  zIndex={2}
                  p={{ base: "1rem 2rem", lg: "1.5rem 3rem" }}
                  label="Learn More"
                  href=""
                  textTransform="capitalize"
                  fontSize={{ base: "1.4rem", lg: "1.8rem" }}
                />
                <ButtonLink
                  display="inline-block"
                  mt="3.5rem"
                  zIndex={2}
                  p={{ base: "1rem 2rem", lg: "1.5rem 3rem" }}
                  label="Donate"
                  href=""
                  textTransform="capitalize"
                  fontSize={{ base: "1.4rem", lg: "1.8rem" }}
                />
              </Flex>
            </Box>
          </Box>
          <Image src="/imgs/home/Mdwaba-Homeimage@2x.png" />
        </Flex>
      </Container>
    </Box>
  );
}

export default BuildingAnILO;

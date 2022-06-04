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
  Icon,
} from "@chakra-ui/react";
// import { buildingAnILO } from '../../data/the-amahlubist'
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
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
          {/* Content Here */}
          <Box flex={0.6}>
            <Box
              // maxW="70.7rem"
              my="2.0rem"
              py="2.0rem"
              pl={{ base: "unset", lg: "4rem" }}
            >
              <Heading
                fontSize={{ base: "2.5rem", lg: "5.56rem" }}
                // mt={{ base: "-2.6rem", lg: "1rem" }}
                color={roti}
                textAlign={{ base: "center", md: "left" }}
              >
                Building An ILO
              </Heading>
              <Box my="3rem">
                <Text
                  fontSize={{ base: "1.4rem", lg: "1.8rem" }}
                  lineHeight="2"
                  textAlign={{ base: "center", md: "left" }}
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
                  textAlign={{ base: "center", md: "left" }}
                >
                  "I am the only candidate that does not have government
                  support"
                </Text>
              </Box>

              {/* Mobile Image */}
              <Flex
                alignItems="flex-end"
                mx="auto"
                // justifyContent="flex-end"
                w="100%"
                bg="#DCDADF"
                borderRadius="3xl"
                // p="2rem"
                maxW="25rem"
                maxH="35rem"
                mt={{ base: "1rem", lg: "4rem" }}
                overflow="hidden"
                display={{ md: "none" }}
              >
                <Image
                  src="/imgs/home/mdwaba-image-fill.png"
                  // transform="translate(5rem, 10rem)"
                  alt="Mdwaba"
                />
              </Flex>

              <Box mt="3rem">
                <Text
                  fontSize={{ base: "1.4rem", lg: "1.8rem" }}
                  textAlign={{ base: "center", md: "left" }}
                  lineHeight="2"
                  color={roti}
                >
                  Prof. Mthunzi Mdwaba
                </Text>
              </Box>

              <Box mb="1rem">
                <Text
                  fontSize={{ base: "1.4rem", lg: "1.8rem" }}
                  textAlign={{ base: "center", md: "left" }}
                  lineHeight="2"
                  fontWeight="extrabold"
                >
                  Candidate for ILO DG
                </Text>
              </Box>

              <Flex
                justifyContent={{ base: "center", md: "unset" }}
                gap="3rem"
                mt="2rem"
                flex={1}
              >
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
                <ButtonLink
                  mt="3.5rem"
                  zIndex={2}
                  p={{ base: ".5rem 1rem", lg: "1.5rem 3rem" }}
                  label="Donate"
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
              </Flex>
            </Box>
          </Box>

          {/* Desktop */}
          <Flex
            alignItems="center"
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            flex={0.4}
          >
            <Flex
              alignItems="flex-end"
              // justifyContent="flex-end"
              w="100%"
              bg="#DCDADF"
              borderRadius="3xl"
              // p="2rem"
              maxW="32rem"
              maxH="40rem"
              mt={{ base: "1rem", lg: "4rem" }}
              overflow="hidden"
            >
              <Image
                src="/imgs/home/mdwaba-image-fill.png"
                // transform="translate(5rem, 10rem)"
                alt="Mdwaba"
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default BuildingAnILO;

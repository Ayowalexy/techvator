import {
  background,
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useTheme,
  Container,
} from "@chakra-ui/react";
import { amahlubistLifeStyle } from "../../data/the-amahlubist";
import ButtonLink from "../Button";
// import Container from "../Container"
import HeaderTag from "../HeaderTag";

function AmahlubistStyle() {
  const theme = useTheme();
  const { white, black, roti } = theme.colors.brand;

  function replaceJSX(str, find, replace) {
    let result;
    let parts = str.split(find);
    for (let i = 0, result = []; i < parts.length; i++) {
      result.push(parts[i]);
      result.push(replace);
    }
    return result;
  }

  const renderCard = (lt, idx) => {
    const isEven = idx % 2 === 0;
    const subTitle = lt?.subTitle
      .toString()
      .replace('"Black-Excellent"', '<b>"Black-Excellent"</b>')
      .replace("ZunguNation...", "<b>ZunguNation...</b>");
    return (
      <Flex bg={isEven ? roti : black} flexDir="column" p="4rem 3rem" h="100%">
        <HeaderTag fontSize="1.6rem" mb="3rem" textAlign="center">
          {lt?.title}
        </HeaderTag>
        <Text
          textAlign="justify"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />

        <Flex alignItems="flex-end" justifyContent="center" mt="2rem" flex={1}>
          <ButtonLink
            _hover={{ background: isEven ? black : roti }}
            label="Learn More"
            href={lt?.url}
            textTransform="capitalize"
          />
        </Flex>
      </Flex>
    );
  };

  return (
    <Box
      bg='url("/imgs/life-style-section-01.jpg")'
      bgSize="100% 100%"
      bgRepeat="no-repeat"
    >
      <Container maxW="120em" pt="5rem" pb="10rem">
        <Box pos="relative" zIndex={2} px={{ base: "1rem", lg: "4rem" }}>
          <HeaderTag
            mt={{ base: "-6rem", lg: "3rem" }}
            fontSize={{ base: "3.1rem", lg: "5.1rem" }}
            fontWeight="400"
          >
            Amahlubi Lifestyle
          </HeaderTag>

          <Text
            textAlign="center"
            fontSize={{ base: "1.4rem", lg: "2.4rem" }}
            fontWeight="bold"
          >
            Whoever thought a time would come when achievements is this
          </Text>
          <Text
            textAlign="center"
            fontSize={{ base: "1.4rem", lg: "2.4rem" }}
            fontWeight="bold"
          >
            celebrated and put on a pedestal it so finely desere?
          </Text>

          <Grid
            gap="2rem"
            my={{ base: "5rem", lg: "10rem" }}
            px="3rem"
            gridAutoRows="minmax(min-content, max-content)"
            templateColumns="repeat(auto-fit,minmax(18rem, 1fr))"
          >
            {amahlubistLifeStyle.map((ls, idx) => {
              return (
                <Box mx="auto" key={idx}>
                  {renderCard(ls, idx)}
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default AmahlubistStyle;

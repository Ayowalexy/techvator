import { Box, Flex, Text, useTheme, Link, Container } from "@chakra-ui/react";

// import Container from './Container'
import { FacebookIcon, InstagramIcon } from "./Socials";

function Footer() {
  const theme = useTheme();
  const { metallicSunburst } = theme.colors.brand;
  return (
    <Box bg={metallicSunburst}>
      <Container maxW="120em">
        <Flex
          px={{ base: "1rem", lg: "4rem" }}
          py="3rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>
            {new Date().getFullYear().toString() +
              " AmaHlubi | All rights reserved."}
          </Text>
          <Flex>
            <Link href="#" mr="1.6rem">
              <FacebookIcon />
            </Link>
            <Link href="#">
              <InstagramIcon color={metallicSunburst} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;

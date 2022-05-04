import {
  Box,
  Flex,
  FlexProps,
  HeadingProps,
  Text,
  useTheme,
  Button as ChakraButton,
  Container,
} from "@chakra-ui/react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import ButtonLink from "./Button";
// import Container from "./Container";
import FormInput from "./Forms/FormInput";
import FormTextArea from "./Forms/FormTextArea";
import HeaderTag from "./HeaderTag";
import { FacebookIcon, InstagramIcon } from "./Socials";

type ContactDetailProp = {
  icon: JSX.Element;
  info: string;
  headerProp?: HeadingProps;
  iconContainerProps?: FlexProps;
};

function ContactDetail({
  icon,
  info,
  headerProp,
  iconContainerProps,
}: ContactDetailProp) {
  return (
    <Flex alignItems="center" mb="1.5rem">
      <Flex
        mr="2rem"
        w="2.726rem"
        h="2.726rem"
        border={`2px solid white`}
        borderRadius="full"
        alignItems="center"
        justifyContent="center"
        {...iconContainerProps}
      >
        {icon}
      </Flex>

      <HeaderTag
        fontFamily="Montserrat"
        fontSize="2.1rem"
        fontWeight="600"
        margin="unset"
        {...headerProp}
      >
        {info}
      </HeaderTag>
    </Flex>
  );
}

function ContactSection() {
  const theme = useTheme();
  const { metallicSunburst, roti, white, black } = theme.colors.brand;

  return (
    <Box
      bg='url("/imgs/contact-sectionbg.png")'
      bgSize="120% 100%"
      bgRepeat="no-repeat"
      bgColor={black}
    >
      <Container maxW="120em">
        <Flex flexDir={["column", "column", "row", "row"]}>
          {/* Contact Details */}
          <Box
            flex="0.4"
            px={{ base: "1rem", lg: "6rem" }}
            py={{ base: "3rem", lg: "12rem" }}
          >
            <HeaderTag
              textAlign="left"
              fontSize={{ base: "3.8rem", lg: "6rem" }}
              fontWeight="400"
            >
              Let's talk
            </HeaderTag>
            <Text mb="2rem" maxW="30rem">
              AmaHlubi online helps you connect and share with the nation of
              AmaHlubi
            </Text>
            <ContactDetail icon={<BsTelephoneFill />} info="(010) 109 8604" />
            <ContactDetail
              icon={<IoMdMail />}
              info="info@AmaHlubi.co.za"
              headerProp={{ fontSize: "1.1rem", fontWeight: "500" }}
            />

            <Flex
              flexDir={{ base: "column", md: "row", lg: "row" }}
              alignItems="center"
              mt="2rem"
            >
              <ButtonLink
                borderRadius="full"
                _hover={{ background: "transparent", borderColor: white }}
                bg={metallicSunburst}
                borderColor={metallicSunburst}
                mb={{ base: "1rem", md: "unset", lg: "unset" }}
                p=".6rem 2rem"
                label="Become a member"
                fontSize="1.2rem"
                href="#"
              />
              <Flex>
                <Flex alignItems="center" mx="1rem">
                  <FacebookIcon />
                  <ButtonLink
                    borderRadius="full"
                    ml=".5rem"
                    p=".5rem 2rem"
                    label="Follow"
                    textTransform="capitalize"
                    href="#"
                  />
                </Flex>
                <Flex alignItems="center" mx="1rem">
                  <InstagramIcon />
                  <ButtonLink
                    borderRadius="full"
                    ml=".5rem"
                    p=".5rem 2rem"
                    label="Follow"
                    textTransform="capitalize"
                    href="#"
                  />
                </Flex>
              </Flex>
            </Flex>
          </Box>

          {/* Forms */}
          <Box
            bgColor={black}
            flex="0.6"
            py={{ base: "unset", lg: "12rem" }}
            px={{ base: "1rem", lg: "6rem" }}
            borderLeft={{
              base: "unset",
              md: `2px solid ${metallicSunburst}`,
              lg: `2px solid ${metallicSunburst}`,
            }}
          >
            <HeaderTag
              mb="1rem"
              verticalAlign="middle"
              fontSize="1.4rem"
              lineHeight={3.6}
              fontWeight="600"
              fontFamily="Montserrat"
              textAlign="left"
            >
              GET IN TOUCH
            </HeaderTag>

            <form>
              <Box borderTop={`2px solid ${white}`} py="3rem">
                <Flex
                  flexDir={{ base: "column", lg: "row" }}
                  my="0.5rem"
                  w="100%"
                >
                  <FormInput
                    label="First Name"
                    containerProps={{
                      mr: "2rem",
                      mb: { base: "1rem", lg: "unset" },
                    }}
                  />
                  <FormInput label="Last Name" />
                </Flex>
                <Flex
                  flexDir={{ base: "column", lg: "row" }}
                  my="2rem"
                  w="100%"
                >
                  <FormInput
                    inputProps={{
                      onChange: () => console.log("hello"),
                      value: "",
                    }}
                    label="Email"
                    containerProps={{
                      mr: "2rem",
                      mb: { base: "1rem", lg: "unset" },
                    }}
                  />
                  <FormInput label="Tel/Mobile" />
                </Flex>
                <Box>
                  <FormTextArea label="Message" />
                </Box>
                <Box my="4rem">
                  <ChakraButton
                    _hover={{
                      background: "transparent",
                      border: "none",
                      color: white,
                    }}
                    _focus={{
                      background: "transparent",
                      outline: "none",
                      boxShadow: "none",
                    }}
                    _active={{
                      background: "transparent",
                    }}
                    fontSize="xl"
                    border="none"
                    bg="transparent"
                    color={roti}
                    type="submit"
                  >
                    SEND{" "}
                    <SiMinutemailer
                      size="2rem"
                      style={{ marginLeft: ".5rem" }}
                    />
                  </ChakraButton>
                </Box>
              </Box>
            </form>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default ContactSection;

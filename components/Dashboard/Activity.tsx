import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Img,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Btn } from "../Button";
import FormInput from "../Forms/FormInput";

function Activity() {
  const theme = useTheme();
  const { white, metallicSunburst, secondaryBlack, gray } = theme.colors.brand;
  return (
    <Box
      maxW="68.6rem"
      mt="3rem"
      shadow="md"
      bg={secondaryBlack["200"]}
      borderRadius="2xl"
    >
      <Flex p="2rem" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="1rem">
          <Avatar
            size="lg"
            name="Christian Nwamba"
            src="https://bit.ly/prosper-baba"
          />
          <Box>
            <Heading as="h3" fontWeight="600" fontSize="1.8rem">
              Thesolo Rfuti
            </Heading>
            <Text fontSize="1.2rem">April 28th at 6:17pm</Text>
          </Box>
        </Flex>

        <Flex alignItems="center" gap="1rem">
          <Text fontSize="1.2rem">No likes yet</Text>
          <IconButton
            size="lg"
            borderRadius="full"
            bgColor={secondaryBlack["100"]}
            aria-label="Favorite"
            icon={<Icon as={MdFavoriteBorder} boxSize="1.6rem" />}
          />
        </Flex>
      </Flex>

      {/* Text Content */}
      <Box p="2rem">
        <Text>
          If you don’t believe in God. Where can you see life and buy? If you
          can’t buy life then you will know there is God. God makes things
          happen — or stops them from happening — as He pleases. God is in
          charge!
        </Text>
      </Box>

      {/* Image Section check if image is one...use a flexible div to display image otherwise maxw:338 */}
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        minH="35rem"
        w="100%"
        maxW="68.6rem"
        gap="1rem"
      >
        <Box w="100%" maxW="338px" flexShrink="0">
          <Image
            src="/imgs/community/large-placeholder.png"
            alt=""
            h="100%"
            w="100%"
          />
        </Box>
        <Box w="100%" maxW="338px" flexShrink="0">
          <Image
            src="/imgs/community/large-placeholder.png"
            alt=""
            h="100%"
            w="100%"
          />
        </Box>
        <Box w="100%" maxW="338px" flexShrink="0">
          <Image
            src="/imgs/community/large-placeholder.png"
            alt=""
            h="100%"
            w="100%"
          />
        </Box>
        <Box w="100%" maxW="338px" flexShrink="0">
          <Image
            src="/imgs/community/large-placeholder.png"
            alt=""
            h="100%"
            w="100%"
          />
        </Box>
      </Flex>
      <Flex
        py="1rem"
        mt="2rem"
        mx="2rem"
        borderBottom={`.3px solid ${gray}`}
        alignItems="center"
        justifyContent="flex-end"
        gap="1rem"
      >
        <Text fontSize="1.2rem">Like Post</Text>
        <IconButton
          size="lg"
          borderRadius="full"
          bgColor={secondaryBlack["100"]}
          aria-label="Favorite"
          icon={<Icon as={MdFavoriteBorder} boxSize="1.6rem" />}
        />
      </Flex>

      {/*Render Comments */}
      <Box p="2rem">
        <Flex gap="1rem" alignItems="center">
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />
          <Box
            p="1rem"
            maxW="30rem"
            borderRadius="3xl"
            bgColor={secondaryBlack["100"]}
            pos="relative"
          >
            <Text>Thanks so much it’s just some graduation memories 👍🏾</Text>
            <Text mt="0.5rem" fontSize="1rem">
              9 mins ago
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Render Comment Section */}
      <Box
        mt="3rem"
        p="2rem"
        shadow="md"
        bg={secondaryBlack["200"]}
        borderRadius="2xl"
      >
        <form>
          <Flex py="1rem" px="1rem" gap="2rem" alignItems="center">
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
            />
            <FormInput
              containerProps={{
                flexDir: "column",
                bgColor: secondaryBlack["100"],
                borderRadius: "lg",
                alignItems: "center !important",
              }}
              inputProps={{
                autoFocus: true,
                py: "2.5rem",
                px: "2rem",
                placeholder: "Write a Comment.......",
                _placeholder: {
                  color: "white",
                },
              }}
              inputRightAddon={
                <Btn
                  borderColor={white}
                  borderRadius="xl"
                  _hover={{ borderColor: metallicSunburst }}
                  bgColor="transparent"
                  py=".8rem"
                  mr="1rem"
                >
                  Comment
                </Btn>
              }
            />
          </Flex>
        </form>
      </Box>
    </Box>
  );
}

export default Activity;

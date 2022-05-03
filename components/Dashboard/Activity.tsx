import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

function Activity() {
  const theme = useTheme();
  const { secondaryBlack } = theme.colors.brand;
  return (
    <Box mt="3rem" shadow="md" bg={secondaryBlack["200"]} borderRadius="2xl">
      <Flex p="2rem" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="1rem">
          <Avatar
            size="lg"
            name="Christian Nwamba"
            src="https://bit.ly/prosper-baba"
          />
          <Box>
            <Heading as="h3">Thesolo Rfuti</Heading>
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
    </Box>
  );
}

export default Activity;

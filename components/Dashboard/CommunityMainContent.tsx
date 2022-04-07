import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import UsersList from "./UsersList";

function CommunityMainContent() {
  return (
    <Box h="1000px" px="2rem">
      <UsersList />
      <Heading fontSize="3xl" mt="2rem">
        New Members
      </Heading>
    </Box>
  );
}

export default CommunityMainContent;

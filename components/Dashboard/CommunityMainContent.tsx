import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Activities from "./Activities";
import NewMember from "./NewMember";
import UsersList from "./UsersList";

function CommunityMainContent() {
  return (
    <Box minH="1000px" pb="5rem" px="2rem">
      <UsersList />
      <NewMember />
      <Activities />
    </Box>
  );
}

export default CommunityMainContent;

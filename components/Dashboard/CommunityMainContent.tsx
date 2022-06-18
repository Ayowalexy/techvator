import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { PostsAtom } from "recoilStore/PostsAtom";
import Activities from "./Activities";
import MakePost from "./MakePost";
import UsersList from "./UsersList";

function CommunityMainContent() {
  const posts = useRecoilValue(PostsAtom);
  return (
    <Box minH="1000px" pb="5rem" px="2rem">
      <UsersList />
      <MakePost />
      <Activities posts={posts} />
    </Box>
  );
}

export default CommunityMainContent;

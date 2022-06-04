import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { PostAtom } from "recoilStore/PostsAtom";
import Activities from "../Dashboard/Activities";
import MakePost from "../Dashboard/MakePost";

function UserMainContent() {
  const posts = useRecoilValue(PostAtom);
  return (
    <Box minH="1000px" pb="5rem" px="2rem">
      <MakePost />
      <Activities posts={posts} />
    </Box>
  );
}

export default UserMainContent;
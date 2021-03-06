import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { PostsAtom } from "recoilStore/PostsAtom";
import Activities from "../Dashboard/Activities";
import MakePost from "../Dashboard/MakePost";

function UserMainContent() {
  const posts = useRecoilValue(PostsAtom);
  return (
    <Box
      minH="1000px"
      pb="5rem"
      order={{ base: 3, md: 2 }}
      px={{ base: "1rem", md: "2rem" }}
    >
      <MakePost />
      <Activities posts={posts} />
    </Box>
  );
}

export default UserMainContent;

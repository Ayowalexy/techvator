import { Box, Flex, Heading, Text, useTheme } from "@chakra-ui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { Post, PostsAtom } from "recoilStore/PostsAtom";
import Activity from "./Activity";

type ActivitiesProp = {
  posts: Post[];
};
function Activities({ posts }: ActivitiesProp) {
  const theme = useTheme();
  const { secondaryBlack } = theme.colors.brand;

  return (
    <Box mt="5rem">
      <Heading fontSize="4xl" mt="2rem">
        Activities
      </Heading>
      {/* List of Activities */}
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link key={post?._id} href={`/post/${post?._id}`}>
            <Box cursor="pointer">
              <Activity post={post} />
            </Box>
          </Link>
        ))
      ) : (
        <Flex
          mt="3rem"
          alignItems="center"
          justifyContent="center"
          p={{ base: "1rem", md: "2rem" }}
          borderRadius="3xl"
          bgColor={secondaryBlack["200"]}
        >
          <Text>No Activity yet</Text>
        </Flex>
      )}
      {/* <Activity /> */}
    </Box>
  );
}

export default Activities;

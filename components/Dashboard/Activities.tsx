import { Box, Flex, Heading, Text, useTheme } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { PostAtom } from "recoilStore/PostsAtom";
import Activity from "./Activity";

function Activities() {
  const theme = useTheme();
  const { secondaryBlack } = theme.colors.brand;
  const posts = useRecoilValue(PostAtom);

  console.log("posts", posts);
  return (
    <Box mt="5rem">
      <Heading fontSize="4xl" mt="2rem">
        Activities
      </Heading>
      {/* List of Activities */}
      {posts.length > 0 ? (
        posts.map((post) => <Activity key={post._id} post={post} />)
      ) : (
        <Flex
          mt="3rem"
          alignItems="center"
          justifyContent="center"
          p="2rem"
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

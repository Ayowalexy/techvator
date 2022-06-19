import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
// import { useRecoilValue } from "recoil";
import { getFullNameSelector, User } from "recoilStore/AuthAtom";

type UserListItemProp = {
  itemId?: string;
  user?: User;
};

function UserListItem({ user }: UserListItemProp) {
  // const getFullName = useRecoilValue(getFullNameSelector(user));
  return (
    <Flex flex="0 0 25%" minW="25%">
      <Flex
        alignItems="flex-end"
        borderRadius="3xl"
        // maxW="15.1rem"
        w={{ base: "10rem", md: "135px" }}
        mx="1rem"
        h={{ base: "15rem", md: "200px" }}
        bgImg={`url(${user?.avatar})`}
        // bgImg={`https://avatars.githubusercontent.com/u/8108337?v=3&s=400`}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        overflow="hidden"
      >
        <Box
          py="2rem"
          px="1rem"
          bgGradient="linear(to-t, rgba(0,0,0, .7) 50%, transparent)"
          w="100%"
        >
          <Text
            zIndex="2"
            lineHeight={1.2}
            fontSize={{ base: "1rem", md: "1.4rem" }}
            color="white"
          >
            {user?.first_name}
            {/* {user.name} */}
          </Text>
          <Text
            zIndex="2"
            lineHeight={1.2}
            fontSize={{ base: "1rem", md: "1.4rem" }}
            color="white"
          >
            {user?.last_name}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default UserListItem;

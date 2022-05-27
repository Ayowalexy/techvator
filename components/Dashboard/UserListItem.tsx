import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { getFullNameSelector, User } from "recoilStore/AuthAtom";

type UserListItemProp = {
  itemId?: string;
  user?: User;
};

function UserListItem({ user }: UserListItemProp) {
  const getFullName = useRecoilValue(getFullNameSelector(user));
  return (
    <Flex flex="0 0 25%" minW="25%">
      <Flex
        alignItems="flex-end"
        borderRadius="3xl"
        // maxW="15.1rem"
        w="100%"
        mx="1rem"
        h="100%"
        bgImg={`url(${user?.avatar})`}
        bgSize="contain"
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
          <Text zIndex="2" lineHeight={1.2} color="white">
            {getFullName}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default UserListItem;

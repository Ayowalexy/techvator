import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type UserListItemProp = {
  user?: {
    name: string;
    avatar?: string;
  };
};

function UserListItem({ user }: UserListItemProp) {
  return (
    <Flex
      flexShrink={0}
      alignItems="flex-end"
      borderRadius="3xl"
      maxW="15.1rem"
      w="100%"
      h="100%"
      bgImg="url('https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"
      bgSize="cover"
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
          {user?.name}
        </Text>
      </Box>
    </Flex>
  );
}

export default UserListItem;

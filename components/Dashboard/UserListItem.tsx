import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'

type UserListItemProp = {
    user?: {
        name: string;
        avatar: string;
    }
}

function UserListItem({ user }: UserListItemProp) {
  return (
    <Flex flexShrink={0} alignItems='flex-end' borderRadius='3xl' w='15.1rem' h='100%' bg='yellow'>
        <Box py='2rem' px='1rem'>
            <Text lineHeight={1.2} color='black'>Taiwo <br/> Baiyegun</Text>
        </Box>
    </Flex>
  )
}

export default UserListItem
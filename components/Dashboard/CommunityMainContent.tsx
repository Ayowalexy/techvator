import { Box } from '@chakra-ui/react'
import React from 'react'
import UsersList from './UsersList'

function CommunityMainContent() {
  return (
    <Box  bg='tomato' h='1000px' px='2rem'>
        <UsersList />
    </Box>
  )
}

export default CommunityMainContent
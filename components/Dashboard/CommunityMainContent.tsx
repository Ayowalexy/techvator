import { Box } from '@chakra-ui/react'
import React from 'react'
import UsersList from './UsersList'

function CommunityMainContent() {
  return (
    <Box px='2rem'>
        <UsersList />
    </Box>
  )
}

export default CommunityMainContent
import { Box, Flex, IconButton, Img, useTheme } from '@chakra-ui/react'
import React from 'react'
import UserListItem from './UserListItem'

function UsersList() {
    const theme = useTheme()
    const {secondaryBlack} = theme.colors.brand

  return (
    <Box maxW='68.6rem' overflow='auto' h='20rem' borderRadius='3xl' pos='relative'>
          <IconButton 
            zIndex='modal'
            pos='absolute'
            left='2%' top='50%'
            transform='translateY(-50%)'
            aria-label='button'
            w='4.0rem' h='4.0rem' 
            bg={secondaryBlack['100']} 
            borderRadius='100vw' 
            mr={{base: 'unset', md: '1.6rem'}}
            icon={<Img transform='rotate(180deg)' boxSize='40px' src="/imgs/community/arrow-right.svg"  />} /> 

          <IconButton 
            zIndex='modal'
            pos='absolute'
            right='0%' top='50%'
            transform='translateY(-50%)'
            aria-label='button'
            w='4.0rem' h='4.0rem' 
            bg={secondaryBlack['100']} 
            borderRadius='100vw' 
            mr={{base: 'unset', md: '1.6rem'}}
            icon={<Img boxSize='40px' src="/imgs/community/arrow-right.svg"  />} /> 
            
    <Flex gap='2.0rem' flexWrap='nowrap' overflowX='auto' flexDir='row' pos='relative' h='100%' maxH='20rem' bg='purple'>
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
    </Flex>
    </Box>
  )
}

export default UsersList
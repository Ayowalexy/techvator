import { Avatar, Box, Flex,  Icon,  List,  ListIcon,  ListItem,  Text, useTheme } from '@chakra-ui/react'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'
import { FaUserAlt } from 'react-icons/fa'
import { RiBankFill } from 'react-icons/ri'
import { HiUserAdd } from 'react-icons/hi'
import { MdOutlineExitToApp } from 'react-icons/md'

type CommunityLeftSidebarProps = {

}

function CommunityLeftSidebar() {
  const theme = useTheme()
  const { secondaryBlack} = theme.colors.brand
  return (
    <Box pos='relative' >
    <Box top='2rem' left='0' pos='sticky' pb='1rem'>
      <Flex  align='center' gap='1rem'>
       <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />
        <Text fontSize='2xl'>Nandia Okengo</Text>
      </Flex>
      <List px='1rem' my='2rem' spacing='1rem'>
      {
        LEFT_SIDEBAR_MENU_ITEM.map((mi, idx) => (
          <Link href={mi.url} key={idx}>
            <a>
          <ListItem pb='1rem'  display='flex' alignItems='center' gap='3rem'>
            <Avatar size='lg' icon={<Icon as={mi.icon} boxSize={8} color='white' />}  bg={secondaryBlack['100']}  />
            <Text fontSize='2xl'>{mi.title}</Text>
          </ListItem>
            </a>
          </Link>
          )
          )
        }
      </List>
     </Box>
     

    </Box>
  )
}


type MenuItem = {
  title: string;
  icon?: IconType,
  url?: string 
}

const LEFT_SIDEBAR_MENU_ITEM: MenuItem[] = [
    {
      title: 'Members',
      icon: FaUserAlt,
      url: '#'
    },
    {
      title: 'Fund Me',
      icon: RiBankFill,
      url: '#'
    },
    {
      title: 'Edit Profile',
      icon: HiUserAdd,
      url: '#'
    },
    {
      title: 'Logout',
      icon: MdOutlineExitToApp,
      url: '#'
    },
]

export default CommunityLeftSidebar
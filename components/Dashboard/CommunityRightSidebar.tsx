import { Avatar, Box, Flex, Heading, Icon, List, ListItem, Text, useTheme } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { MdEventAvailable } from 'react-icons/md'

function CommunityRightSidebar() {
    const theme = useTheme()
    const { secondaryBlack, white } = theme.colors.brand
  return (
    <Box pos='relative'>
        <Box pos='sticky' top='2rem' right='0' pb='1rem'>
            <Box p='2rem' shadow='md' bg={secondaryBlack['200']} borderRadius='2xl'>
                 <Flex align='center' gap='2rem'>
                    <Avatar size='md' icon={<Icon as={MdEventAvailable} boxSize={8} color={white} />}  bg={secondaryBlack['100']}   />
                    <Heading fontSize='2rem'>Upcoming Events</Heading>
                 </Flex>
                 
                 <Flex align='center' justify='center' h='4rem' mt='1rem'>
                        <Text fontSize='1rem'>No Upcoming Event</Text>
                 </Flex>
            </Box>

            {/* Fund Me */}
            <Box mt='2rem' p='2rem' shadow='md' bg={secondaryBlack['200']} borderRadius='2xl'>
                 <Flex align='center' gap='2rem'>
                    <Avatar size='md' icon={<Icon as={MdEventAvailable} boxSize={8} color={white} />}  bg={secondaryBlack['100']}   />
                    <Heading fontSize='2rem'>Ongoing Fund me</Heading>
                 </Flex>
                 
                 <Box  minH='4rem' mt='3rem'>
                       <List spacing='2rem'>
                           {
                               DONATIONS.map((donation,idx) => (
                                   <ListItem display='flex' alignItems='center' gap='1rem'>
                                           <Avatar size='lg' name='Christian Nwamba' src={donation.avatar} />
                                           <Box>
                                                <Heading fontWeight='400' fontSize='2xl'>{donation.name}</Heading>
                                                <Text fontSize='.9rem'>{donation.description}</Text>
                                           </Box>
                                   </ListItem>
                               ))
                           }
                       </List>
                       <Flex mt='2rem' align='center' justify='center'>
                                <Link href='#'>
                                    <a>See all</a>
                                </Link>
                       </Flex>
                 </Box>
            </Box>
           

        </Box>
    </Box>
  )
}



const DONATIONS = [
    {
      avatar: 'https://bit.ly/code-beast',
      name: 'Nandia Okengo',
      description: 'Needs to raise 2000 ZAR'
    },
    {
      avatar: 'https://bit.ly/kent-c-dodds',
      name: 'Paul Mackenzie',
      description: 'Needs to raise 82,000 ZAR'
    },
    {
      avatar: 'https://bit.ly/prosper-baba',
      name: 'Thesolo Rfutie',
      description: 'Needs to raise 1000 ZAR'
    },
]

export default CommunityRightSidebar
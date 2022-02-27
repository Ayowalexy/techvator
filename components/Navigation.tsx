import { Box, Flex, Link, List, ListItem, useTheme } from "@chakra-ui/react"
import NextLink from "next/link"
import { navigation } from "../data/navigation"
import ButtonLink from "./Button"
import Button from "./Button"


function Navigation() {
  const theme = useTheme()
  const { rotiLight, white, black} = theme.colors.brand
  return (
    <List 
    display={'flex'} 
    flexDir={['column', 'column', 'column', 'row']} 
    pos='relative' 
    zIndex={3}  
    bgColor={rotiLight} 
    w='100%'  
    px='2.4rem' 
    justifyContent='space-between' 
    alignItems={['stretch', 'stretch', 'stretch', 'center']}
    >
        {
          navigation.map((nav, idx) => (
            <ListItem key={idx}  p='2.0rem' pl={idx === 0 && '0'} margin='0 auto'>
              <NextLink href={nav.path}>
                 <Link color={white}  fontSize='1.6rem' fontFamily='Roboto' fontWeight='600'>
                      {nav.label}
                 </Link>
              </NextLink>
            </ListItem>
          )
          )
        }
        <ListItem margin='0 auto'  mb={['2rem', '2rem', '2rem', '0']} display={['none', 'none', 'none', 'block']}  >
            <Button 
            fontFamily='Roboto' 
            fontWeight='600'
            label="Reach Out" 
            href="#" 
            bg={black} 
            color={white} 
            border={black} 
            px='1.8rem'
            py='0.8rem'
            textTransform='capitalize'
            _hover={{backgroundColor: 'black', opacity:'.7'}} />
        </ListItem>
      
      {/* Mobile List Options */}
        <ListItem  
        borderTop={`.5px solid ${white}`}
        d={['flex', 'flex', 'flex', 'none']} 
        justifyContent='space-between' 
        margin='0 auto'  
        mb={['2rem', '2rem', '2rem', '0']} 
        pt='2rem'
        >
            
         <ButtonLink href="/create-account" label="Become a member" mr='1rem' />


            <Button 
            fontFamily='Roboto' 
            fontWeight='600'
            label="Reach Out" 
            href="#" 
            bg={black} 
            color={white} 
            border={black} 
            px='1.8rem'
            pb='0.8rem'
            textTransform='capitalize'
            _hover={{backgroundColor: 'black', opacity:'.7'}} />
        </ListItem>
    </List>
  )
}

export default Navigation
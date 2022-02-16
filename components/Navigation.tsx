import { Box, Flex, Link, List, ListItem, useTheme } from "@chakra-ui/react"
import NextLink from "next/link"
import { navigation } from "../data/navigation"
import Button from "./Button"


function Navigation() {
  const theme = useTheme()
  const { roti, white, black} = theme.colors.brand
  return (
    <List display={'flex'} pos='relative' zIndex={3}  bgColor='rgba(180, 154, 67, 0.7)' w='100%'  px='2.4rem' justifyContent='space-between' alignItems='center'>
        {
          navigation.map((nav, idx) => (
            <ListItem key={idx}  p='2.0rem' pl={idx === 0 && '0'}>
              <NextLink href={nav.path}>
                 <Link color={white}  fontSize='1.6rem' fontFamily='Century Gothic'>
                      {nav.label}
                 </Link>
              </NextLink>
            </ListItem>
          )
          )
        }
        <ListItem ml='4.0rem'>
            <Button 
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
    </List>
  )
}

export default Navigation
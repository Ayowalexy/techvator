import { Box, Flex, Icon, Image, Link, theme, useTheme } from "@chakra-ui/react"
import {BsFacebook} from 'react-icons/bs'
import {ImLinkedin2} from 'react-icons/im'
import AMHButton from "./Button"

import Container from "./Container"


function Header() {
  const theme = useTheme()

  return (
    <Container py='1.5rem'>
        <Flex  alignItems='center' justifyContent='space-between' >
            <AMHButton href="/sign-up" label="Become a member" />

            {/* Logo */}
            <Image src="/imgs/logo@2x.png" alt="amachulbi logo" w='14.7rem' h='5.2rem' transform='translateX(-50%)' />

          {/* Socials */}
          <Flex alignItems='flex-start' p='1rem'>
                <Link href="#" mr='1.6rem'>
                   <Icon as={BsFacebook} w='2.4rem' h='2.4rem'  />
                </Link>
                <Link>
                    <Flex alignItems='center' justifyContent='center' bg={theme.colors.brand.white} w='2.4rem' h='2.4rem' borderRadius='100vw' >
                      <Icon as={ImLinkedin2} w='1.6rem' h='1.6rem'  color='black' />
                    </Flex>
                </Link>
          </Flex>

        </Flex>
    </Container>
  )
}

export default Header
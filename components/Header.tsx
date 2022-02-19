import { Box, Flex, Icon, Image, Link, theme, useTheme } from "@chakra-ui/react"
import {BsFacebook} from 'react-icons/bs'
import {ImLinkedin2} from 'react-icons/im'
import AMHButton from "./Button"

import Container from "./Container"
import { FacebookIcon, InstagramIcon } from "./Socials"


function Header(): JSX.Element {
  const theme = useTheme()

  return (
    <Container py='1.5rem' bg='url("/imgs/topbackground.jpg")' bgRepeat='no-repeat' >
        <Flex  alignItems='center' justifyContent='space-between' >
            <AMHButton href="/sign-up" label="Become a member" />

            {/* Logo */}
            <Image mt='-1rem' src="/imgs/logo@2x.png" alt="amachulbi logo" w='14.7rem' h='5.2rem' transform='translateX(-50%)' />

          {/* Socials */}
          <Flex alignItems='flex-start' p='1rem'>
                <Link href="#" mr='1.6rem'>
                   <FacebookIcon />
                </Link>
                <Link>
                    <InstagramIcon />
                </Link>
          </Flex>

        </Flex>
    </Container>
  )
}

export default Header
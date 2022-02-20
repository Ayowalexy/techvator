import { Box, Flex, Image, Link, useTheme } from "@chakra-ui/react"
import NextLInk from "next/link"
import { useRouter } from "next/router"
import ButtonLink from "./Button"

import Container from "./Container"
import { FacebookIcon, InstagramIcon } from "./Socials"


function Header(): JSX.Element {
  const theme = useTheme()
  const router = useRouter()

  // remove become a member with this url
  const url = {
    '/create-account': '/create-account',
    '/login': '/login',
    '/password/reset': '/password/reset',
  }



  return (
    <Container py='1.5rem' bg='url("/imgs/topbackground.jpg")' bgRepeat='no-repeat' bgSize='cover' pos='relative' zIndex='banner' >
        <Flex  alignItems='center' justifyContent='space-between' >
           { !url[router.pathname] ? <ButtonLink href="/create-account" label="Become a member" /> : <Box w='17.9rem' /> } 

            {/* Logo */}
            <NextLInk href="/">
              <Link>
              <Image mt='-1rem' src="/imgs/logo@2x.png" alt="amachulbi logo" w='14.7rem' h='5.2rem' transform='translateX(-50%)' />
              </Link>
            </NextLInk>

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
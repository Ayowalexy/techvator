import { Flex, Icon, useTheme } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";

export const  FacebookIcon = ()  => <Icon as={BsFacebook} w='2.4rem' h='2.4rem'  />

type InstagramIconProps = {
    color?: string
}
export const InstagramIcon = ({ color = 'black'}: InstagramIconProps) => {
  const theme =  useTheme()
    return (
        <Flex alignItems='center' justifyContent='center' bg={theme.colors.brand.white} w='2.4rem' h='2.4rem' borderRadius='100vw' >
            <Icon as={ImLinkedin2} w='1.6rem' h='1.6rem'  color={color} />
        </Flex>
    )
}
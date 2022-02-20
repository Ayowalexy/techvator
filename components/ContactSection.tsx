import { Box, Flex, FlexProps, HeadingProps, Text, useTheme, Button as ChakraButton, background } from "@chakra-ui/react"
import {BsTelephoneFill} from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { SiMinutemailer } from 'react-icons/si'
import ButtonLink from "./Button"
import Container from "./Container"
import FormInput from "./Forms/FormInput"
import FormTextArea from "./Forms/FormTextArea"
import HeaderTag from "./HeaderTag"
import { FacebookIcon, InstagramIcon } from "./Socials"

type ContactDetailProp = {
    icon: JSX.Element,
    info: string,
    headerProp?: HeadingProps,
    iconContainerProps?: FlexProps
}

function ContactDetail({icon, info, headerProp, iconContainerProps }: ContactDetailProp) {
    return (
        <Flex alignItems='center' mb='1.5rem'>
             <Flex mr='2rem' w='2.726rem' h='2.726rem' border={`2px solid white`} borderRadius='full' alignItems='center' justifyContent='center' {...iconContainerProps}>
                {icon}
             </Flex>

             <HeaderTag  fontFamily='Montserrat' fontSize='2.1rem' fontWeight='600' margin='unset' {...headerProp}>
                    {info}
             </HeaderTag>
        </Flex>
       
    )
}



function ContactSection() {

const theme =   useTheme()
const {metallicSunburst, roti, white, black} = theme.colors.brand
    

  return (
    <Container bg='url("/imgs/contact-sectionbg.png")' bgSize='120% 100%' bgRepeat='no-repeat' bgColor={black}>
        <Flex flexDir={['column', 'column', 'row', 'row']}>
            {/* Contact Details */}
            <Box flex='0.4' px='6rem' py='12rem'>
                    <HeaderTag textAlign='left' fontSize='3.8rem'>Let's talk</HeaderTag>
                    <Text mb='2rem' maxW='30rem'>Amahlubi online helps you connect and share with the nation of Amahlubi</Text>
                    <ContactDetail icon={<BsTelephoneFill />} info="(010) 109 8604"  />
                    <ContactDetail icon={<IoMdMail />} info="info@AmaHlubi.co.za" headerProp={{ fontSize: '1.1rem', fontWeight:'500' }}/>

                    <Flex alignItems='center' mt='2rem'>
                        <ButtonLink _hover={{background: 'transparent', borderColor: white}} bg={metallicSunburst} borderColor={metallicSunburst} p='.6rem 2rem' label="Become a member" fontSize='1.2rem' href="#" />
                         <Flex alignItems='center' mx='1rem'>
                            <FacebookIcon />
                            <ButtonLink ml='.5rem' p='.5rem 2rem' label="Follow" textTransform='capitalize' href="#" />
                         </Flex>
                         <Flex alignItems='center' mx='1rem'>
                         <InstagramIcon />
                        <ButtonLink ml='.5rem' p='.5rem 2rem' label="Follow" textTransform='capitalize' href="#" />
                         </Flex>
                    </Flex>
            </Box>

            {/* Forms */}
            <Box  bgColor={black} flex='0.6' py='12rem' px='6rem' borderLeft={`2px solid ${metallicSunburst}`}>
                    <HeaderTag mb='1rem' verticalAlign='middle' fontSize='1.4rem' lineHeight={3.6} fontWeight='600' fontFamily='Montserrat' textAlign='left'>GET IN TOUCH</HeaderTag>
                    <form>
                        <Box borderTop={`2px solid ${white}`}  py='3rem'>
                            <Flex my='0.5rem' w='100%'>
                                <FormInput  label="First Name" containerProps={{mr: '2rem'}}  />
                                <FormInput  label="Last Name" />
                            </Flex>
                            <Flex my='2rem' w='100%'>
                                <FormInput inputProps={{ onChange: () => console.log('hello'), value:'' }} label="Email" containerProps={{mr: '2rem'}}  />
                                <FormInput  label="Tel/Mobile" />
                            </Flex>
                            <Box>
                                <FormTextArea label="Message" />
                            </Box>
                            <Box my='4rem'>
                                <ChakraButton 
                                _hover={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: white,
                                }} 
                                _focus={{
                                    background: 'transparent',
                                    outline: 'none',
                                    boxShadow: 'none'
                                }}
                                _active={{
                                    background: 'transparent'
                                }}
                                fontSize='xl' 
                                border='none' 
                                bg='transparent' 
                                color={roti}  
                                type="submit"
                                >
                                    SEND <SiMinutemailer size='2rem' style={{ marginLeft: '.5rem'}} />
                                </ChakraButton>
                            </Box>
                        </Box>

                    </form>
            </Box>
        </Flex>
    </Container>
  )
}

export default ContactSection
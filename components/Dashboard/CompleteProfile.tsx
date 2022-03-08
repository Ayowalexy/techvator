import { Box, Flex, Link, Stack, Text, useTheme } from '@chakra-ui/react'
import React from 'react'
import Button, { Btn } from '../Button'
import Container from '../Container'
import FormInput from '../Forms/FormInput'
import HeaderTag from '../HeaderTag'

type CompleteProfileProps = {

}

function CompleteProfile({}: CompleteProfileProps): JSX.Element {
    const theme = useTheme()
    const {  black, metallicSunburst, white } = theme.colors.brand
  return (
        <Container w='100vw' h='100%' bg={`rgba(0, 0, 0,.5)`} pos='fixed' zIndex='popover'>
          <Flex  alignItems='stretch' justifyContent='center' py='calc(100% * 0.15)'>
            <Flex  w='100%' p='1.2rem 5.6rem' maxW='100rem' h='100%' borderRadius='lg' flexDir='column' bg={black} >
                    <Flex alignItems='center'>
                        <Box flex='1'>
                          <HeaderTag textAlign='left'  mb='.7rem' fontSize='1.7rem' fontWeight='600' letterSpacing='unset'>
                          Complete Profile
                          </HeaderTag>
                          <Text fontSize='1.1rem'>Let's get to meet you</Text>
                        </Box>

                        <Btn border='unset !important'
                         background='unset'
                        h='unset' 
                        alignSelf='center' 
                        fontWeight='semibold'
                        >
                          Skip, i will do it later
                        </Btn>
                    </Flex>
                    <Box bg={black} >
                  
                      <form>
                          <Stack spacing='1.7rem'>
                              {/* File Upload Component*/}
                               <Flex alignItems='center'>
                                    <Box pos='relative' w='6.0rem' h='6.0rem' bg='red'>

                                    </Box>
                               </Flex>

                              <Flex alignItems='center' flexDir={['column', 'column', 'column', 'row']}>
                                  <FormInput label="Email Address" 
                                  containerProps={{
                                    flexDir: 'column'
                                  }} 
                                  labelProps={{
                                    alignSelf: 'flex-start',
                                    borderRight: 'unset',
                                    fontSize: '1.1rem',
                                    fontWeight: '800'
                                  }}
                                  inputProps={{
                                    id:'email',
                                    type:'email',
                                    borderRadius:'md',
                                    border: `2px solid ${metallicSunburst} !important`,
                                    p: '2.5rem'
                                  }}
                                  />
                              </Flex>

                              <Flex alignItems='center' flexDir={['column', 'column', 'column', 'row']}>
                                  <FormInput 
                                  label="Password" 
                                  containerProps={{
                                    flexDir: 'column'
                                  }} 
                                  labelProps={{
                                    alignSelf: 'flex-start',
                                    borderRight: 'unset',
                                    fontSize: '1.1rem',
                                    fontWeight: '800'
                                  }}
                                
                                  />
                              </Flex>

                              <Flex  flexDir='column'>
                              <HeaderTag 
                                textTransform='uppercase'
                                letterSpacing='unset'
                                as='h3' 
                                fontSize='1.1rem'
                                fontFamily='Montserrat'
                                fontWeight='semibold'
                                my='1.4rem'
                                >
                                    Forgot your password? <Link href='/password/reset'><a>Reset here</a></Link>
                            </HeaderTag>
                                  <Btn mt={['1.5rem', '1.5rem', '1.5rem', '0']}   size='lg' type='submit'>Log in</Btn>
                              </Flex>
                          </Stack>
                      </form>

                      <HeaderTag 
                          textTransform='uppercase'
                          letterSpacing='unset'
                          as='h3' 
                          fontSize='1.1rem'
                          textAlign='left' 
                          fontFamily='Montserrat'
                          fontWeight='semibold'
                          >
                            Dont have an account? <Link href='/create-account'><a>Sign up</a></Link>
                      </HeaderTag>
                    </Box>
                </Flex>
            </Flex>
        </Container>
  )
}

export default CompleteProfile
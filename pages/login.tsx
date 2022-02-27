import { border, Box, Flex, InputLeftAddon, InputRightAddon, Stack, useTheme } from "@chakra-ui/react"
import {AiOutlineEyeInvisible ,AiOutlineEye } from 'react-icons/ai'
import { SyntheticEvent, useState } from "react"
import  Head  from "next/head"
import FormInput from "../components/Forms/FormInput"
import FormSelect from "../components/Forms/FormSelect"
import HeaderTag from "../components/HeaderTag"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"
import { Btn } from "../components/Button"
import Link from "next/link"


function login() {
  const theme = useTheme()
  const { black, metallicSunburst } = theme.colors.brand
  const [passwordVisible, setPasswordVisible ] = useState(false)

  const togglePasswordVisiblity = (e: SyntheticEvent) => {
      e.preventDefault()
      setPasswordVisible(!passwordVisible)
  }

  return (
    <div>
      <Head>
        <title>Create Account - Amahlubi </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
          <Wrapper>
                <Flex justifyContent='center' alignItems='center' flexDir='column' pos='relative' zIndex={1} >
                    <HeaderTag mb='1.8rem' fontWeight='600' letterSpacing='unset'>
                        Sigin into to your Account
                    </HeaderTag>
                    <Box bg={black} padding='1.2rem 3.2rem' borderRadius='md' maxW='48.3rem' w='100%' >
                      <HeaderTag mt='unset' letterSpacing='unset' textAlign='left' fontSize='1.7rem' mb='1.8rem' fontWeight='600'>
                         Enter login details
                      </HeaderTag>
                      <form>
                          <Stack spacing='1.7rem'>
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
                                  inputProps={{
                                    id:'password',
                                    type: passwordVisible ? 'text' : 'password',
                                    borderRadius:'md',
                                    border: `2px solid ${metallicSunburst} !important`,
                                    borderRight:'none !important',
                                    p: '2.5rem'
                                  }}
                                  inputRightAddon= {
                                  <InputRightAddon  
                                  onClick={(e) => togglePasswordVisiblity(e)}
                                  as='button'
                                  height='inherit'
                                  border={`2px solid ${metallicSunburst} !important`} 
                                  borderLeft='none !important'
                                  bg='transparent' 
                                  children={passwordVisible ? <AiOutlineEyeInvisible size='2rem' /> : <AiOutlineEye size='2rem'/> }
                                  />
                                }
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
          </Wrapper>
      </Layout>
    </div>
  )
}

export default login
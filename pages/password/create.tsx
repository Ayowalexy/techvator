import { border, Box, Flex, InputLeftAddon, InputRightAddon, Stack, useTheme } from "@chakra-ui/react"
import {AiOutlineEyeInvisible ,AiOutlineEye } from 'react-icons/ai'
import { SyntheticEvent, useState } from "react"
import  Head  from "next/head"
import FormInput from "@/components/Forms/FormInput"
import HeaderTag from "@/components/HeaderTag"
import Layout from "@/components/Layout"
import Wrapper from "@/components/Wrapper"
import { Btn } from "@/components/Button"
import Link from "next/link"


function createnew() {
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
                        Setup new password 
                    </HeaderTag>
                    <Box bg={black} px='3.2rem' py='7rem' borderRadius='md' maxW='48.3rem' w='100%'>
                      <HeaderTag mt='unset' letterSpacing='unset' textAlign='left' fontSize='1.7rem' mb='1.8rem' fontWeight='600'>
                         Setup password
                      </HeaderTag>
                      <form>
                          <Stack spacing='1.7rem'>
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

                              <Flex alignItems='center' flexDir={['column', 'column', 'column', 'row']}>
                                  <FormInput 
                                  label="Confirm Password" 
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
                                  <Btn mt={['1.5rem', '1.5rem', '1.5rem', '0']}   size='lg' type='submit'>Create password</Btn>
                              </Flex>
                          </Stack>
                      </form>
                      <HeaderTag 
                          
                          letterSpacing='unset'
                          as='h3' 
                          fontSize='1rem'
                          // textAlign='left' 
                          fontFamily='Montserrat'
                          fontWeight='semibold'
                          >
                            Password updated successfully
                      </HeaderTag>
                
                    </Box>
                </Flex>
          </Wrapper>
      </Layout>
    </div>
  )
}

export default createnew
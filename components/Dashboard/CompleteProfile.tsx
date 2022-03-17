import { Box, Flex, Link, Stack, Text, useTheme, Modal, ModalBody, ModalContent, useDisclosure, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Btn } from '@/components/Button'
import Container from '@/components/Container'
import FormInput from '@/components/Forms/FormInput'
import FormSelect from '@/components/Forms/FormSelect'
import HeaderTag from '@/components/HeaderTag'
import ProfileUpload from '@/components/Uploads/ProfileUpload'
import FormTextArea from '../Forms/FormTextArea'
import { useIsomorphicLayoutEffect } from 'framer-motion'

type CompleteProfileProps = {

}

function CompleteProfile({}: CompleteProfileProps): JSX.Element {
    const { isOpen , onOpen, onClose } = useDisclosure()
    const theme = useTheme()
    const {  black, metallicSunburst, white } = theme.colors.brand
    const [imageFile, setImageFile] = useState()

 

    useIsomorphicLayoutEffect(() => {
        onOpen()
    }, [])
 

  return (
        <Modal  size={'6xl'} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg='transparent' p='0'>
          <ModalBody  alignItems='stretch' justifyContent='center' py='calc(100% * 0.15)'>
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
                        onClick={() => onClose()}
                        >
                          Skip, i will do it later
                        </Btn>
                    </Flex>
                    <Box bg={black} >
                  
                      <form>
                          <Stack spacing='1.7rem'>
                              {/* File Upload Component*/}
                               <Flex alignItems='center'>
                                   <ProfileUpload imageFile={imageFile} setImageFile={setImageFile} />
                               </Flex>

                              <Flex alignItems='center' flexDir={['column', 'column', 'column', 'row']}>
                                  <FormInput label="Occupation" 
                                  containerProps={{
                                    flexDir: 'column',
                                    mr: {base: 0, lg: '3.9rem'}
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

                                  <FormInput label="Living In" 
                                  containerProps={{
                                    flexDir: 'column',
                                    ml: { base: '0', lg: '1rem' }
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
                                <FormSelect label="Gender" 
                                  containerProps={{
                                    flexDir: 'column',
                                    mr:{ base: 0, lg: '3.9rem' }
                                  }} 
                                  labelProps={{
                                    alignSelf: 'flex-start',
                                    borderRight: 'unset',
                                    fontSize: '1.1rem',
                                    fontWeight: '800'
                                  }}
                                  selectProps={{
                                    id:'gender',
                                    borderRadius:'md',
                                    border: `2px solid ${metallicSunburst} !important`,
                                    size: 'lg',
                                    sx:{
                                      '&.chakra-select': {
                                        height: '5.4rem'
                                      }
                                    }
                                  }}
                                  >
                                      <option value='Female'> Female</option>
                                      <option value='Male'> Male</option>
                                  </FormSelect>

                                  <FormInput label="Date of Birth" 
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

                            

                              <Flex alignItems={{base: 'flex-start', lg: 'center'}}  flexDir={{base:'column', lg:'row'}}>
                                  <FormTextArea 
                                    containerProps={{
                                      flexDir: 'column',
                                      mr: { base: '0', lg: '3.9rem' },
                                      border: 'none !important'
                                      
                                    }} 
                                  label="About me" 
                                  labelProps={{
                                    alignSelf: 'flex-start',
                                    borderRight: 'unset',
                                    fontSize: '1.1rem',
                                    fontWeight: '800'
                                  }}
                                  textAreaProps={{
                                    placeholder: 'Less than 500 words',
                                    id:'aboutMe',
                                    borderRadius:'md',
                                    border: `2px solid ${metallicSunburst} !important`,
                                    p: '2.5rem',
                                    rows: 2
                                  }}

                                  />
          
                                 <Flex flex='1'  alignItems='center'>
                                     <Btn 
                                     display='block'
                                     w='100%'
                                     justifySelf='stretch'  
                                     mt={['1.5rem', '1.5rem', '1.5rem', '1.5rem']}
                                     py='1.5rem'   
                                     size='lg' 
                                     type='submit'
                                     textTransform='uppercase'
                                     >
                                       Save profile
                                    </Btn>
                                 </Flex>
                              </Flex>
                          </Stack>
                      </form>
                    </Box>
                </Flex>
            </ModalBody>
            </ModalContent>
        </Modal>
  )
}

export default CompleteProfile
import { Flex, Icon, InputLeftAddon, useTheme } from '@chakra-ui/react'
import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import FormInput from '@/components/Forms/FormInput'
import Container from './Container'
import { Btn } from './Button'

function Search(): JSX.Element {

    const theme = useTheme()
    const { black, metallicSunburst, white } = theme.colors.brand
    
  return (
    <Container>  
    <Flex 
    as='form' 
    alignItems='center' 
    justifyContent={{base: 'stretch', lg: 'center'}} 
    py={{base: '2rem', lg: '5rem'}}
    maxW='80rem'
    mx='auto'
    >
             <FormInput 
                label="" 
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
                id:'search',
                borderRadius:'md',
                border: `2px solid ${metallicSunburst} !important`,
                p: '2rem'
                }}
                inputLeftAddon= {
                <InputLeftAddon  
                height='inherit'
                border={`2px solid ${metallicSunburst} !important`} 
                bg='transparent' 
                children={<Icon as={BiSearchAlt2} w='2.4rem' h='2.4rem' />} 
                />
            }
            />
            <Btn
             background='transparent' 
             border={`1px solid ${white} `} 
             type='submit' 
             mt='.5rem' 
             ml='1rem'
             p='.5rem 3rem'
             display={{base: 'none', 'md': 'inline-block', lg: 'inline-block'}}
             > 
             SEARCH 
             </Btn>
    </Flex>
    </Container>
  )
}

export default Search
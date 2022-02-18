import { Box, Grid, Heading, Image, Text, useTheme } from "@chakra-ui/react"
import { theAmahlubist } from "../../data/the-amahlubist"
import Container from "../Container"


function TheAmahlubist(): JSX.Element {
   const theme = useTheme()
   const {roti,rotiLight, black, metallicSunburst} = theme.colors.brand
   
   const renderTheAmahlubist = (user) => {
       return (
          <Box>
              <Image src={user?.img} alt={user?.name} w='27.1rem'  />
              <Text my='1.5rem' textAlign='center' fontWeight={600} color={metallicSunburst}>{user?.name}</Text>
          </Box>
       );
   }
  return (
    <Container pos='relative' pt='10rem' pb='5rem'  bgColor={rotiLight} bg='url("/imgs/amhubist-background-01.jpg")' bgSize='contain' bgRepeat='no-repeat'>
        <Box pos='relative' zIndex={2}>
            <Heading as='h3' my='3rem' color={black} fontSize='3.1rem' fontFamily='Century Gothic' fontWeight='600' textAlign='center'> 
                Meet 'THE' Amahlubists 
            </Heading>
            <Grid gap='2rem' mt='5rem' px='3rem' templateColumns="repeat(auto-fit,minmax(18rem, 1fr))">
                {
                    theAmahlubist.map((user, idx) => {
                       return (
                       <Box mx='auto' key={idx}>
                            {renderTheAmahlubist(user)}
                        </Box>
                       )
                    })
                }
            </Grid>
        </Box>
        <Box pos='absolute' w='100%'  height={['80%','30%']} bgColor='white' left='0' bottom='0' />
    </Container>
  )
}

export default TheAmahlubist
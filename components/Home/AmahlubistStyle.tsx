import { background, Box, Flex, Grid, Heading, Text, useTheme } from  '@chakra-ui/react'
import { amahlubistLifeStyle } from '../../data/the-amahlubist'
import Button from '../Button'
import Container from "../Container"
import HeaderTag from '../HeaderTag'


function AmahlubistStyle() {
    const theme = useTheme()
    const {  white, black, roti } = theme.colors.brand


    function replaceJSX(str, find, replace) {
        let result;
        let parts = str.split(find);
        for(let i = 0, result = []; i < parts.length; i++) {
            result.push(parts[i]);
            result.push(replace);
        }
        return result;
    }

 const renderCard = (lt, idx) => {
     const isEven = idx % 2 === 0
     const subTitle = lt?.subTitle.toString().replace('"Black-Excellent"', '<b>"Black-Excellent"</b>').replace('ZunguNation...', '<b>ZunguNation...</b>')
    return (
        <Flex bg={ isEven ? roti : black}  flexDir='column' p='4rem 3rem' h='100%'  >
            <HeaderTag fontSize='1.6rem' mb='3rem' textAlign='center' >{lt?.title}</HeaderTag>
            <Text textAlign='justify' dangerouslySetInnerHTML={{ __html: subTitle}} />
            
            <Flex alignItems='flex-end' justifyContent='center' mt='2rem'  flex={1}>
              <Button _hover={{background: isEven ? black : roti}}  label='Learn More' href={lt?.url} textTransform='capitalize' />
            </Flex>
        </Flex>
    )
 }

  return (
    <Container  pt='5rem' pb='10rem'   bg='url("/imgs/life-style-section-01.jpg")' bgSize='100% 100%' bgRepeat='no-repeat'>
             <Box pos='relative' zIndex={2}>
             <HeaderTag 
                pos='relative'
                _after={{
                    content: '""',
                    height: '.3rem',
                    width: '20rem',
                    background: white,
                    display: 'block',
                    margin: '0 auto',
                    marginTop: '2rem'
                }}
             >
                Amahlubi Lifestyle 
             </HeaderTag>

             <Text textAlign='center' fontSize='1.4rem'>
                 Whoever thought a time would come when achievements is this celebrated and put on a pedestal it so finely desere
             </Text>

             <Grid gap='2rem' my='10rem' px='3rem' gridAutoRows='minmax(min-content, max-content)' templateColumns="repeat(auto-fit,minmax(18rem, 1fr))">
                {
                    amahlubistLifeStyle.map((ls, idx) => {
                       return (
                       <Box mx='auto' key={idx}>
                            {renderCard(ls, idx)}
                        </Box>
                       )
                    })
                }
            </Grid>


            </Box>
    </Container>
  )
}

export default AmahlubistStyle
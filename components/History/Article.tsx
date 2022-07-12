import React from 'react'
import {
    Box,
    Container,
    Text,
    Flex

} from '@chakra-ui/react'


function Article() {
    return (
        // <Container
        //     width='100%'
        // >
            <Box
                padding={20}
            >
                <Flex>
                    <Text fontSize='20px'>Written on</Text>
                    <Text fontSize='20px' paddingLeft={5} fontWeight='bold'>23rd April 2022</Text>
                </Flex>
                <Text
                    fontSize={{ base: "1rem", lg: "1.8rem" }}
                    lineHeight="2"
                    mt=".7rem"
                    mb={{ base: "1rem", md: "3.5rem" }}
                    color='#9D9C9C'
                >
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Text>
                <Text
                    pt={20}
                    fontSize={{ base: "1rem", lg: "1.8rem" }}
                    lineHeight="2"
                    mt=".7rem"
                    mb={{ base: "1rem", md: "3.5rem" }}
                    color='#9D9C9C'
                >
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </Text>
            </Box>
        // </Container>
    )
}

export default Article
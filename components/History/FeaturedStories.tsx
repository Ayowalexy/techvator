import React from "react";
import {
     Box,
     Container,
     Flex,
     Text
     } from "@chakra-ui/react";



function FeaturedStories () {


    const Card = () => (
        <Flex>
            <Box
                bgImage={{
                    base: 'url("/imgs/community/large-placeholder.png")',
                }}
                width={{
                    base: '200px', sm: '100px', md: '110px'
                }}
                height='90px'
                bgSize='contain'
                borderRadius={10}
            />
            <Box paddingLeft={15} width='50%'>
                <Text fontSize={18}>Life Hacks</Text>
                <Text fontSize={15} color='#9D9C9C'>There are many variations of passages of Lorem Ipsum available, but the majority</Text>
            </Box>
        </Flex>
    )


    return (
        <Box
        padding={20}
        >
            <Text fontSize={16}>FEATURED STORIES</Text>
            <Flex paddingTop={30}>
                <Card />
                <Card />
            </Flex>
        </Box>
    )
}

export default FeaturedStories
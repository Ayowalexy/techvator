import React from "react";
import {
    Box,
    Flex,
    Text,
    Container,
    Spacer
} from '@chakra-ui/react'


function CommentCard() {
    return (
        <Flex
            flexDir='row'
            alignItems='center'
            justifyContent='flex-end'
            minWidth='max-content'
            width={620}
            marginTop={10}
        >
           
            <Box
                bgImage={{
                    base: 'url("/imgs/community/large-placeholder.png")',
                }}
                width='90px'
                marginRight={10}
                height='90px'
                bgSize='contain'
                borderRadius={100}
            />
           
                <Box
                    float='left'
                    width={400}
                    borderRadius={10}
                    padding={16}
                    bgColor='#4E4F50'
                >
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                </Box>
            
        </Flex>
    )
}

export default CommentCard
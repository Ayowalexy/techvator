import {
    Box,
    Container,
    Flex,
    Text,
    useTheme,
    Textarea
} from '@chakra-ui/react'
import { useState } from 'react';
import CommentCard from './CommentCard';


function Comment() {
    const [comment, setComment] = useState('');
    const handleChange = (event: any) => {
        const value = event.target.value;
        setComment(value)
    }
    const { theme } = useTheme();
    return (
        <Container>
            <Flex
                justify='center'
                alignItems='center'
                flexWrap='wrap'
                width={{
                    base: '200px', md: '800px', sm: '250px'
                }}
            >
                <Box
                    bgImage={{
                        base: 'url("/imgs/home/Hlubi-Nboya@2x.png")',
                    }}
                    bgPosition='center'
                    bgSize='contain'

                    w={85}
                    h={85}
                    borderRadius={100}
                >
                </Box>
                <Box

                    flexGrow={1}
                    marginLeft={10}
                >
                    <Box
                        borderRadius='20px'

                    >
                        <Textarea
                            value={comment}
                            onChange={handleChange}
                            placeholder='What is your comment?'
                            size='sm'
                            border='none'
                            fontSize='15px'
                            borderRadius={8}
                            width={{
                                base: '200px', sm: '100px', md: '531px'
                            }}
                            height='111px'
                            backgroundColor='#4E4F50'

                        />
                    </Box>

                </Box>
                <Box
                    width='100px'
                    borderWidth={1}
                    borderColor='#fff'
                    cursor='pointer'
                    padding='5px 10px'
                    marginTop={20}
                    alignItems='flex-end'
                    marginLeft='350px'
                    justifyContent='flex-end'
                >
                    <Text>Comment</Text>
                </Box>
            </Flex>

            <Flex
            justify='center'
            flexDirection='column'
            marginTop={30}
             width={{
                base: '200px', md: '600px', sm: '250px'
            }} 
            >
                {/* <Text>No Comments Yet</Text> */}

                <CommentCard />
                <CommentCard />
                <CommentCard />
            </Flex>


        </Container>
    )
}


export default Comment
import React, { useState, ChangeEventHandler } from 'react'
import {
    Box,
    Text,
    Flex,
    Container,
    Icon,
    useTheme,
    FormControl,
    Input
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai'

const data = [
    {
        header: 'Life Hacks',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
    },
    {
        header: 'Money Hacks',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
    },
    {
        header: 'Health Hacks',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
    },
    {
        header: 'Marriage Hacks',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
    },

]


function SearchBar({ type }) {
    const theme = useTheme();
    const [value, setValue] = useState('')
    const { roti, white, metallicSunburst } = theme.colors.brand;
    const [result, setResults] = useState([])

    const handleChange = (event: any) => {
        const text = event.target.value;
        const element = data.filter(ele => ele.header.toLowerCase().includes(text.toLowerCase()))
        setResults(element)
        if (text.length == 0) {
            setResults([])
        }
    }



    const SearchResult = ({ val }) => {
        return (
            <Flex
                width={{
                    base: '200px', md: '400px'
                }}
                pt={20}>
                <Box
                    bgImage={{
                        base: 'url("/imgs/community/large-placeholder.png")',
                    }}
                    width='200px'
                    marginRight={10}
                    height='90px'
                    bgSize='contain'
                    borderRadius={10}
                />
                <Box pl={5}>
                    <Text fontSize={18}>{val?.header}</Text>
                    <Text fontSize={15} color='#9D9C9C'>{val?.text}</Text>
                </Box>
            </Flex>
        )
    }
    return (
        <Container
            maxW='container.md'
        >
            <Flex
                // border='1px solid green'
                alignItems="center"
                justifyContent={{ base: "stretch", lg: "center" }}
                py={{ base: "2rem", lg: "5rem" }}
                maxW="80rem"
                mx="auto"
                width={{
                    base: '200px', md: '800px'
                }}
            >
                <Flex
                    borderWidth={2}
                    borderColor={metallicSunburst}
                    height={51}
                    width={51}
                    justifyContent='center'
                    alignItems='center'
                    borderTopLeftRadius={8}
                    borderBottomLeftRadius={8}

                >
                    <Icon
                        as={AiOutlineSearch}
                        w="2rem"
                        h="1.6rem"
                        color="#9D9D9D"
                    />
                </Flex>
                <Box
                    flexGrow={1}
                    height={51}
                    borderTopRightRadius={8}
                    borderBottomRightRadius={8}
                    borderWidth={2}
                    borderColor={metallicSunburst}
                // padding={10}
                >
                    <FormControl>
                        <Input
                            placeholder='A pro-aging mindset will help you enjoy'
                            fontSize={15}
                            outline='none'
                            onChange={handleChange}
                            border='none'
                            variant='unstyled'
                            padding={5}
                        />
                    </FormControl>
                </Box>
                <Flex
                    width={200}
                    height={51}
                    borderWidth={1}
                    marginLeft={10}
                    borderRadius={8}
                    borderColor={white}
                    padding={10}
                    transition='ease all 500ms'
                    cursor='pointer'
                    justifyContent='center'
                    alignItems='center'
                    _hover={{
                        backgroundColor: theme.colors.brand.metallicSunburst,
                        border: 0,
                        color: "#000"
                    }}
                >
                    SEARCH
                </Flex>
            </Flex>

            {
                type == 'search' && (<>
                    <Text fontSize={15}>Your Search returned {result?.length} result{result?.length > 1 ? 's' : null}</Text>
                    <Flex
                        flexWrap='wrap'
                        height='60vh'
                        gap={20}
                        width={{
                            base: '200px', md: '1000px'
                        }}
                    >
                        {
                            result?.map((element, idx) => (
                                <SearchResult
                                    key={idx}
                                    val={element}
                                />
                            ))
                        }
                    </Flex>
                </>)
            }
        </Container>
    )
}

export default SearchBar
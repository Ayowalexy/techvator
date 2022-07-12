import {
    Box,
    Flex,
    Container,
    Text,
    Icon,
    useTheme
} from '@chakra-ui/react'
import { useState , useEffect} from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import SearchBar from '../components/History/Search'
import Layout from '../components/Layout'
import { useQuery, useMutation } from 'react-query';
import { getAllBlogPost, deleteABlogPost } from '../public/services/network'
import Preloader from '../components/Preloader'

const datas = [
    {
        name: 'Art',
        articles: [
            {
                header: 'History of Amahlubi',
                text: 'A pro-aging mindset will help you enjoy rather than fear the inevitable',
                time: 'Feb 4 - 5 min read'
            },
            {
                header: 'Bad Girl Vibes',
                text: 'A pro-aging mindset will help you enjoy rather than fear the inevitable',
                time: 'Feb 14 - 35 min read'
            },
            {
                header: 'Dec Hangout with fans',
                text: 'A pro-aging mindset will help you enjoy rather than fear the inevitable',
                time: 'Feb 17 - 7 min read'
            },

        ]
    },
    {
        name: 'Fashion',
        articles: [
            {
                header: 'Bad Girl Vibes',
                text: 'A pro-aging mindset will help you enjoy rather than fear the inevitable',
                time: 'Feb 14 - 35 min read'
            },
            {
                header: 'Dec Hangout with fans',
                text: 'A pro-aging mindset will help you enjoy rather than fear the inevitable',
                time: 'Feb 17 - 7 min read'
            },

        ]
    },
    {
        name: 'Technology',
        articles: [
            {
                header: 'Dec Hangout with fans',
                text: 'A pro-aging mindset will help you enjoy rather than fear the inevitable',
                time: 'Feb 17 - 7 min read'
            },

        ]
    }
]


function Categories () {
    const theme = useTheme();
    const { white, metallicSunburst} = theme.colors.brand;
    const [select, setSelected] = useState([])
    const [type, setType] = useState('')


    const { isLoading, data} = useQuery('blogs', getAllBlogPost)

    const deleteBlogsMutation = useMutation(deleteABlogPost, {
        onSuccess: data => {
            console.log(data?.data)
        }
    })

   

    const Card = ({data, id}) => {
        return (
            <Flex onClick={() => {
                deleteBlogsMutation.mutate(data?._id)
            }}>
                <Text
                    fontSize={20}
                    fontWeight='bold'
                    paddingRight={10}
                    color='#9D9C9C'
                >{id}</Text>
                <Box>
                    <Text fontSize={18} >{data?.title}</Text>
                    <Text color='#9D9C9C' paddingTop={5} width={400} fontSize={16}>{data?.content}</Text>
                    <Text fontSize={13} paddingTop={10}>
                        {new Date(data?.published_at).toDateString()}
                    </Text>
                </Box>
            </Flex>
        )
    }

    return (
        <Layout>
            <Container>
            <SearchBar type='art' />
            <Text 
                textTransform='uppercase'
                textAlign='center'
                fontWeight='bold'
                fontSize={16}
                marginBottom={20}
                >{type ? type : 'Arts'}</Text>
            <Flex
                 gap={80}
                 width={{
                     base: '200px', md: '800px'
                 }}
            >
                <Box>
                    <Flex
                        width={200}
                        height={51}
                        borderWidth={1}
                        borderRadius={8}
                        borderColor={white}
                        transition='ease all 500ms'
                        cursor='pointer'
                        justifyContent='center'
                        alignItems='center'
                        _hover={{
                            backgroundColor: theme.colors.brand.metallicSunburst,
                            border: 0,
                            color: "#000"
                        }}
                    
                    >ALL CATEGORIES</Flex>
                    {
                        ['Art', 'Fashion', 'Technology', 'Construction', 'Finance', 'Entrepreneurship', 'Health', 'Management']
                        .map((element, idx) => (
                            <Flex gap={10} key={idx} pt={7} cursor='pointer' onClick={() => {
                                const match = datas.find(data => data.name == element)
                                setType(element)
                                setSelected(match?.articles)
                            }}>
                                <Box fontSize={16}>{element}</Box>
                                <Icon as={AiOutlineArrowRight} w={8} h={8} color='#fff' />
                            </Flex>
                        ))
                    }
                </Box>
                <Box>
                    {
                        data?.data?.message?.blogs?.map((element: any, idx: any) => (
                            <Card 
                                key={idx}
                                data={element}
                                id={idx + 1}
                            />
                        ))
                    }

                    { isLoading && <Preloader />}
                </Box>
            </Flex>
        </Container>
        </Layout>
    )
}

export default Categories
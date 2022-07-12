import { 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink, 
    LinkProps,
    Box
 } from "@chakra-ui/react"
import { AiOutlineArrowRight } from 'react-icons/ai'


type ButtonLinkProps = LinkProps & {
    label: string;
    href: string;
    icon?: any;
};


const BreadcrumbNav = ({href}) => {
    return (
        <Box pt={30} pl={39}>
            <Breadcrumb spacing='8px' separator={<AiOutlineArrowRight color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Blog</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Art</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>History of Amahlubi</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
    )
}



export default BreadcrumbNav
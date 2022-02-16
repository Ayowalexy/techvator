import { Link, useTheme } from "@chakra-ui/react"
import  NextLink from "next/link"


type ButtonProps = {
    label: string;
    href: string;
}

function Button({ label, href }: ButtonProps): JSX.Element {
    const theme = useTheme()
  return (
    <NextLink href={href}>
    <Link
      p='1rem 1.4rem'
      borderRadius='3.0rem'
      border={`2px solid ${theme.colors.brand.white}`}
      fontSize='1.4rem'
      textDecoration='none !important'
      textTransform='uppercase'
      transition='all 250ms ease-in-out'
      _hover={{
        backgroundColor: theme.colors.brand.roti,
        border:`2px solid ${theme.colors.brand.roti}`
      }}
    >
       {label}
    </Link>
</NextLink>
  )
}

export default Button
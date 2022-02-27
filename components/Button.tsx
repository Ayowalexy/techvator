import { ButtonProps, Link, LinkProps, useTheme, Button } from "@chakra-ui/react"
import  NextLink from "next/link"


type ButtonLinkProps = LinkProps & {
    label: string;
    href: string;
}

function ButtonLink({ label, href, _hover,  ...rest }: ButtonLinkProps): JSX.Element {
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
      {...rest}
      _hover={{
        backgroundColor: theme.colors.brand.roti,
        border:`1px solid ${theme.colors.brand.roti}`,
        ..._hover
      }}
    >
       {label}
    </Link>
</NextLink>
  )
}


type BtnProps = ButtonProps 

function Btn({ children, type, _hover, ...rest  }: BtnProps ){

  const theme = useTheme();

 return (
    <Button
      p='1rem 1.4rem'
      borderRadius='3.0rem'
      border={`2px solid ${theme.colors.brand.roti}`}
      background={theme.colors.brand.roti}
      h='100%'
      fontSize='1.4rem'
      textDecoration='none !important'
      textTransform='uppercase'
      transition='all 250ms ease-in-out'
      _hover={{
        backgroundColor: theme.colors.brand.metallicSunburst,
        border:`1px solid ${theme.colors.brand.metallicSunburst}`,
        ..._hover
      }}
      {...rest}
      >
          {children}
      </Button>
  )
}

export { ButtonLink as default, Btn }
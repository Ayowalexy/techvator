import { Heading, HeadingProps, useTheme } from "@chakra-ui/react";
import React from "react";

function HeaderTag({ children, ...rest }: HeadingProps): JSX.Element {
  const theme = useTheme();
  const { white } = theme.colors.brand;
  return (
    <Heading
      as="h3"
      my="3rem"
      color={white}
      fontSize="3.1rem"
      letterSpacing=".2rem"
      fontWeight="500"
      textAlign="center"
      {...rest}
    >
      {children}
    </Heading>
  );
}

export default HeaderTag;

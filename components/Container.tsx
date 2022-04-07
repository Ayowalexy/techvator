import { Box, BoxProps, useTheme } from "@chakra-ui/react";

import React from "react";

type ContainerProps = BoxProps;

function Container({ children, ...rest }: ContainerProps): JSX.Element {
  const theme = useTheme();
  const { black } = theme.colors.brand;

  return (
    <Box bgColor={black} px="2.4rem" {...rest}>
      {children}
    </Box>
  );
}

export default Container;

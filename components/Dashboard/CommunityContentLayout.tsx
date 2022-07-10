import { Grid } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type CommunityContentLayoutProps = {
  children: ReactNode | ReactNode[];
};
function CommunityContentLayout({
  children,
}: CommunityContentLayoutProps): JSX.Element {
  return (
    <Grid
      py={{ base: "2rem", md: "5rem" }}
      gap="3rem"
      templateColumns={{ base: "1fr", lg: "1fr auto 1fr" }}
    >
      {children}
    </Grid>
  );
}

export default CommunityContentLayout;

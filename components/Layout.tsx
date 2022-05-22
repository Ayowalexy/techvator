import { Box } from "@chakra-ui/react";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Box>
      <Header />
      <Navigation />
      <MobileNavigation />
      {children}
    </Box>
  );
}

export default Layout;

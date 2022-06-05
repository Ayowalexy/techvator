import {
  Link,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  UnorderedList,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { collapseMenuAtom } from "recoilStore/CollapseMenuAtom";
import { isAuthenticatedSelector } from "recoilStore/AuthAtom";
import { navigation } from "../data/navigation";
import ButtonLink, { Btn } from "./Button";
import Button from "./Button";

function MobileNavigation() {
  const theme = useTheme();
  const [isMobileResponsive] = useMediaQuery("(max-width: 62em)");
  const { rotiLight, roti, white, black } = theme.colors.brand;
  const [collapse, setCollapse] = useRecoilState(collapseMenuAtom);
  const isAuthenticated = useRecoilValue(isAuthenticatedSelector);

  return (
    isMobileResponsive && (
      <Drawer
        isOpen={!collapse}
        onClose={() => setCollapse(true)}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent bgColor={black} color={white}>
          <DrawerCloseButton />
          <DrawerBody>
            <List pt="5rem">
              {navigation.map((nav, idx) => (
                <ListItem key={idx} p="1.0rem" margin="0 auto">
                  <NextLink href={nav.path}>
                    <Link
                      color={white}
                      fontSize="1.2rem"
                      fontFamily="Roboto"
                      fontWeight="600"
                      _hover={{
                        color: roti,
                      }}
                    >
                      {nav.label}
                    </Link>
                  </NextLink>
                </ListItem>
              ))}
              {isAuthenticated && (
                <ListItem p="1.0rem" margin="0 auto">
                  <NextLink href="/community">
                    <Link
                      color={white}
                      fontSize="1.2rem"
                      fontFamily="Roboto"
                      fontWeight="600"
                      _hover={{
                        color: roti,
                      }}
                    >
                      Community
                    </Link>
                  </NextLink>
                </ListItem>
              )}
            </List>
          </DrawerBody>
          <DrawerFooter>
            {!isAuthenticated ? (
              <ButtonLink href="/create-account" label="Become a member" />
            ) : (
              <Btn w="100%" h="80%">
                Logout
              </Btn>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  );
}

export default MobileNavigation;

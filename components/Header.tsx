import {
  background,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  useTheme,
} from "@chakra-ui/react";
import NextLInk from "next/link";
import { useRouter } from "next/router";
import { CgMenu } from "react-icons/cg";
import { useRecoilState, useRecoilValue } from "recoil";
import { collapseMenuAtom } from "recoilStore/CollapseMenuAtom";
import { isAuthenticatedSelector } from "recoilStore/AuthAtom";
import ButtonLink from "./Button";

import Container from "./Container";
import { FacebookIcon, InstagramIcon } from "./Socials";

function Header(): JSX.Element {
  const theme = useTheme();
  const router = useRouter();
  const [collapse, setCollapse] = useRecoilState(collapseMenuAtom);
  const isAuthenticated = useRecoilValue(isAuthenticatedSelector);

  // remove become a member with this url
  const url = {
    "/create-account": "/create-account",
    "/login": "/login",
    "/password/reset": "/password/reset",
    "/password/create": "/password/create",
  };

  return (
    <Box>
      <Container
        py="1.5rem"
        // bg='url("/imgs/topbackground.jpg")'
        bgColor="black"
        bgRepeat="no-repeat"
        bgSize="cover"
        pos="relative"
        zIndex="banner"
        px={{ base: "1rem", lg: "4rem" }}
        _before={{
          content: `""`,
          display: "block",
          pos: "absolute",
          right: 0,
          top: 0,
          width: "20%",
          height: "100%",
          bgGradient: "linear(to-r, transparent, white)",
          zIndex: "-1",
        }}
      >
        <Flex alignItems="center" justifyContent="space-between">
          {!url[router.pathname] && !isAuthenticated ? (
            <>
              <ButtonLink
                href="/create-account"
                label="Become a member"
                display={{ base: "none", lg: "block" }}
              />

              <ButtonLink
                href="/create-account"
                label="Membership"
                fontSize="1.2rem"
                mr="auto"
                display={{ base: "block", md: "none" }}
                p={{ base: ".5rem 1rem", lg: "1.5rem 3rem" }}
              />
            </>
          ) : (
            <Box w={{ base: "30%", lg: "17.9rem" }} />
          )}

          {/* Logo */}
          <NextLInk href="/">
            <Link>
              <Image
                mt="-1rem"
                src="/imgs/logo@2x.png"
                alt="amachulbi logo"
                w="14.7rem"
                h="5.2rem"
                transform={{ base: "translateX(-34%)", lg: "translateX(-50%)" }}
              />
            </Link>
          </NextLInk>

          {/* Socials */}
          <Flex alignItems="flex-start" p="1rem">
            <Link
              display={{ base: "none", md: "inline-block" }}
              href="#"
              mr="1.6rem"
            >
              <FacebookIcon />
            </Link>
            <Link display={{ base: "none", md: "inline-block" }}>
              <InstagramIcon />
            </Link>
          </Flex>
          <Box boxSize="3.0rem" display={{ lg: "none" }}>
            <Button
              onClick={() => {
                setCollapse(!collapse);
              }}
              w="inherit"
              h="inherit"
              bg="none !important"
              boxShadow="none"
              outline="none"
              _focus={{ boxShadow: "none" }}
            >
              <Icon
                as={CgMenu}
                w="inherit"
                h="inherit"
                color={theme.colors.brand.white}
              />
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;

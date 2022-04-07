import {
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
import { useRecoilState } from "recoil";
import { collapseMenuAtom } from "recoilStore/CollapseMenuAtom";
import ButtonLink from "./Button";

import Container from "./Container";
import { FacebookIcon, InstagramIcon } from "./Socials";

function Header(): JSX.Element {
  const theme = useTheme();
  const router = useRouter();
  const [collapse, setCollapse] = useRecoilState(collapseMenuAtom);

  // remove become a member with this url
  const url = {
    "/create-account": "/create-account",
    "/login": "/login",
    "/password/reset": "/password/reset",
    "/password/create": "/password/create",
  };

  return (
    <Container
      py="1.5rem"
      bg='url("/imgs/topbackground.jpg")'
      bgRepeat="no-repeat"
      bgSize="cover"
      pos="relative"
      zIndex="banner"
    >
      <Flex alignItems="center" justifyContent="space-between">
        {!url[router.pathname] ? (
          <ButtonLink
            href="/create-account"
            label="Become a member"
            display={{ base: "none", lg: "block" }}
          />
        ) : (
          <Box w="17.9rem" />
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
          <Link href="#" mr="1.6rem">
            <FacebookIcon />
          </Link>
          <Link>
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
  );
}

export default Header;

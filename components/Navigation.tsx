import {
  Link,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  UnorderedList,
  Box,
  Icon,
} from "@chakra-ui/react";
import { MotionList } from "motion";
import NextLink from "next/link";
import { useRecoilValue } from "recoil";
import { collapseMenuAtom } from "recoilStore/CollapseMenuAtom";
import { AuthAtom, isAuthenticatedSelector } from "recoilStore/AuthAtom";
import { navigation } from "../data/navigation";
import ButtonLink from "./Button";
import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";

function Navigation() {
  const theme = useTheme();
  const [isMobileResponsive] = useMediaQuery("(max-width: 62em)");
  const { rotiLight, roti, white, black } = theme.colors.brand;
  const collapse = useRecoilValue(collapseMenuAtom);
  const isAuthenticated = useRecoilValue(isAuthenticatedSelector);
  const user = useRecoilValue(AuthAtom);

  return (
    <Box pos="relative">
      <MotionList
        display={{ base: "none", md: "flex" }}
        flexDir="row"
        pos="relative"
        zIndex={3}
        bgColor={rotiLight}
        w="100%"
        px="2.4rem"
        justifyContent="space-between"
        alignItems={["stretch", "stretch", "stretch", "center"]}
        // initial={{
        //   height: isMobileResponsive ? 0 : "100%",
        // }}
        // animate={{
        //   height: isMobileResponsive && collapse ? "0" : "100%",
        // }}
      >
        {navigation.map((nav, idx) => (
          <ListItem key={idx} p="2.0rem" pl={idx === 0 && "0"} margin="0 auto">
            <NextLink href={nav.path}>
              <Link
                color={white}
                fontSize="1.6rem"
                fontFamily="Roboto"
                fontWeight="600"
              >
                {nav.label}
              </Link>
            </NextLink>
          </ListItem>
        ))}
        <ListItem
          bg={black}
          border={black}
          // borderRadius="3.0rem"
          color={white}
          margin="0 auto"
          mb={["2rem", "2rem", "2rem", "0"]}
          display={["none", "none", "none", "block"]}
          px="3rem"
          py="0.8rem"
          pos="relative"
          role="group"
          // _hover={{
          //   bgColor: rotiLight,
          // }}
        >
          {!isAuthenticated ? (
            <Button
              borderRadius="unset"
              fontFamily="Roboto"
              fontWeight="600"
              label="Reach Out"
              href="#"
              border="unset"
              p="unset"
              textTransform="capitalize"
              _hover={{
                backgroundColor: "unset",
                border: "unset",
                color: white,
                // opacity: ".7",
              }}
            />
          ) : (
            <>
              <Button
                borderRadius="unset"
                fontFamily="Roboto"
                fontWeight="600"
                label="My Account"
                href="#"
                border="unset"
                p="unset"
                textTransform="capitalize"
                _hover={{
                  backgroundColor: "unset",
                  border: "unset",
                  opacity: ".7",
                }}
                icon={<Icon as={IoIosArrowDown} ml="1rem" />}
                // pos="relative"
              />

              <UnorderedList
                opacity={0}
                _groupHover={{
                  opacity: 1,
                }}
                pos="absolute"
                zIndex="popover"
                bg={"black"}
                color="white"
                top="calc(100%)"
                left="50%"
                // mt="1rem"
                transform="translateX(-50%)"
                w="100%"
                styleType="none"
                ml="0"
                p="2rem"
                spacing="3"
              >
                <ListItem>My Profile</ListItem>
                <ListItem>Community</ListItem>
                <ListItem>Logout</ListItem>
              </UnorderedList>
            </>
          )}
        </ListItem>

        {/* Mobile List Options */}
        <ListItem
          borderTop={`.5px solid ${white}`}
          d={["flex", "flex", "flex", "none"]}
          justifyContent="space-between"
          margin="0 auto"
          mb={["2rem", "2rem", "2rem", "0"]}
          pt="2rem"
        >
          {!isAuthenticated && (
            <ButtonLink
              href="/create-account"
              label="Become a member"
              mr="1rem"
            />
          )}
          {console.log(isAuthenticated, "IS AUTHENTICATED....")}
          {/* <ButtonLink
          href="/black-excellence"
          label="Become a member"
          mr="1rem"
        /> */}

          <Button
            fontFamily="Roboto"
            fontWeight="600"
            label="Reach Out"
            borderRadius="unset"
            href="#"
            bg={black}
            color={white}
            border={black}
            px="1.8rem"
            pb="0.8rem"
            textTransform="capitalize"
            _hover={{ backgroundColor: "black", opacity: ".7" }}
          />
        </ListItem>
      </MotionList>
    </Box>
  );
}

export default Navigation;

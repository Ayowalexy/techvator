import { Link, List, ListItem, useTheme } from "@chakra-ui/react";
import { MotionList } from "motion";
import NextLink from "next/link";
import { useRecoilValue } from "recoil";
import { collapseMenuAtom } from "recoilStore/CollapseMenuAtom";
import { navigation } from "../data/navigation";
import ButtonLink from "./Button";
import Button from "./Button";

function Navigation() {
  const theme = useTheme();
  const { rotiLight, roti, white, black } = theme.colors.brand;
  const collapse = useRecoilValue(collapseMenuAtom);
  return (
    <MotionList
      display={"flex"}
      flexDir={["column", "column", "column", "row"]}
      pos="relative"
      zIndex={3}
      bgColor={rotiLight}
      w="100%"
      px="2.4rem"
      justifyContent="space-between"
      alignItems={["stretch", "stretch", "stretch", "center"]}
      overflow="hidden"
      initial={{
        height: 0,
      }}
      animate={{
        height: collapse ? "100%" : "0",
      }}
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
        borderRadius="3.0rem"
        color={white}
        margin="0 auto"
        mb={["2rem", "2rem", "2rem", "0"]}
        display={["none", "none", "none", "block"]}
        px="1.8rem"
        py="0.8rem"
        transition="background-color 250ms ease"
        _hover={{
          backgroundColor: roti,
          border: `1px solid ${roti}`,
        }}
        overflow="hidden"
      >
        <Button
          fontFamily="Roboto"
          fontWeight="600"
          label="Reach Out"
          href="#"
          border="unset"
          p="unset"
          textTransform="capitalize"
          _hover={{ backgroundColor: "unset", border: "unsett", opacity: ".7" }}
        />
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
        <ButtonLink href="/create-account" label="Become a member" mr="1rem" />
        {/* <ButtonLink
          href="/black-excellence"
          label="Become a member"
          mr="1rem"
        /> */}

        <Button
          fontFamily="Roboto"
          fontWeight="600"
          label="Reach Out"
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
  );
}

export default Navigation;

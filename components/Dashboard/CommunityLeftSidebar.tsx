import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Img,
  ImgProps,
  List,
  ListIcon,
  ListItem,
  Text,
  useTheme,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactNode } from "react";
import Router from "next/router";
import { IconType } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { MdOutlineExitToApp } from "react-icons/md";
import { useRecoilState, useRecoilValue } from "recoil";
import { AuthAtom, getFullNameSelector } from "recoilStore/AuthAtom";
import { destroyTheCookie } from "helpers/cookieHandler";
import { AMAHLUBI_ACCESS_TOKEN, AMAHLUBI_REFRESH_TOKEN } from "../../constants";

type CommunityLeftSidebarProps = {};

function CommunityLeftSidebar() {
  const [user, setUser] = useRecoilState(AuthAtom);
  const userFullName = useRecoilValue(getFullNameSelector(user));
  const theme = useTheme();
  const { secondaryBlack, rotiLight } = theme.colors.brand;

  const logout = () => {
    destroyTheCookie(undefined, AMAHLUBI_ACCESS_TOKEN);
    destroyTheCookie(undefined, AMAHLUBI_REFRESH_TOKEN);
    setUser({
      token: "",
      refreshToken: "",
    });
    Router.push("/");
  };

  return (
    <Box pos="relative">
      {/* Desktop */}
      <Box
        display={{ base: "none", lg: "block" }}
        top="2rem"
        left="0"
        pos="sticky"
        pb="1rem"
      >
        <Link href="/user">
          <Flex align="center" cursor="pointer" gap="1rem">
            <Avatar
              size="xl"
              name={userFullName}
              src={user?.avatar}
              // bg="white"
            />
            <Text fontSize="2xl">{userFullName}</Text>
          </Flex>
        </Link>
        <List px="1rem" my="2rem" spacing="1rem">
          {LEFT_SIDEBAR_MENU_ITEM.map((mi, idx) => {
            if (mi.type === "link") {
              return (
                <Link href={mi.url} key={idx}>
                  <a>
                    <ListItem
                      pb="1rem"
                      display="flex"
                      alignItems="center"
                      gap="3rem"
                    >
                      {mi.iconType === "svg" ? (
                        <Avatar
                          size="lg"
                          // @ts-ignore
                          icon={<Icon as={mi.icon} boxSize={8} color="white" />}
                          bg={secondaryBlack["100"]}
                        />
                      ) : (
                        mi.icon
                      )}
                      <Text _hover={{ color: rotiLight }} fontSize="2xl">
                        {mi.title}
                      </Text>
                    </ListItem>
                  </a>
                </Link>
              );
            } else if (mi.type === "button") {
              return (
                <Button
                  onClick={() => mi.onClick(logout)}
                  pl="unset"
                  border="none"
                  bg="none"
                  key={idx}
                  _hover={{
                    bg: "none",
                  }}
                  _active={{
                    border: "none",
                    bg: "none",
                    boxShadow: "none",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  <a>
                    <ListItem
                      pb="1rem"
                      display="flex"
                      alignItems="center"
                      gap="3rem"
                    >
                      {mi.iconType === "svg" ? (
                        <Avatar
                          size="lg"
                          // @ts-ignore
                          icon={<Icon as={mi.icon} boxSize={8} color="white" />}
                          bg={secondaryBlack["100"]}
                        />
                      ) : (
                        mi.icon
                      )}
                      <Text _hover={{ color: rotiLight }} fontSize="2xl">
                        {mi.title}
                      </Text>
                    </ListItem>
                  </a>
                </Button>
              );
            }
          })}
        </List>
      </Box>
      {/* End Desktop Nav */}

      {/* Mobile Navigation */}
      <Flex
        display={{ base: "flex", lg: "none" }}
        alignItems="flex-end"
        justifyContent="space-between"
        px={{ base: "unset", md: "5rem", lg: "unset" }}
      >
        {LEFT_SIDEBAR_MENU_ITEM.map((mi, idx) => (
          <Link href={mi.url} key={idx}>
            <a>
              <Flex
                flexDir="column"
                pb="1rem"
                display="flex"
                alignItems="center"
                gap=".5rem"
              >
                {mi.iconType === "svg" ? (
                  <Avatar
                    size="lg"
                    // @ts-ignore
                    icon={<Icon as={mi.icon} boxSize={6} color="white" />}
                    bg={secondaryBlack["100"]}
                  />
                ) : (
                  mi.icon
                )}
                <Text fontSize="1rem">{mi.title}</Text>
              </Flex>
            </a>
          </Link>
        ))}
        <Link href="/user">
          <Flex
            align="center"
            mb="1rem"
            flexDir="column"
            cursor="pointer"
            gap="1rem"
          >
            <Avatar
              size="xl"
              name={userFullName}
              src={user?.avatar}
              // bg="white"
            />
            <Text fontSize="1rem">{userFullName}</Text>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
}

type MenuItem = {
  title: string;
  icon?: IconType | ImgProps;
  iconType: "img" | "svg";
  url?: string;
  type?: "button" | "link";
  onClick?: (f: any) => Function;
};

const LEFT_SIDEBAR_MENU_ITEM: MenuItem[] = [
  {
    title: "Members",
    icon: FaUserAlt,
    iconType: "svg",
    url: "#",
    type: "link",
  },
  {
    title: "Fund Me",
    icon: RiBankFill,
    iconType: "svg",
    url: "#",
    type: "link",
  },
  {
    title: "Edit Profile",
    icon: HiUserAdd,
    iconType: "svg",
    url: "#",
    type: "link",
  },
  {
    title: "Notification",
    icon: (
      <Img boxSize={{ base: "40px" }} src="/imgs/community/notification.svg" />
    ),
    iconType: "img",
    url: "#",
    type: "link",
  },
  {
    title: "Logout",
    icon: MdOutlineExitToApp,
    iconType: "svg",
    url: "#",
    type: "button",
    onClick: (f: any) => f(),
  },
];

export default CommunityLeftSidebar;

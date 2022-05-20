import {
  Avatar,
  Box,
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
import { IconType } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { MdOutlineExitToApp } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { AuthAtom, getFullNameSelector } from "recoilStore/AuthAtom";

type CommunityLeftSidebarProps = {};

function CommunityLeftSidebar() {
  const userFullName = useRecoilValue(getFullNameSelector);
  const user = useRecoilValue(AuthAtom);
  const theme = useTheme();
  const { secondaryBlack } = theme.colors.brand;

  return (
    <Box pos="relative">
      <Box top="2rem" left="0" pos="sticky" pb="1rem">
        <Flex align="center" gap="1rem">
          <Avatar
            size="xl"
            name={userFullName}
            src={"https://" + user.avatar}
            bg="white"
          />
          <Text fontSize="2xl">{userFullName}</Text>
        </Flex>
        <List px="1rem" my="2rem" spacing="1rem">
          {LEFT_SIDEBAR_MENU_ITEM.map((mi, idx) => (
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
                  <Text fontSize="2xl">{mi.title}</Text>
                </ListItem>
              </a>
            </Link>
          ))}
        </List>
      </Box>
    </Box>
  );
}

type MenuItem = {
  title: string;
  icon?: IconType | ImgProps;
  iconType: "img" | "svg";
  url?: string;
};

const LEFT_SIDEBAR_MENU_ITEM: MenuItem[] = [
  {
    title: "Members",
    icon: FaUserAlt,
    iconType: "svg",
    url: "#",
  },
  {
    title: "Fund Me",
    icon: RiBankFill,
    iconType: "svg",
    url: "#",
  },
  {
    title: "Edit Profile",
    icon: HiUserAdd,
    iconType: "svg",
    url: "#",
  },
  {
    title: "Notification",
    icon: <Img boxSize="40px" src="/imgs/community/notification.svg" />,
    iconType: "img",
    url: "#",
  },
  {
    title: "Logout",
    icon: MdOutlineExitToApp,
    iconType: "svg",
    url: "#",
  },
];

export default CommunityLeftSidebar;

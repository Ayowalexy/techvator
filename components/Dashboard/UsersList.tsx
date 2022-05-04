import { Box, Flex, IconButton, Img, useTheme } from "@chakra-ui/react";
import { MotionFlex } from "motion";
import React, { useState } from "react";
import UserListItem from "./UserListItem";

function UsersList() {
  const theme = useTheme();
  const { secondaryBlack } = theme.colors.brand;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextBtn = () => {
    if (activeIndex === USER_LIST_DATE.length) return;

    setActiveIndex((prevIdx) => prevIdx + 1);
  };

  const prevBtn = () => {
    if (activeIndex === 0) return;
    setActiveIndex((prevIdx) => prevIdx - 1);
  };

  return (
    <Box w="68.6rem" overflow="hidden" h="20rem" pos="relative">
      <IconButton
        onClick={() => prevBtn()}
        zIndex="modal"
        pos="absolute"
        left="2%"
        top="50%"
        transform="translateY(-50%)"
        aria-label="button"
        w="4.0rem"
        h="4.0rem"
        bg={secondaryBlack["100"]}
        borderRadius="100vw"
        mr={{ base: "unset", md: "1.6rem" }}
        icon={
          <Img
            transform="rotate(180deg)"
            boxSize="40px"
            src="/imgs/community/arrow-right.svg"
          />
        }
      />
      <IconButton
        onClick={() => nextBtn()}
        zIndex="modal"
        pos="absolute"
        right="0%"
        top="50%"
        transform="translateY(-50%)"
        aria-label="button"
        w="4.0rem"
        h="4.0rem"
        bg={secondaryBlack["100"]}
        borderRadius="100vw"
        mr={{ base: "unset", md: "1.6rem" }}
        icon={<Img boxSize="40px" src="/imgs/community/arrow-right.svg" />}
      />
      <MotionFlex
        drag="x"
        gap="2.0rem"
        flexWrap="nowrap"
        pos="absolute"
        w="100%"
        h="100%"
        // overflowX="auto"
        flexDir="row"
        // pos="relative"
        maxH="20rem"
        transform={`translateX(-${
          activeIndex * (100 / USER_LIST_DATE.length)
        }%)`}
        // transition="all .5s ease"
      >
        {USER_LIST_DATE.map((user, idx) => (
          <UserListItem key={idx} user={user} />
        ))}
        {/* <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem /> */}
      </MotionFlex>
    </Box>
  );
}

export default UsersList;

const USER_LIST_DATE = [
  {
    id: 1,
    name: "Fali",
  },
  {
    id: 2,
    name: "Sali",
  },
  {
    id: 3,
    name: "Cali",
  },
  {
    id: 4,
    name: "Bali",
  },
  {
    id: 5,
    name: "Trapali",
  },
  {
    id: 6,
    name: "Crapali",
  },
  // {
  //   id: 7,
  //   name: "Dracali",
  // },
  // {
  //   id: 8,
  //   name: "Zali",
  // },
];

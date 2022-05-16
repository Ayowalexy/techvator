import {
  Box,
  Flex,
  Heading,
  IconButton,
  Img,
  useTheme,
} from "@chakra-ui/react";
import { MotionFlex } from "motion";
import React, { useEffect, useRef, useState } from "react";
import UserListItem from "./UserListItem";

function UsersList() {
  const theme = useTheme();
  const { secondaryBlack } = theme.colors.brand;
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const carouselRef = useRef(null);
  const scrollAmount = 162;

  const nextBtn = () => {
    console.log("Next");
    if (currentScrollPosition >= maxScroll / 100)
      setCurrentScrollPosition(Math.floor(maxScroll / 100));

    setCurrentScrollPosition((prevIdx) => prevIdx + 1);
  };

  const prevBtn = () => {
    console.log("Prev");
    if (currentScrollPosition <= 0) setCurrentScrollPosition(0);
    setCurrentScrollPosition((prevIdx) => prevIdx - 1);
  };

  const scrollHorizontally = (val: number) => {
    // console.log(maxScroll, currentScrollPosition);
    setCurrentScrollPosition(
      (preScrollPos) => preScrollPos + val * scrollAmount
    );

    if (currentScrollPosition > 0) {
      setCurrentScrollPosition(0);
    }

    if (currentScrollPosition < maxScroll) {
      setCurrentScrollPosition(maxScroll);
    }
  };

  useEffect(() => {
    console.log(
      carouselRef.current.scrollWidth,
      carouselRef.current.offsetWidth,
      carouselRef.current.getBoundingClientRect(),
      carouselRef.current?.lastElementChild.getBoundingClientRect(),
      carouselRef.current?.lastElementChild.offsetWidth
    );
    setMaxScroll(
      carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    );
  }, []);

  console.log("max", currentScrollPosition, (maxScroll / 100) * 25 - 20);
  return (
    <>
      <Heading fontSize="3xl" ml="1rem" mb="2rem">
        New Members
      </Heading>
      <Box
        w="68.6rem"
        ref={carouselRef}
        overflow="hidden"
        minH="20rem"
        pos="relative"
      >
        <IconButton
          opacity={currentScrollPosition === 0 ? 0 : 1}
          transform={`translateY(-50%) ${
            currentScrollPosition === 0 ? "scale(0)" : "scale(1)"
          }`}
          transition="opacity .5s ease"
          onClick={() => scrollHorizontally(1)}
          zIndex="modal"
          pos="absolute"
          left="2%"
          top="50%"
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
          onClick={() => scrollHorizontally(-1)}
          opacity={currentScrollPosition > Math.floor(maxScroll / 100) ? 0 : 1}
          transition="opacity .5s ease"
          zIndex="modal"
          pos="absolute"
          right="0%"
          top="50%"
          transform={`translateY(-50%) ${
            currentScrollPosition > Math.floor(maxScroll / 100)
              ? "scale(0)"
              : "scale(1)"
          }`}
          aria-label="button"
          w="4.0rem"
          h="4.0rem"
          bg={secondaryBlack["100"]}
          borderRadius="100vw"
          mr={{ base: "unset", md: "1.6rem" }}
          icon={<Img boxSize="40px" src="/imgs/community/arrow-right.svg" />}
        />
        <Flex
          flexWrap="nowrap"
          pos="absolute"
          w="95%"
          h="100%"
          // overflowX="auto"
          flexDir="row"
          // pos="relative"
          maxH="20rem"
          transform={`translateX(-${currentScrollPosition}px) !important`}
          transition="all .5s ease"
        >
          {USER_LIST_DATE.map((user, idx) => (
            <UserListItem key={idx} user={user} />
          ))}
          {/* <UserListIxtem /> */}
          {/*
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem /> */}
        </Flex>
      </Box>
    </>
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
  // {
  //   id: 6,
  //   name: "Crapali",
  // },
  // {
  //   id: 7,
  //   name: "Dracali",
  // },
  // {
  //   id: 8,
  //   name: "Zali",
  // },
];

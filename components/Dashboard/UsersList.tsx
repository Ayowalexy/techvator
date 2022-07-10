import {
  Box,
  Flex,
  Heading,
  IconButton,
  Img,
  useTheme,
} from "@chakra-ui/react";
import { endpoint } from "api_routes";
import axios from "axios";
import { MotionFlex } from "motion";
import React, { useEffect, useRef, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useRecoilState, useRecoilValue } from "recoil";
import { AuthAtom } from "recoilStore/AuthAtom";
import { MembersAtom } from "recoilStore/MembersAtom";
import UserListItem from "./UserListItem";

function LeftArrowBtn() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  const theme = useTheme();
  const { secondaryBlack } = theme.colors.brand;

  return (
    <IconButton
      opacity={isFirstItemVisible ? 0 : 1}
      transform={`translateY(-50%) ${
        isFirstItemVisible ? "scale(0)" : "scale(1)"
      }`}
      transition="opacity .5s ease"
      onClick={() => scrollPrev()}
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
  );
}

function RightArrowBtn() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  const theme = useTheme();
  const { secondaryBlack } = theme.colors.brand;

  return (
    <IconButton
      onClick={() => scrollNext()}
      opacity={isLastItemVisible ? 0 : 1}
      transition="opacity .5s ease"
      zIndex="modal"
      pos="absolute"
      right="0%"
      top="50%"
      transform={`translateY(-50%) ${
        isLastItemVisible ? "scale(0)" : "scale(1)"
      }`}
      aria-label="button"
      w="4.0rem"
      h="4.0rem"
      bg={secondaryBlack["100"]}
      borderRadius="100vw"
      mr={{ base: "unset", md: "1.6rem" }}
      icon={<Img boxSize="40px" src="/imgs/community/arrow-right.svg" />}
    />
  );
}

function UsersList() {
  const theme = useTheme();
  const { secondaryBlack } = theme.colors.brand;
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [members, setMembers] = useRecoilState(MembersAtom);
  const auth = useRecoilValue(AuthAtom);
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
      // carouselRef.current.getBoundingClientRect(),
      // carouselRef.current?.lastElementChild.getBoundingClientRect(),
      carouselRef.current?.lastElementChild.offsetWidth
    );
    setMaxScroll(
      carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    );
  }, [carouselRef.current?.scrollWidth, carouselRef.current?.offsetWidth]);

  // fetch new members
  const fetchNewMembers = async () => {
    try {
      const response = await axios.get(endpoint.MEMBERS, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          "x-refresh-token": `${auth.refreshToken}`,
        },
      });
      setMembers(response.data?.message?.users);
      console.log(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    if (auth?.token || auth?.refreshToken) {
      fetchNewMembers();
    }
  }, [auth]);

  // console.log("max", currentScrollPosition, (maxScroll / 100) * 25 - 20);
  return (
    <>
      <Heading fontSize="3xl" ml="1rem" mb="2rem">
        New Members
      </Heading>
      <Box
        maxW={{ base: "93vw", lg: "68.6rem" }}
        w="100%"
        ref={carouselRef}
        overflow="hidden"
        // minH="20rem"
        pos="relative"
        // display={{ base: "block", md: "flex", lg: "block" }}
        // justifyContent={{ base: "unset", md: "center", lg: "unset" }}
      >
        {/* <Flex
          flexWrap="nowrap"
          pos="absolute"
          w="95%"
          h="130%"
          // overflowX="auto"
          flexDir="row"
          // pos="relative"
          maxH="20rem"
          transform={`translateX(-${currentScrollPosition}px) !important`}
          transition="all .5s ease"
        >
          {members.map((user, idx) => (
            <UserListItem key={idx} user={user} />
          ))}
        </Flex> */}
        <ScrollMenu LeftArrow={LeftArrowBtn} RightArrow={RightArrowBtn}>
          {members.map((user, idx) => (
            <UserListItem key={idx} itemId={user._id.toString()} user={user} />
          ))}
        </ScrollMenu>
      </Box>
    </>
  );
}

export default UsersList;

// const USER_LIST_DATE = [
//   {
//     id: 1,
//     name: "Fali",
//   },
//   {
//     id: 2,
//     name: "Sali",
//   },
//   {
//     id: 3,
//     name: "Cali",
//   },
//   {
//     id: 4,
//     name: "Bali",
//   },
//   {
//     id: 5,
//     name: "Trapali",
//   },
//   {
//     id: 6,
//     name: "Crapali",
//   },
//   {
//     id: 7,
//     name: "Dracali",
//   },
//   {
//     id: 8,
//     name: "Zali",
//   },
// ];

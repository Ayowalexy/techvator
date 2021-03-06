import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Img,
  Text,
  useTheme,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { getFullNameSelector } from "recoilStore/AuthAtom";
import { Post } from "recoilStore/PostsAtom";
import { Btn } from "../Button";
import FormInput from "../Forms/FormInput";
import MediaPreview from "../MediaPreview";

type PostProp = {
  post?: Post;
};

dayjs.extend(relativeTime);

function Activity({ post }: PostProp) {
  const router = useRouter();
  const theme = useTheme();
  const [like, setLike] = useState(false);
  const { white, metallicSunburst, secondaryBlack, roti, gray } =
    theme.colors.brand;

  const getFullName = useRecoilValue(getFullNameSelector(post && post.user_id));

  function renderComment(comment?: any) {
    return (
      <Flex gap="1rem" mb="1rem" alignItems="flex-start">
        <Avatar
          boxSize={{ base: "4rem", md: "5rem" }}
          name="Christian Nwamba"
          src="https://bit.ly/code-beast"
          mt="1rem"
        />

        <Box>
          <Box
            p="1rem"
            maxW={{ base: "20rem", md: "30rem" }}
            borderRadius="3xl"
            bgColor={secondaryBlack["100"]}
            pos="relative"
          >
            <Text fontSize={{ base: "1.2rem", md: "1.4rem" }}>
              Thanks so much itโs just some graduation memories ๐๐พ
            </Text>
            <Text mt="0.5rem" fontSize="1rem">
              9 mins ago
            </Text>

            {/* Likes */}
            <IconButton
              right="-5%"
              top="50%"
              transform="translateY(-50%)"
              pos="absolute"
              size="lg"
              borderRadius="full"
              bgColor={secondaryBlack["100"]}
              aria-label="Favorite"
              icon={<Icon as={MdFavorite} fill="red" boxSize="1.6rem" />}
            />
          </Box>
          {/* Action Buttons */}
          <Flex
            mt="1rem"
            alignItems="center"
            gap="1rem"
            justifyContent="flex-end"
          >
            <Btn
              fontSize="1.2rem"
              p="unset"
              borderColor="transparent"
              bgColor="transparent"
              _hover={{
                bg: "transparent",
                color: roti,
              }}
            >
              Like
            </Btn>
            <Btn
              fontSize="1.2rem"
              p="unset"
              borderColor="transparent"
              bgColor="transparent"
              _hover={{
                bg: "transparent",
                color: roti,
              }}
            >
              Delete
            </Btn>
            <Btn
              fontSize="1.2rem"
              p="unset"
              borderColor="transparent"
              bgColor="transparent"
              _hover={{
                bg: "transparent",
                color: roti,
              }}
            >
              Edit
            </Btn>

            <Flex cursor="pointer" role="group" alignItems="center" gap="1rem">
              <Text
                _groupHover={{
                  color: roti,
                }}
                fontSize="1.2rem"
                fontWeight="semibold"
              >
                Reply
              </Text>
              <IconButton
                size="lg"
                borderRadius="full"
                bgColor={secondaryBlack["100"]}
                aria-label="Reply"
                icon={
                  <Img boxSize="25px" src="/imgs/community/u-turn-left.svg" />
                }
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    );
  }

  function renderReply(comment?: any) {
    return (
      <Flex
        ml={{ base: "1.5rem", md: "2.5rem" }}
        mt="2rem"
        gap="1rem"
        mb="1rem"
        alignItems="flex-start"
      >
        <Avatar
          boxSize={{ base: "3rem", md: "4rem" }}
          name="Christian Nwamba"
          src="https://bit.ly/code-beast"
          mt="1rem"
        />

        <Box>
          <Box
            p="1rem"
            maxW={{ base: "23rem", md: "35rem" }}
            borderRadius="3xl"
            bgColor={secondaryBlack["100"]}
            pos="relative"
            // _before={{
            //   content: `url("/imgs/community/turn-left.svg")`,
            //   pos: "absolute",
            //   w: "3rem",
            //   h: "3rem",
            //   // bgColor: "blue",
            //   right: "0",
            //   top: "-50%",
            //   borderRadius: "full",
            // }}
          >
            <Img
              src="/imgs/community/turn-left.svg"
              pointerEvents="none"
              pos="absolute"
              w="2.5rem"
              h="2.5rem"
              right="2%"
              top="-40%"
            />
            <Text fontSize={{ base: "1.2rem", md: "1.4rem" }}>
              Thanks so much itโs just some graduation memories ๐๐พ
            </Text>
            <Text mt="0.5rem" fontSize="1rem">
              9 mins ago
            </Text>

            {/* Likes */}
            <IconButton
              right="-5%"
              top="50%"
              transform="translateY(-50%)"
              pos="absolute"
              size="lg"
              borderRadius="full"
              bgColor={secondaryBlack["100"]}
              aria-label="Favorite"
              icon={<Icon as={MdFavorite} fill="red" boxSize="1.6rem" />}
            />
          </Box>
          {/* Action Buttons */}
          <Flex
            mt="1rem"
            alignItems="center"
            gap="1rem"
            justifyContent="flex-end"
          >
            <Btn
              fontSize="1.2rem"
              p="unset"
              borderColor="transparent"
              bgColor="transparent"
              _hover={{
                bg: "transparent",
                color: roti,
              }}
            >
              Like
            </Btn>
            <Btn
              fontSize="1.2rem"
              p="unset"
              borderColor="transparent"
              bgColor="transparent"
              _hover={{
                bg: "transparent",
                color: roti,
              }}
            >
              Delete
            </Btn>
            <Btn
              fontSize="1.2rem"
              p="unset"
              borderColor="transparent"
              bgColor="transparent"
              _hover={{
                bg: "transparent",
                color: roti,
              }}
            >
              Edit
            </Btn>

            <Flex cursor="pointer" role="group" alignItems="center" gap="1rem">
              <Text
                _groupHover={{
                  color: roti,
                }}
                fontSize="1.2rem"
                fontWeight="semibold"
              >
                Reply
              </Text>
              <IconButton
                size="lg"
                borderRadius="full"
                bgColor={secondaryBlack["100"]}
                aria-label="Reply"
                icon={
                  <Img boxSize="25px" src="/imgs/community/u-turn-left.svg" />
                }
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    );
  }

  return (
    <Box
      maxW={{ lg: "68.6rem" }}
      w="full"
      mt="3rem"
      shadow="md"
      bg={secondaryBlack["200"]}
      borderRadius="2xl"
    >
      <Flex
        p={{ base: "1rem", md: "2rem" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center" gap="1rem">
          <Avatar
            size="lg"
            name={getFullName}
            src={post && post.user_id && post.user_id.avatar}
          />
          <Box>
            <Heading as="h3" fontWeight="600" fontSize="1.8rem">
              {getFullName}
            </Heading>
            <Text fontSize="1.2rem">
              {dayjs(post && post?.createdAt).fromNow()}
            </Text>
          </Box>
        </Flex>

        {/* <Flex alignItems="center" gap="1rem">
          <Text fontSize="1.2rem">
            {post && post.likes > 0 ? post.likes : "No likes yet"}{" "}
          </Text>
          <IconButton
            size="lg"
            borderRadius="full"
            bgColor={secondaryBlack["100"]}
            aria-label="Favorite"
            onClick={() => setLike((prvLike) => !prvLike)}
            icon={
              <Icon
                as={
                  post && typeof post.likes === "undefined"
                    ? MdFavoriteBorder
                    : MdFavorite
                }
                boxSize="1.6rem"
                fill={
                  post && typeof post.likes === "undefined" ? "white" : "red"
                }
              />
            }
          />
        </Flex> */}
      </Flex>

      {/* Text Content */}
      <Box p={{ base: "1rem", md: "2rem" }}>
        <Text fontSize={{ base: "1.2rem", md: "1.4rem" }} whiteSpace="pre-wrap">
          {post?.content}
        </Text>
      </Box>

      {/* Image Section check if image is one...use a flexible div to display image otherwise maxw:338 */}
      <MediaPreview media={post?.image} />
      {/* End Image Section */}

      <Flex
        py={{ base: "1rem", lg: "2rem" }}
        mx="2rem"
        borderBottom={
          router.pathname === "/post/[id]" ? `.3px solid ${gray}` : "unset"
        }
        alignItems="center"
        justifyContent="flex-end"
        gap="2rem"
      >
        {/* Comments */}
        <Flex align="center" gap="1rem">
          <Text fontSize="1.2rem">
            {post?.comments_count > 0
              ? `${post?.comments_count} Comments`
              : `${post?.comments_count} Comment`}
          </Text>
          <IconButton
            pointerEvents="none"
            size="lg"
            borderRadius="full"
            bgColor={secondaryBlack["100"]}
            aria-label="Favorite"
            // onClick={() => setLike((prvLike) => !prvLike)}
            icon={<Icon as={FaRegCommentDots} boxSize="1.6rem" />}
          />
        </Flex>

        {/* Likes */}
        <Flex align="center" gap="1rem">
          <Text fontSize="1.2rem">
            {post?.likes_count === 0
              ? "No likes yet"
              : post?.likes_count > 1
              ? `${post?.likes_count} Likes`
              : `${post?.likes_count} Like`}
          </Text>
          <IconButton
            size="lg"
            borderRadius="full"
            bgColor={secondaryBlack["100"]}
            aria-label="Favorite"
            onClick={() => setLike((prvLike) => !prvLike)}
            icon={
              <Icon
                as={!like ? MdFavoriteBorder : MdFavorite}
                boxSize="1.6rem"
                fill={!like ? "white" : "red"}
              />
            }
          />
        </Flex>
      </Flex>

      {/*Render Comments List */}
      {router.pathname === "/post/[id]" && (
        <Box p={{ base: "1rem", md: "2rem" }}>
          <Box mb="1rem">
            {renderComment()}
            {renderReply()}
          </Box>
          <Box mb="1rem">
            {renderComment()}
            {renderReply()}
          </Box>
          <Box mb="1rem">
            {renderComment()}
            {renderReply()}
          </Box>
        </Box>
      )}

      {/* Render Comment Section */}
      {router.pathname === "/post/[id]" && (
        <Box
          mt="3rem"
          p={{ base: "1rem", md: "2rem" }}
          shadow="md"
          bg={secondaryBlack["200"]}
          borderRadius="2xl"
        >
          <form>
            <Flex
              py="1rem"
              px={{ base: "unset", md: "1rem" }}
              gap={{ base: "1rem", md: "2rem" }}
              alignItems="center"
            >
              <Avatar
                boxSize={{ base: "4rem", md: "6rem" }}
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />
              <FormInput
                containerProps={{
                  flexDir: "column",
                  bgColor: secondaryBlack["100"],
                  borderRadius: "lg",
                  alignItems: "center !important",
                }}
                inputProps={{
                  py: { base: "1rem", md: "2.5rem" },
                  px: { base: "1rem", md: "2rem" },
                  placeholder: "Write a Comment.......",
                  _placeholder: {
                    color: "white",
                  },
                }}
                inputRightAddon={
                  <Btn
                    borderColor={white}
                    borderRadius="xl"
                    _hover={{ borderColor: metallicSunburst }}
                    bgColor="transparent"
                    py=".8rem"
                    p={{ base: ".5rem 2rem !important", md: "1rem 1.4rem" }}
                    mr="1rem"
                    mb=".5rem"
                  >
                    Comment
                  </Btn>
                }
              />
            </Flex>
          </form>
        </Box>
      )}
    </Box>
  );
}

export default Activity;

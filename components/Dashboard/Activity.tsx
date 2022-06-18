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
import React, { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { getFullNameSelector } from "recoilStore/AuthAtom";
import { Post } from "recoilStore/PostsAtom";
import { Btn } from "../Button";
import FormInput from "../Forms/FormInput";

type PostProp = {
  post?: Post;
};

dayjs.extend(relativeTime);

function Activity({ post }: PostProp) {
  const theme = useTheme();
  const [like, setLike] = useState(false);
  const { white, metallicSunburst, secondaryBlack, roti, gray } =
    theme.colors.brand;

  const getFullName = useRecoilValue(getFullNameSelector(post && post.user_id));

  function renderComment(comment?: any) {
    return (
      <Flex gap="1rem" mb="1rem" alignItems="flex-start">
        <Avatar
          size="xl"
          name="Christian Nwamba"
          src="https://bit.ly/code-beast"
          mt="1rem"
        />

        <Box>
          <Box
            p="1rem"
            maxW="30rem"
            borderRadius="3xl"
            bgColor={secondaryBlack["100"]}
            pos="relative"
          >
            <Text>Thanks so much it’s just some graduation memories 👍🏾</Text>
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
      <Flex ml="2.5rem" mt="2rem" gap="1rem" mb="1rem" alignItems="flex-start">
        <Avatar
          size="md"
          name="Christian Nwamba"
          src="https://bit.ly/code-beast"
          mt="1rem"
        />

        <Box>
          <Box
            p="1rem"
            maxW="35rem"
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
            <Text>Thanks so much it’s just some graduation memories 👍🏾</Text>
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
      maxW="68.6rem"
      mt="3rem"
      shadow="md"
      bg={secondaryBlack["200"]}
      borderRadius="2xl"
    >
      <Flex p="2rem" alignItems="center" justifyContent="space-between">
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

        <Flex alignItems="center" gap="1rem">
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
                as={!like ? MdFavoriteBorder : MdFavorite}
                boxSize="1.6rem"
                fill={!like ? "white" : "red"}
              />
            }
          />
        </Flex>
      </Flex>

      {/* Text Content */}
      <Box p="2rem">
        <Text>{post.content}</Text>
      </Box>

      {/* Image Section check if image is one...use a flexible div to display image otherwise maxw:338 */}
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        minH="35rem"
        w="100%"
        maxW="68.6rem"
        gap="1rem"
      >
        <Box w="100%" maxW="338px" flexShrink="0">
          <Image
            src="/imgs/community/large-placeholder.png"
            alt=""
            h="100%"
            w="100%"
          />
        </Box>
        <Box w="100%" maxW="338px" flexShrink="0">
          <Image
            src="/imgs/community/large-placeholder.png"
            alt=""
            h="100%"
            w="100%"
          />
        </Box>
        <Box w="100%" maxW="338px" flexShrink="0">
          <Image
            src="/imgs/community/large-placeholder.png"
            alt=""
            h="100%"
            w="100%"
          />
        </Box>
        <Box w="100%" maxW="338px" flexShrink="0">
          <Image
            src="/imgs/community/large-placeholder.png"
            alt=""
            h="100%"
            w="100%"
          />
        </Box>
      </Flex>
      <Flex
        py="1rem"
        mt="2rem"
        mx="2rem"
        borderBottom={`.3px solid ${gray}`}
        alignItems="center"
        justifyContent="flex-end"
        gap="1rem"
      >
        <Text fontSize="1.2rem">Like Post</Text>
        <IconButton
          size="lg"
          borderRadius="full"
          bgColor={secondaryBlack["100"]}
          aria-label="Favorite"
          icon={<Icon as={MdFavoriteBorder} boxSize="1.6rem" />}
        />
      </Flex>

      {/*Render Comments List */}
      <Box p="2rem">
        <Box mb="1rem">
          {renderComment()}

          {/* Replies */}
          {renderReply()}
        </Box>
        <Box mb="1rem">
          {renderComment()}

          {/* Replies */}
          {renderReply()}
        </Box>
        <Box mb="1rem">
          {renderComment()}

          {/* Replies */}
          {renderReply()}
        </Box>
      </Box>

      {/* Render Comment Section */}
      <Box
        mt="3rem"
        p="2rem"
        shadow="md"
        bg={secondaryBlack["200"]}
        borderRadius="2xl"
      >
        <form>
          <Flex py="1rem" px="1rem" gap="2rem" alignItems="center">
            <Avatar
              size="xl"
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
                py: "2.5rem",
                px: "2rem",
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
                  mr="1rem"
                >
                  Comment
                </Btn>
              }
            />
          </Flex>
        </form>
      </Box>
    </Box>
  );
}

export default Activity;

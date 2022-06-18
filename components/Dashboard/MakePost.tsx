import {
  Avatar,
  Box,
  color,
  Flex,
  Heading,
  Icon,
  IconButton,
  Img,
  Text,
  useTheme,
} from "@chakra-ui/react";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import produce from "immer";
import { endpoint } from "api_routes";
import { AuthAtom, getFullNameSelector } from "recoilStore/AuthAtom";
import { PostDataAtom, PostsAtom } from "recoilStore/PostsAtom";
import { Btn } from "../Button";
import FormInput from "../Forms/FormInput";

function MakePost() {
  const theme = useTheme();
  const { secondaryBlack, metallicSunburst, white } = theme.colors.brand;
  const user = useRecoilValue(AuthAtom);
  const [postData, setPostData] = useRecoilState(PostDataAtom);
  const posts = useRecoilValue(PostsAtom);
  const userFullName = useRecoilValue(getFullNameSelector(user));
  const [isLoading, setIsLoading] = useState(false);
  const sendMessage = useRecoilCallback(
    ({ set }) =>
      async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await axios.post(endpoint.POSTS, postData, {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "x-refresh-token": `${user.refreshToken}`,
          },
        });

        if (response.status === 201) {
          setIsLoading(false);
          set(PostDataAtom, {
            content: "",
            image: "",
            archive: false,
          });

          const newPostsArray = produce(posts, (draft) => {
            draft.unshift({ ...response.data.message, user_id: user });
          });
          set(PostsAtom, newPostsArray);
        }

        return;
      }
  );

  return (
    <Fragment>
      <Box
        mt="3rem"
        p="2rem"
        shadow="md"
        bg={secondaryBlack["200"]}
        borderRadius="2xl"
      >
        <form onSubmit={(e) => sendMessage(e)}>
          <Flex py="1rem" px="1rem" gap="2rem" alignItems="center">
            <Avatar size="xl" name={userFullName} src={user?.avatar} />
            <FormInput
              containerProps={{
                flexDir: "column",
              }}
              inputProps={{
                value: postData && postData?.content,
                onChange: (e) =>
                  setPostData((prevPostInput) => ({
                    ...prevPostInput,
                    content: e.target.value,
                  })),
                autoFocus: true,
                bgColor: secondaryBlack["100"],
                borderRadius: "lg",
                py: "2.5rem",
                px: "2rem",
                placeholder: "Share something with us",
                _placeholder: {
                  color: white,
                },
              }}
            />
          </Flex>
          <Flex
            gap="2rem"
            px="1rem"
            alignItems="center"
            justifyContent="flex-end"
            mt="1rem"
          >
            <Text fontSize="1.2rem" fontWeight="600">
              Add Photo
            </Text>
            <IconButton
              borderRadius="full"
              outline="none"
              bg="transparent"
              size="lg"
              aria-label="add-photo"
              icon={
                <Img
                  pointerEvents="none"
                  w="100%"
                  h="100%"
                  src="/imgs/community/add-picture-icon.svg"
                  alt=""
                />
              }
              _hover={{
                bg: "none",
                shadow: "xl",
              }}
            />

            <Btn
              borderColor={white}
              borderRadius="xl"
              _hover={{ borderColor: metallicSunburst }}
              bgColor="transparent"
              py=".8rem"
              type="submit"
              isLoading={isLoading}
              disabled={
                postData && postData?.content.length === 0 ? true : false
              }
            >
              Publish
            </Btn>
          </Flex>
        </form>
      </Box>
    </Fragment>
  );
}

export default MakePost;

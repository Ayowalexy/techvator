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
import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { AuthAtom, getFullNameSelector } from "recoilStore/AuthAtom";
import { Btn } from "../Button";
import FormInput from "../Forms/FormInput";

function MakePost() {
  const theme = useTheme();
  const { secondaryBlack, metallicSunburst, white } = theme.colors.brand;
  const user = useRecoilValue(AuthAtom);
  const userFullName = useRecoilValue(getFullNameSelector(user));
  const sendMessage = (e) => {};

  return (
    <Fragment>
      <Box
        mt="3rem"
        p="2rem"
        shadow="md"
        bg={secondaryBlack["200"]}
        borderRadius="2xl"
      >
        <form>
          <Flex py="1rem" px="1rem" gap="2rem" alignItems="center">
            <Avatar size="xl" name={userFullName} src={user?.avatar} />
            <FormInput
              containerProps={{
                flexDir: "column",
              }}
              inputProps={{
                autoFocus: true,
                bgColor: secondaryBlack["100"],
                borderRadius: "lg",
                py: "2.5rem",
                px: "2rem",
                placeholder: "Activities",
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
            >
              Publish Photo
            </Btn>
          </Flex>
        </form>
      </Box>
    </Fragment>
  );
}

export default MakePost;

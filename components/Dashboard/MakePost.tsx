import {
  Avatar,
  Box,
  color,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Img,
  Input,
  Text,
  useTheme,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import produce from "immer";
import { endpoint } from "api_routes";
import { AuthAtom, getFullNameSelector } from "recoilStore/AuthAtom";
import { PostDataAtom, PostsAtom } from "recoilStore/PostsAtom";
import { Btn } from "../Button";
import FormInput from "../Forms/FormInput";
import FormTextArea from "../Forms/FormTextArea";
import Media, { MediaProps } from "../Media";
import MediaPreview from "../MediaPreview";

function MakePost() {
  const filePickerRef = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const theme = useTheme();
  const { secondaryBlack, metallicSunburst, white } = theme.colors.brand;
  const user = useRecoilValue(AuthAtom);
  const [postData, setPostData] = useRecoilState(PostDataAtom);
  const posts = useRecoilValue(PostsAtom);
  const userFullName = useRecoilValue(getFullNameSelector(user));
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedMediaPreview, setSelectedMediaPreview] = useState<
    MediaProps[]
  >([]);
  const [generatedUrlArr, setGeneratedUrlArr] = useState([]); //keep track of generated mediafiles

  const sendMessage = useRecoilCallback(
    ({ set }) =>
      async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append("content", postData.content);
        selectedMediaPreview.forEach((media) => {
          formData.append("image", media.file);
        });
        formData.append("archive", postData.archive.toString());
        try {
          const response = await axios.post(endpoint.POSTS, formData, {
            headers: {
              Authorization: `Bearer ${user.token}`,
              "x-refresh-token": `${user.refreshToken}`,
            },
          });

          if (response.status === 201) {
            setIsLoading(false);

            setSelectedMediaPreview([]);
            set(PostDataAtom, {
              content: "",
              image: [],
              archive: false,
            });

            const newPostsArray = produce(posts, (draft) => {
              draft.unshift({
                ...response.data.message,
                image: selectedMediaPreview,
                user_id: user,
              });
            });
            set(PostsAtom, newPostsArray);

            window.scrollTo({
              top: 700,
              //   left: 100,
              behavior: "smooth",
            });
          }
        } catch (error) {
          console.log("server err", error);
          setIsLoading(false);
        }

        return;
      }
  );

  const onSetFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(filePickerRef.current.files);
    const fileArr = Array.from(e.currentTarget?.files);
    setSelectedFiles((prvFiles) => [...prvFiles, ...fileArr]);
  };

  const showMedia = () => {
    if (selectedFiles.length > 4) {
      toast({
        // title: 'Account created.',
        description: "Maximum number of photos allowed for upload is 4",
        status: "info",
        duration: 4000,
        isClosable: false,
      });
      setSelectedFiles([]);
      return;
    }

    // create a reader for each photo

    for (let file = 0; file < selectedFiles.length; file++) {
      if (generatedUrlArr.some((f) => f?.name === selectedFiles[file]?.name)) {
        continue;
      }
      let reader = new FileReader();
      reader.onloadend = () => {
        setSelectedMediaPreview((prvMediaUrl) => [
          ...prvMediaUrl,
          {
            name: selectedFiles[file]?.name,
            dataUrl: reader.result.toString(),
            file: selectedFiles[file],
          },
        ]);
      };
      reader.readAsDataURL(selectedFiles[file]);
      setGeneratedUrlArr((prv) => [...prv, selectedFiles[file]]);
    }
  };

  useEffect(() => {
    showMedia();
  }, [selectedFiles]);

  // useEffect(() => {
  //   console.log("Media Display", selectedMediaPreview);
  // }, [selectedMediaPreview]);

  const onRemoveMedia = (media: MediaProps) => {
    setSelectedMediaPreview((prvMediaPreview) =>
      prvMediaPreview.filter(
        (mp) => mp.name.toLowerCase() !== media.name.toLowerCase()
      )
    );

    // remove selected File as well
    setSelectedFiles((prevSelectedFiles) => {
      return prevSelectedFiles.filter(
        (sf: File) => sf.name.toLowerCase() !== sf.name.toLowerCase()
      );
    });

    // Remove From Generated Preview List as well
    setGeneratedUrlArr((prevGeneratedFiles) => {
      return prevGeneratedFiles.filter(
        (gf: File) => gf.name.toLowerCase() !== gf.name.toLowerCase()
      );
    });
  };

  return (
    <Fragment>
      <Box
        mt="3rem"
        p={{ base: "1rem", md: "2rem" }}
        shadow="md"
        bg={secondaryBlack["200"]}
        borderRadius="2xl"
        // maxW="68.6rem"
        w={{ lg: "68.6rem" }}
      >
        <form onSubmit={(e) => sendMessage(e)}>
          <Flex
            py="1rem"
            px={{ base: "unset", md: "1rem" }}
            gap={{ base: "1rem", md: "2rem" }}
            alignItems="flex-start"
          >
            <Avatar
              boxSize={{ base: "4rem", md: "6rem" }}
              name={userFullName}
              src={user?.avatar}
            />
            <FormTextArea
              containerProps={{
                flexDir: "column",
                border: "none",
              }}
              textAreaProps={{
                value: postData && postData?.content,
                rows: 1,
                border: "none",
                onChange: (e) =>
                  setPostData((prevPostInput) => ({
                    ...prevPostInput,
                    content: e.target.value,
                  })),
                autoFocus: true,
                bgColor: secondaryBlack["100"],
                borderRadius: "lg",
                py: { base: "1rem", md: "2.5rem" },
                px: { base: "1rem", md: "2rem" },
                placeholder: "Share something with us",
                _placeholder: {
                  color: white,
                  fontSize: { base: "1.2rem", md: "1.4rem" },
                },
              }}
            />
          </Flex>
          {/* Photo Uploads */}
          <MediaPreview media={selectedMediaPreview} onRemove={onRemoveMedia} />
          {/* End Photo  Uploads */}
          <Flex
            gap="2rem"
            px="1rem"
            alignItems="center"
            justifyContent="flex-end"
            mt="1rem"
          >
            <Text
              opacity={selectedMediaPreview.length === 4 ? 0.5 : 1}
              fontSize={{ base: "1rem", md: "1.2rem" }}
              fontWeight="600"
            >
              Add Photo
            </Text>
            <IconButton
              disabled={selectedMediaPreview.length === 4}
              onClick={() => filePickerRef.current.click()}
              borderRadius="full"
              outline="none"
              bg="transparent"
              boxSize={{ base: "2.5rem", md: "3rem" }}
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
              // p={{
              //   base: ".5rem 2rem !important",
              //   md: "1rem 1.4rem !important",
              // }}
              // fontSize={{ base: "1rem !important", md: "1.4rem !important" }}
              type="submit"
              isLoading={isLoading}
              disabled={
                postData &&
                postData?.content.length === 0 &&
                selectedMediaPreview.length === 0
                  ? true
                  : false
              }
            >
              Publish
            </Btn>
          </Flex>
          <Input
            type="file"
            hidden
            multiple
            max="4"
            accept="image/png, image/jpeg"
            onChange={onSetFiles}
            ref={filePickerRef}
          />
        </form>
      </Box>
    </Fragment>
  );
}

export default MakePost;

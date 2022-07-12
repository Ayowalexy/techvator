import { Box, Flex, Grid, IconButton } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import Media, { MediaProps } from "./Media";

type MediaPreviewProps = {
  media: MediaProps[];
  onRemove?: (media: MediaProps) => void;
};

function MediaPreview({ media, onRemove }: MediaPreviewProps) {
  const mediaLength = media?.length ?? 0;
  let layout = null;

  // build four layers of preview
  switch (mediaLength) {
    case 1:
    case 2:
    case 4:
      layout = (
        <Grid
          gap="1rem"
          gridTemplateColumns={mediaLength === 1 ? "1fr" : "1fr 1fr"}
          w="full"
          h="full"
        >
          {media.map((image: MediaProps, idx: number) => {
            return (
              <Box
                key={idx}
                // w="30rem"
                // h="30rem"
                pos="relative"
                bgColor="pink"
                borderRadius="xl"
                overflow="hidden"
              >
                {onRemove && (
                  <IconButton
                    onClick={() => onRemove(image)}
                    pos="absolute"
                    top="2%"
                    left="2%"
                    bgColor="rgba(0,0,0,.7)"
                    aria-label="delete-photo"
                    title="delete"
                    borderRadius="full"
                    size="lg"
                    icon={<IoMdClose size="1.6rem" />}
                    _hover={{
                      bgColor: "rgba(0,0,0,.5)",
                      boxShadow: "none",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                  />
                )}

                <Media dataUrl={image?.dataUrl} />
              </Box>
            );
          })}
        </Grid>
      );
      break;

    case 3:
      const [first, ...rest] = media;
      layout = (
        <Grid gap="1rem" gridTemplateColumns={"1fr 1fr"} w="full" h="full">
          <Box
            // w="30rem"
            // h="30rem"
            pos="relative"
            bgColor="pink"
            borderRadius="xl"
            overflow="hidden"
          >
            {onRemove && (
              <IconButton
                onClick={() => onRemove(first)}
                pos="absolute"
                top="2%"
                left="2%"
                bgColor="rgba(0,0,0,.7)"
                aria-label="delete-photo"
                title="delete"
                borderRadius="full"
                size="lg"
                icon={<IoMdClose size="1.6rem" />}
                _hover={{
                  bgColor: "rgba(0,0,0,.5)",
                  boxShadow: "none",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              />
            )}

            <Media dataUrl={first?.dataUrl} />
          </Box>

          <Flex flexDir="column" gap="1rem">
            {rest.map((image: MediaProps, idx: number) => {
              return (
                <Box
                  key={idx}
                  // w="30rem"
                  // h="30rem"
                  pos="relative"
                  bgColor="pink"
                  borderRadius="xl"
                  overflow="hidden"
                >
                  {onRemove && (
                    <IconButton
                      onClick={() => onRemove(image)}
                      pos="absolute"
                      top="2%"
                      left="2%"
                      bgColor="rgba(0,0,0,.7)"
                      aria-label="delete-photo"
                      title="delete"
                      borderRadius="full"
                      size="lg"
                      icon={<IoMdClose size="1.6rem" />}
                      _hover={{
                        bgColor: "rgba(0,0,0,.5)",
                        boxShadow: "none",
                      }}
                      _focus={{
                        boxShadow: "none",
                      }}
                    />
                  )}

                  <Media dataUrl={image?.dataUrl} />
                </Box>
              );
            })}
          </Flex>
        </Grid>
      );
      break;

    default:
      layout = "";
      break;
  }

  return mediaLength > 0 ? (
    <Box my="2rem" px="1rem">
      <Flex w="full" minH="max-content">
        {layout}
      </Flex>
    </Box>
  ) : (
    <Fragment></Fragment>
  );
}

export default MediaPreview;

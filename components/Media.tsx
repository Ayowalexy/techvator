// import Image from "next/image";
import { Image } from "@chakra-ui/react";
import React from "react";

export type MediaProps = {
  dataUrl: string;
  name?: string;
  type?: "img" | "video";
  file?: File;
};
function Media({ dataUrl }: MediaProps) {
  return (
    <Image
      borderRadius="lg"
      src={dataUrl}
      width="100%"
      height="100%"
      objectFit="cover"
    />
  );
}

export default Media;

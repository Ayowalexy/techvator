import { Flex, Icon, useTheme } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";

export const FacebookIcon = () => {
  const theme = useTheme();
  const { roti, white } = theme.colors.brand;
  return (
    <Flex
      role="group"
      alignItems="center"
      justifyContent="center"
      bg="transparent"
      _hover={{
        bg: white,
        transition: "all .5s ease",
      }}
      w="3rem"
      h="3rem"
      borderRadius="100vw"
      p="1rem"
    >
      <Icon
        as={BsFacebook}
        w="3rem"
        h="3rem"
        _hover={{
          fill: roti,
          color: white,
          transition: "all .5s ease",
        }}
      />
    </Flex>
  );
};

type InstagramIconProps = {
  color?: string;
};
export const InstagramIcon = ({ color = "black" }: InstagramIconProps) => {
  const theme = useTheme();
  const { roti, white } = theme.colors.brand;
  return (
    <Flex
      role="group"
      alignItems="center"
      justifyContent="center"
      bg={white}
      _hover={{
        bg: roti,
        color: white,
        transition: "all .5s ease",
      }}
      w="3rem"
      h="3rem"
      borderRadius="100vw"
      p="1rem"
    >
      <Icon
        as={ImLinkedin2}
        w="1.6rem"
        h="1.6rem"
        _groupHover={{ color: white }}
        color="#9D9D9D"
      />
    </Flex>
  );
};

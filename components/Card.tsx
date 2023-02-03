import { colors } from "@/constants/colors";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
  bg: string;
};
function Card({ title, image, bg }: Props) {
  return (
    <Flex
      bg={colors.tertiary}
      _hover={{ backgroundColor: "white", transition: ".5s", boxShadow: "lg" }}
      w={250}
      h={130}
      direction="column"
      align="center"
      justify="center"
      //   boxShadow="xs"
    >
      <Box bg={bg} px={1.5} py={1.5}>
        <Image
          src={`/images/${image}`}
          alt="Picture of the author"
          width={40}
          height={40}
          priority
        />
      </Box>

      <Heading fontSize={17} fontWeight={400} pt={3}>
        {title}
      </Heading>
    </Flex>
  );
}

export default Card;

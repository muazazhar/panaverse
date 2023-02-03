import { colors } from "@/constants/colors";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Students() {
  return (
    <Box h={550} mt={34}>
      <Flex
        bg={colors.secondary}
        w={430}
        h={550}
        position="absolute"
        zIndex={0}
        right={0}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="https://uploads-ssl.webflow.com/60bdb1690c4f5a18638da129/60c25d15a773c46e124da101_man.png"
          alt="Student"
          objectFit="contain"
          height="auto"
          width={300}
          zIndex={2}
          bg="#e3e3e3"
          px={3}
          py={3}
          mt={10}
        />
      </Flex>
      <Box w="50%" h="100%" position="relative" zIndex={1} pt="8%" px={100}>
        <Heading fontWeight={500}>Our Student's Love</Heading>
        <Text color={colors.primary} fontWeight={"semibold"} pt="6%">
          "Lorem ipsum dolor sit amet, consectetur...."
        </Text>
        <Text fontWeight={400} pt="4%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Text fontWeight={"bold"} pt="7%">
          Muhammad Muaz
        </Text>
        <Text color="gray" fontWeight={400} pt="1%">
          Faisalabad, Pakistan
        </Text>
      </Box>
    </Box>
  );
}

export default Students;
